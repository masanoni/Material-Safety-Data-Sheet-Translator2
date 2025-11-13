import { GoogleGenAI, Type } from "@google/genai";
import { TranslationBlock, Glossary } from '../types';

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = 'gemini-2.5-flash';

const translationSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            original: {
                type: Type.STRING,
                description: 'The original Japanese text block.',
            },
            english: {
                type: Type.STRING,
                description: 'The English translation.',
            },
            vietnamese: {
                type: Type.STRING,
                description: 'The Vietnamese translation.',
            },
            pictograms: {
                type: Type.ARRAY,
                description: "An array of GHS pictogram identifiers found next to this text block. Use the exact identifiers provided in the prompt.",
                items: {
                    type: Type.STRING,
                }
            }
        },
        required: ['original', 'english', 'vietnamese'],
    },
};

const getPrompt = (glossary: Glossary): string => `
You are an expert assistant for translating Material Safety Data Sheets (MSDS/SDS).
Your task is to analyze the provided image of an SDS page and perform three tasks:
1.  Identify all distinct blocks of Japanese text.
2.  Identify all GHS pictograms on the page. The valid pictogram identifiers are: GHS01_ExplodingBomb, GHS02_Flame, GHS03_FlameOverCircle, GHS04_GasCylinder, GHS05_Corrosion, GHS06_SkullAndCrossbones, GHS07_ExclamationMark, GHS08_HealthHazard, GHS09_Environment.
3.  Associate the pictograms with the relevant text block they apply to.

Then, for each text block, provide the following:
- The original Japanese text.
- An accurate translation into both English and Vietnamese, maintaining technical accuracy.
- An array of the associated GHS pictogram identifiers. If no pictograms are associated with a text block, return an empty array or omit the field.

**IMPORTANT RULES:**
- Return the result as a JSON object that strictly adheres to the provided schema.
- If a Japanese term exists in the provided glossary, YOU MUST use the corresponding English and Vietnamese translation for consistency.
- If there is no text on the page, return an empty array.

**GLOSSARY FOR CONSISTENT TRANSLATION (Japanese: {English, Vietnamese}):**
${JSON.stringify(glossary, null, 2)}
`;

export const translateSdsPage = async (imageBase64: string, glossary: Glossary): Promise<TranslationBlock[]> => {
    try {
        const imagePart = {
            inlineData: {
                mimeType: 'image/jpeg',
                data: imageBase64,
            },
        };

        const response = await ai.models.generateContent({
            model: model,
            contents: { parts: [imagePart, { text: getPrompt(glossary) }] },
            config: {
                responseMimeType: 'application/json',
                responseSchema: translationSchema,
            },
        });

        const jsonText = response.text.trim();
        const translatedData = JSON.parse(jsonText);
        
        return translatedData as TranslationBlock[];

    } catch (error) {
        console.error("Error translating SDS page:", error);
        throw new Error("Failed to get translations from the AI model. Please check the console for details.");
    }
};
