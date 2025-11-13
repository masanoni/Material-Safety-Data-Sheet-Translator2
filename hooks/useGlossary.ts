import { useState, useCallback } from 'react';
import { Glossary, TranslationBlock } from '../types';

const GLOSSARY_STORAGE_KEY = 'msds_translation_glossary';

export const useGlossary = () => {
    const [glossary, setGlossary] = useState<Glossary>({});

    const loadGlossary = useCallback(() => {
        try {
            const storedGlossary = window.localStorage.getItem(GLOSSARY_STORAGE_KEY);
            if (storedGlossary) {
                setGlossary(JSON.parse(storedGlossary));
            }
        } catch (error) {
            console.error("Failed to load glossary from localStorage:", error);
        }
    }, []);

    const saveGlossary = useCallback((newGlossary: Glossary) => {
        try {
            window.localStorage.setItem(GLOSSARY_STORAGE_KEY, JSON.stringify(newGlossary));
        } catch (error) {
            console.error("Failed to save glossary to localStorage:", error);
        }
    }, []);

    const updateGlossaryFromTranslations = useCallback((translations: TranslationBlock[]) => {
        setGlossary(currentGlossary => {
            const newGlossary = { ...currentGlossary };
            let hasChanged = false;

            translations.forEach(t => {
                // Only add non-trivial strings to the glossary
                if (t.original && t.original.trim().length > 1 && !newGlossary[t.original]) {
                    newGlossary[t.original] = {
                        english: t.english,
                        vietnamese: t.vietnamese
                    };
                    hasChanged = true;
                }
            });

            if (hasChanged) {
                saveGlossary(newGlossary);
                return newGlossary;
            }
            
            return currentGlossary;
        });
    }, [saveGlossary]);

    return {
        glossary,
        loadGlossary,
        updateGlossaryFromTranslations
    };
};
