
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ProcessedPage, ProcessingState, TranslationBlock, Glossary } from './types';
import { translateSdsPage } from './services/geminiService';
import { AlertTriangleIcon, DownloadIcon, FileTextIcon, LanguagesIcon, UploadCloudIcon } from './components/icons';
import { GhsPictogram, ghsPictogramData } from './components/Ghspictograms';
import { useGlossary } from './hooks/useGlossary';

// Make pdfjs and pdf-lib globally available from the scripts loaded in index.html
declare const pdfjsLib: any;
declare const PDFLib: any;
declare const fontkit: any;

// --- Helper Components ---

interface FileUploadScreenProps {
  onFileSelect: (file: File) => void;
  setIsDragging: (isDragging: boolean) => void;
  isDragging: boolean;
}

const FileUploadScreen: React.FC<FileUploadScreenProps> = ({ onFileSelect, setIsDragging, isDragging }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf') {
        onFileSelect(file);
      }
      e.dataTransfer.clearData();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelect(e.target.files[0]);
    }
  };
  
  const openFileDialog = () => fileInputRef.current?.click();

  return (
    <div className="text-center p-8">
        <LanguagesIcon className="mx-auto h-16 w-16 text-primary-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Multilingual MSDS Generator</h1>
        <p className="mt-4 text-lg leading-7 text-gray-600">
            Automatically translate Japanese MSDS PDFs into English and Vietnamese, preserving GHS pictograms.
        </p>
        <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={openFileDialog}
            className={`mt-10 mx-auto max-w-2xl flex flex-col items-center justify-center rounded-lg border-2 border-dashed ${isDragging ? 'border-primary-600 bg-primary-50' : 'border-gray-300'} p-12 transition-colors duration-200 cursor-pointer hover:border-primary-500`}
        >
            <UploadCloudIcon className="h-12 w-12 text-gray-400"/>
            <p className="mt-4 font-semibold text-gray-700">Drag & drop your PDF here</p>
            <p className="mt-1 text-sm text-gray-500">or click to browse files</p>
            <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    </div>
  );
};


interface ProcessingScreenProps {
  progressMessage: string;
}

const ProcessingScreen: React.FC<ProcessingScreenProps> = ({ progressMessage }) => (
    <div className="flex flex-col items-center justify-center text-center p-8">
        <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        <h2 className="mt-6 text-2xl font-semibold text-gray-800">Processing PDF...</h2>
        <p className="mt-2 text-gray-600">{progressMessage}</p>
    </div>
);

interface ResultsScreenProps {
  pages: ProcessedPage[];
  fileName: string;
  onDownload: () => void;
  onReset: () => void;
  isDownloading: boolean;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ pages, fileName, onDownload, onReset, isDownloading }) => {
    const renderCellContent = (text: string, pictograms?: string[]) => (
        <div className="flex flex-col">
            {pictograms && pictograms.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                    {pictograms.map(p => <GhsPictogram key={p} pictogram={p} className="h-8 w-8" />)}
                </div>
            )}
            <p>{text}</p>
        </div>
    );

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow-sm rounded-lg p-6 mb-6 sticky top-4 z-10 flex flex-col sm:flex-row justify-between items-center gap-4">
                 <div>
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                        <FileTextIcon className="h-6 w-6 mr-3 text-primary-600"/>
                        Translation Complete
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">File: <span className="font-medium">{fileName}</span></p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button onClick={onReset} className="w-full sm:w-auto text-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                        Start Over
                    </button>
                    <button onClick={onDownload} disabled={isDownloading} className="w-full sm:w-auto flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-primary-300 disabled:cursor-not-allowed">
                        {isDownloading ? (
                           <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Generating...
                           </>
                        ) : (
                           <>
                            <DownloadIcon className="h-5 w-5 mr-2" />
                            Download PDF
                           </>
                        )}
                    </button>
                </div>
            </div>
            <div className="space-y-8">
                {pages.map(page => (
                    <div key={page.pageNumber} className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Page {page.pageNumber}</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-md font-semibold text-gray-700 mb-2">Original Page</h4>
                                <img src={page.originalImage} alt={`Original Page ${page.pageNumber}`} className="w-full h-auto border rounded-md"/>
                            </div>
                            <div className="overflow-x-auto">
                                <h4 className="text-md font-semibold text-gray-700 mb-2">Extracted & Translated Text</h4>
                                <div className="max-h-[600px] overflow-y-auto border rounded-md">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50 sticky top-0">
                                            <tr>
                                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">日本語</th>
                                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">English</th>
                                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">Tiếng Việt</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {page.translations.map((t, index) => (
                                                <tr key={index}>
                                                    <td className="px-4 py-3 text-sm text-gray-800 align-top">{renderCellContent(t.original, t.pictograms)}</td>
                                                    <td className="px-4 py-3 text-sm text-gray-800 align-top">{renderCellContent(t.english, t.pictograms)}</td>
                                                    <td className="px-4 py-3 text-sm text-gray-800 align-top">{renderCellContent(t.vietnamese, t.pictograms)}</td>
                                                </tr>
                                            ))}
                                            {page.translations.length === 0 && (
                                                <tr>
                                                    <td colSpan={3} className="px-4 py-4 text-sm text-gray-500 text-center">No text found on this page.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const ErrorScreen: React.FC<{ error: string; onReset: () => void }> = ({ error, onReset }) => (
    <div className="text-center p-8">
         <AlertTriangleIcon className="mx-auto h-16 w-16 text-red-500" />
        <h2 className="mt-4 text-2xl font-bold text-red-700">An Error Occurred</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">{error}</p>
        <button onClick={onReset} className="mt-6 px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            Try Again
        </button>
    </div>
);


// --- Main App Component ---

export default function App() {
  const [file, setFile] = useState<File | null>(null);
  const [processingState, setProcessingState] = useState<ProcessingState>('idle');
  const [progressMessage, setProgressMessage] = useState('');
  const [processedPages, setProcessedPages] = useState<ProcessedPage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { glossary, updateGlossaryFromTranslations, loadGlossary } = useGlossary();

  useEffect(() => {
    loadGlossary();
  }, [loadGlossary]);
  
  const resetState = () => {
      setFile(null);
      setProcessingState('idle');
      setProgressMessage('');
      setProcessedPages([]);
      setError(null);
      setIsDragging(false);
      setIsDownloading(false);
  };

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile);
    setProcessingState('processing');
    setError(null);

    try {
        if (pdfjsLib.GlobalWorkerOptions.workerSrc === '') {
          pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.mjs`;
        }

        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(selectedFile);
        fileReader.onload = async (e) => {
            const typedArray = new Uint8Array(e.target?.result as ArrayBuffer);
            const pdf = await pdfjsLib.getDocument(typedArray).promise;

            const pagesData: ProcessedPage[] = [];
            let allTranslations: TranslationBlock[] = [];

            for (let i = 1; i <= pdf.numPages; i++) {
                setProgressMessage(`Processing page ${i} of ${pdf.numPages}...`);
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 1.5 });
                
                const canvas = document.createElement('canvas');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                const context = canvas.getContext('2d');
                await page.render({ canvasContext: context!, viewport }).promise;
                
                const imageDataUrl = canvas.toDataURL('image/jpeg', 0.9);
                const base64Data = imageDataUrl.split(',')[1];
                
                setProgressMessage(`Translating page ${i} of ${pdf.numPages}...`);
                const translations = await translateSdsPage(base64Data, glossary);
                
                pagesData.push({
                    pageNumber: i,
                    originalImage: imageDataUrl,
                    translations: translations,
                });
                allTranslations = allTranslations.concat(translations);
            }
            
            updateGlossaryFromTranslations(allTranslations);
            setProcessedPages(pagesData);
            setProcessingState('success');
        };
    } catch (err: any) {
        console.error(err);
        setError(err.message || 'An unknown error occurred during processing.');
        setProcessingState('error');
    }
  };
  
  const handleDownload = async () => {
        if (!processedPages.length) return;
        setIsDownloading(true);

        try {
            const { PDFDocument, rgb, StandardFonts } = PDFLib;

            const pdfDoc = await PDFDocument.create();
            const fontBytes = await fetch("https://fonts.gstatic.com/s/notosansjp/v60/-F6pfjtqLzI2JPCgQBnw7HFQ_wc6Qc1h-2Qv1Q.otf").then(res => res.arrayBuffer());
            pdfDoc.registerFontkit(fontkit);
            const customFont = await pdfDoc.embedFont(fontBytes);
            
            // Embed all GHS pictograms once
            const embeddedPictograms: { [key: string]: any } = {};
            for (const key in ghsPictogramData) {
                if(ghsPictogramData[key].pngBase64) {
                    embeddedPictograms[key] = await pdfDoc.embedPng(ghsPictogramData[key].pngBase64!);
                }
            }

            const fontSize = 8;
            const margin = 40;
            const lineHeight = fontSize + 4;
            const tableHeaderColor = rgb(0.95, 0.95, 0.95);
            const textColor = rgb(0, 0, 0);
            const pictogramSize = 24;

            for (const pageData of processedPages) {
                const page = pdfDoc.addPage();
                const { width, height } = page.getSize();
                
                let y = height - margin;

                page.drawText(`Translated MSDS - Page ${pageData.pageNumber}`, { x: margin, y, font: customFont, size: 14 });
                y -= 30;
                
                const colWidth = (width - margin * 2) / 3;
                const colPositions = [margin, margin + colWidth, margin + 2 * colWidth];

                page.drawRectangle({ x: margin, y: y - lineHeight, width: width - margin * 2, height: lineHeight, color: tableHeaderColor });
                page.drawText('日本語 (Japanese)', { x: colPositions[0] + 5, y: y - fontSize, font: customFont, size: fontSize, color: textColor });
                page.drawText('English', { x: colPositions[1] + 5, y: y - fontSize, font: customFont, size: fontSize, color: textColor });
                page.drawText('Tiếng Việt (Vietnamese)', { x: colPositions[2] + 5, y: y - fontSize, font: customFont, size: fontSize, color: textColor });
                y -= lineHeight;

                for (const t of pageData.translations) {
                     if (y < margin) { break; }
                    
                    const texts = [t.original, t.english, t.vietnamese];
                    const pictogramHeight = (t.pictograms && t.pictograms.length > 0) ? pictogramSize + 4 : 0;
                    
                    const linesByCol = texts.map((text, i) => {
                        const targetFont = customFont;
                        const lines: string[] = [];
                        let currentLine = '';
                        const words = text.replace(/\n/g, ' ').split(' ');
                        for (const word of words) {
                            const testLine = currentLine.length > 0 ? `${currentLine} ${word}` : word;
                            const testWidth = targetFont.widthOfTextAtSize(testLine, fontSize);
                            if (testWidth > colWidth - 10) {
                                lines.push(currentLine);
                                currentLine = word;
                            } else { currentLine = testLine; }
                        }
                        lines.push(currentLine);
                        return lines;
                    });
                    
                    const maxLines = Math.max(...linesByCol.map(l => l.length));
                    const textBlockHeight = maxLines * lineHeight;
                    const totalBlockHeight = textBlockHeight + pictogramHeight;

                    if (y - totalBlockHeight < margin) { break; }

                    y -= pictogramHeight;
                    if(t.pictograms && t.pictograms.length > 0) {
                        for(let i = 0; i < 3; i++) {
                            let px = colPositions[i] + 5;
                            t.pictograms.forEach(pKey => {
                                const embeddedImg = embeddedPictograms[pKey];
                                if(embeddedImg) {
                                    page.drawImage(embeddedImg, { x: px, y, width: pictogramSize, height: pictogramSize });
                                    px += pictogramSize + 2;
                                }
                            });
                        }
                    }
                    
                    for(let i = 0; i < 3; i++) {
                         linesByCol[i].forEach((line, lineIndex) => {
                             page.drawText(line, {
                                 x: colPositions[i] + 5, y: y - (lineIndex + 1) * lineHeight + 2,
                                 font: customFont, size: fontSize, color: textColor,
                                 maxWidth: colWidth - 10, lineHeight,
                             });
                         });
                    }
                    y -= textBlockHeight;
                }
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `translated_${file?.name || 'msds.pdf'}`;
            link.click();
            URL.revokeObjectURL(link.href);

        } catch (err: any) {
            console.error("Failed to generate PDF:", err);
            setError("Failed to generate PDF. Check the console for details.");
            setProcessingState('error');
        } finally {
            setIsDownloading(false);
        }
    };


  const renderContent = () => {
    switch (processingState) {
      case 'processing':
        return <ProcessingScreen progressMessage={progressMessage} />;
      case 'success':
        return <ResultsScreen pages={processedPages} fileName={file?.name || ''} onDownload={handleDownload} onReset={resetState} isDownloading={isDownloading} />;
      case 'error':
        return <ErrorScreen error={error || 'An unknown error occurred.'} onReset={resetState}/>
      case 'idle':
      default:
        return <FileUploadScreen onFileSelect={handleFileSelect} setIsDragging={setIsDragging} isDragging={isDragging} />;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        {renderContent()}
      </div>
    </main>
  );
}