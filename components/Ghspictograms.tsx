import React from 'react';

// --- SVG Components for UI display ---

const Ghs01_ExplodingBomb: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="white" stroke="red" strokeWidth="5"/>
        <path transform="translate(50 50) scale(2.5)" d="M-5.5-1A1.5 1.5 0 0 1-4-2.5A1.5 1.5 0 0 1-2.5-1H2.5A1.5 1.5 0 0 1 4-2.5A1.5 1.5 0 0 1 5.5-1V1A1.5 1.5 0 0 1 4 2.5A1.5 1.5 0 0 1 2.5 1H-2.5A1.5 1.5 0 0 1-4 2.5A1.5 1.5 0 0 1-5.5 1z M-10 4A6 6 0 1 1 2 4A6 6 0 0 1-10 4z M-11 7L-13 5M-11 1L-14 1M-8 9L-8 12M-2 9L-2 12M1 7L3 5M1 1L4 1" stroke="black" strokeWidth="1.2" fill="none"/>
    </svg>
);

const Ghs02_Flame: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="white" stroke="red" strokeWidth="5"/>
        <path d="M30 85 h40" stroke="black" strokeWidth="4"/>
        <path d="M 50,85 C 50,85 30,75 30,60 C 30,45 50,45 50,30 C 50,45 70,45 70,60 C 70,75 50,85 50,85 z" fill="black" />
    </svg>
);

const Ghs03_FlameOverCircle: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="white" stroke="red" strokeWidth="5"/>
        <circle cx="50" cy="65" r="20" stroke="black" strokeWidth="4" fill="none"/>
        <path d="M 50,60 C 50,60 40,50 40,40 C 40,30 50,30 50,20 C 50,30 60,30 60,40 C 60,50 50,60 50,60 z" fill="black" />
    </svg>
);

const Ghs04_GasCylinder: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="white" stroke="red" strokeWidth="5"/>
        <path d="m 42,25 h 16 v 5 h 2 v -7 h -20 v 7 h 2 z m -2,7 v 50 h 20 v -50 z" fill="black"/>
    </svg>
);

const Ghs05_Corrosion: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="white" stroke="red" strokeWidth="5"/>
        <path d="M 20 70 L 80 70 L 80 75 L 20 75 Z" fill="grey"/>
        <path d="m 25,65 v -10 h 5 v 10 z m 10,0 v -15 h 5 v 15 z" fill="black" />
        <path d="m 55,25 -5,20 5,0 z m 10,0 -5,20 5,0 z m 10,0 -5,20 5,0 z" fill="black" />
        <path d="m 20,35 h 25 v 5 H 20 Z" fill="black" />
        <path d="m 55,55 h 25 v 5 H 55 Z" fill="grey" />
    </svg>
);

const Ghs06_SkullAndCrossbones: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="white" stroke="red" strokeWidth="5"/>
        <path d="M 35 60 L 65 80 M 65 60 L 35 80" stroke="black" strokeWidth="6"/>
        <circle cx="50" cy="45" r="15" fill="black"/>
        <rect x="40" y="58" width="20" height="5" fill="black"/>
    </svg>
);

const Ghs07_ExclamationMark: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="white" stroke="red" strokeWidth="5"/>
        <path d="m 45,25 h 10 l -3,40 h -4 z" fill="black"/>
        <circle cx="50" cy="75" r="6" fill="black"/>
    </svg>
);

const Ghs08_HealthHazard: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="white" stroke="red" strokeWidth="5"/>
        <path d="m50 25-10 10v15h-10v10h10v15l10 10 10-10v-15h10v-10h-10v-15z" fill="black"/>
        <path d="m50 42-5 5v5h-5v2h5v5l5 5 5-5v-5h5v-2h-5v-5z" fill="white" stroke="black" strokeWidth="1"/>
    </svg>
);

const Ghs09_Environment: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="white" stroke="red" strokeWidth="5"/>
        <path d="m 40,30 25,25 -10,10 -15,-15 z m 5,20 -15,15 -5,15 15,-5 15,-15 z" fill="black" />
        <path d="m 70,65 -10,-5 -5,-10 5,0 10,10 z" fill="grey"/>
    </svg>
);


// --- Data Mapping ---
// Maps pictogram IDs to their respective component and base64 encoded PNG for PDF generation.
export const ghsPictogramData: { [key: string]: { component: React.FC<any>; pngBase64?: string } } = {
    GHS01_ExplodingBomb: { component: Ghs01_ExplodingBomb, pngBase64: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACYElEQVR4Xu2azytEURDHP4+GMoqFLFSSRSQspGDBQv4flJQFC1lYyElKspCyUJKFjYXs/JOFEoUMRPL4er3TzJu5d87MvTPfV311M/f7dM69d86891oMBoPBYDAYDAZj/pGgFk2kCTSCJtAAGkEnuJz/Q7gA60AP2APmQCh4fRvgGvgGbgCvgK+A8wP4kRJsCvgKPAfeAgfa0HwJbANnQPj4XQEmgL/As0C4/F0BlkBwBsyBwPG3CgwC9bAgB6yBwPG3CJwAupA793wGgsffJ3AGKEHq3H4wKPx9BrcBRUhZ6oA8o7D0dYTfAcJqWcoAGWZh6esIPwPEkbIUAWLMwtLXEV4AiKtlKQLMWIWlr1e8DhBHylIMiLEaW/p6xRsA0bSUBSIsxrK3l7xVEEdKUg6IsRbL3l7yRkAcKUk5IMZqLHt7yX8A4kpJyoAwa7Hs7SWfAcSVkpQBwmyGpa8j/AEQV8pSBwizmZa+jvAzQBwpS10gzGaSvl7xLkAcKUkdIsZmW/p6xU8AcaQkdYAwa7K8veRfAIgrJWkDwrzJ8vaSTwDCSknaAmFWZ/l7ybcBcKUk7QBwqwNl/S+AmFKSOkCY1YHS/hdAjClJHSLM6kDp/gtAjClJkyDM6kDp/gtAjClJkyDM6kDp/gtAjClJHSDKas/S1xG+AsSRktQBwqwflr6O8DVAnChJHSLM+mHp6xW/AcaQktQBITbD0teL9wDCSElqgBBbYenrCR8AxJGS1AAhNsPS1xP+AoQTJWkEhNkcS19P+AMgTJSkmRBmc5y+niUMBoPBYDAYDEb/6guk3/CgCjNppgAAAABJRU5ErkJggg==' },
    GHS02_Flame: { component: Ghs02_Flame, pngBase64: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACUUlEQVR4Xu2ayytEURDHP/eBlRQpUrKQhYqFLJSsWMhCysIflJQFC1lYyFJKspCyUJKFjYXs/JNlk4UMRPL4er3TzJu5d87MvTPfV311M/f7dM69d86895pCoVAoFAqFQqGQ+UcoaEATaAItIAG0gALSgE7yVwQ2gQfgC/gEvgEfgL+AmwL4kRIcTcAfcBS4Ahy0ofkP4BdwBgSPvyXgB/gKvAscEd6/JeABSA6BBRA4/paAB6A2pMgR4BQIHH+bwAXQhdx5ezYg8PhpAieAElLuLgYiQ+A/g+AEKEPKUgUIs/AL/2MInwHiSFkKQLDwm/5jCF8BxJWylABhbvxL/zGENwDisJQFIiz+l/5eiTcAcqSUBSIs/o/+Xol3AOKklAUiLP6H/l7J/wDCSkkKQLD4L/3HEH4CCKskKQDwLf1D/xH+BYgrJSkDxFb+pf8YwusAcaQkdYDYyv/0/5I3AOJISepAYeU/+n9J/gAQUUrSBggr/8v/U/ITQFgpSVsgrPw3/0/JXwBhpSRtgLCqf+l/AOElJakDhFV9S/8xgBeSktQBYVU/S/8xgBeSktQBYVU/S/8xgBeSktQDYVU/S/8xgBeSkgkQVv1r/xHCF4BYUpIGQFj1v/1HEF4CCKkkGQC8+v/2H0H4CSCsksgAwKv/T/8xBNcAYklFAsBW/5f+YwifAeJISQoAsdW/9B9DeAUgjpSkABS7+kv/L0UAnJKUACDLv/R/ifcAIklJAgCZ/6P/S94AiCElCQBk/g/9v8T/AAghJSkAgOY/9B9D+AAghJSkAACa/9B9DOEAoFAoFAqFQqFQyPwjNBG4c0JgXW0AAAAASUVORK5CYII=' },
    GHS03_FlameOverCircle: { component: Ghs03_FlameOverCircle, pngBase64: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACSklEQVR4Xu2av0sDQRCHPx/3hKAViigaC1hZa+M/sLC1t7Gws7G18RNYWOmTBBtBsLHQwhItQiQoKCKI4MHdXTizM+/u7L64eOEBw93Z2d3Zm53dxUIhhUoLKQspCyULKQslyygbySf+R0gHGAHfgwPwcU6/G3AC7gY/wMvN/Z+AK8GXGvhRgI8wYAT8DbwJjloLnwP3gQ6j/p/gZ+Aq9B1wBvh+W/gMuAZ0GfcPABsgPA+sAWeD/gHAFhA+BtqAO8P+EcBWED4EPoQ3w/wBwFbwfh8wARwY9ocAW8H7e8ASUBj2jwHbgXtfQCfgBxgw6L8BbAfuPQGdgSfw+mR9BtgOvGcAzsBfMH4yP4TsBN59ANvAgzB2Mr+H7AbefQDj52kZ/yXgduDNA7AM5kfy74LcB948AOfi6ZH5Kci9wJsH4Fyc/5b/AORe4M0DkC+Gv+S/BbkTePMAJAthkfkZyF3g3QRQLISJ/wzI/cBbCeBUDIPMjyH3AW8lgHMx7DLfA7kfeCsBvBXDJvMj5AfgLQVwC4ZJ5meQHYG3EsAuGCaZnyHbAW8lgFswTDJ/BdkYeCsBbMPo/1eAEzEMMz+D7AF8/Q84DcM08yPIXsDvXwBnY5hkvgf5fP3+C3AuhnkmgL9+8/cF8H4G+WSA/24Bvg/E/wH++v0fgL83zB8B/v4aP0TgfWfMlwD+vnwYAvsP8/cA/r4B3Af2neH3AP5+PzgC++9z/v+A3++D/fM5fwD4++J+N5h/DPh7w/E3wH53mJ8D/H3h+H9Zz3+A369H/wXmvwb8vaX6vwn2/y+Z/x7w9xTrZ4H9/sM/gN+v7L9f5v8L+PuafXUw/yLg70vWb/eW/yXg77PsbwH73Sj//4Bf15a/lUoLKQspCyULKQtF/QNnE3d4w9+b1QAAAABJRU5ErkJggg==' },
    GHS04_GasCylinder: { component: Ghs04_GasCylinder, pngBase64: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACUklEQVR4Xu2awU4DMRBF/9gYcCHcQc0JcAI8geEG4w14AW4QNyYg7gBJYkSNAXEA4wXwAIyYGBMTHHjC0w477XRWp7u7F/mTTjq1/f15enpaW4lEIpFIJBKJRCJd2YcKaAAtIAG0gALSgE7yFwR2gQfgC/gEvgEfgL+AmwL4kRIcTcAfcBS4Ahy0ofkP4BdwBgSPvyXgB/gKvAscEd6/JeABSA6BBRA4/paAB6A2pMgR4BQIHH+bwAXQhdx5ezYg8PhpAieAElLuLgYiQ+A/g+AEKEPKUgUIs/AL/2MInwHiSFkKQLDwm/5jCF8BxJWylABhbvxL/zGENwDisJQFIiz+l/5eiTcAcqSUBSIs/o/+Xol3AOKklAUiLP6H/l7J/wDCSkkKQLD4L/3HEH4CCKskKQDwLf1D/xH+BYgrJSkDxFb+pf8YwusAcaQkdYDYyv/0/5I3AOJISepAYeU/+n9J/gAQUUrSBggr/8v/U/ITQFgpSVsgrPw3/0/JXwBhpSRtgLCqf+l/AOElJakDhFV9S/8xgBeSktQBYVU/S/8xgBeSktQBYVU/S/8xgBeSktQDYVU/S/8xgBeSkgkQVv1r/xHCF4BYUpIGQFj1v/1HEF4CCKkkGQC8+v/2H0H4CSCsksgAwKv/T/8xBNcAYklFAsBW/5f+YwifAeJISQoAsdW/9B9DeAUgjpSkABS7+kv/L0UAnJKUACDLv/R/ifcAIklJAgCZ/6P/S94AiCElCQBk/g/9v8T/AAghJSkAgOY/9B9D+AAghJSkAACa/9B9DOEAoVAoFAqFQqFQyPwjNBG4c0JgXW0AAAAASUVORK5CYII=' },
    GHS05_Corrosion: { component: Ghs05_Corrosion, pngBase64: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACsklEQVR4Xu2a23HDMAxF/3M6gGyQbgTZINkA3SA3SDdIN0g3gGyQbkA3SAayQTaA6/UoVvyRJCk54HjvVw7iE+09Pb1bYjQajUaj0Wg0mg0xYgX0gCagKmgGDSB9hJ/4R6wHvgN/wAfg+Xg4Bb4AD0A/oA24zYGvNMAv6AFdgWvAowE8C5wBboDgeG8BD4B/wNPAdHh/CRwAPoGZMDgeL4G3QGtIjilwDBgcdy+BC0BXcsftzYDA8XcJXAOKkHIvMRAGg/8YgicAeUhpCoBg4Tf/YwifAOSwkhQAgcIv/cco/ASQh1ZSAAQKP/QfQ3gLkAcrSQECRf6k/1eiHUAeKkkBEijyl/5eifYAeUySBiBQ5P/0/5L/ASSxSRoAwOL/9B9D+AEgkk0SAIDv1z/8j/A3QCKbJAEIXv1f+o+hvAWQwyQJgBDq/5b+XtG3gBgmyQAEwv7p/yVvASUySQIgcHr+p/8V/AQgmSQBCHQe/k/5L8AmkmQAAp3H/5P+C7BJJAkAhHYf/Ycg+UhyADq/z38kOUB7k+T5Q+Y+f/8fIM8B7U1yAIA+/6PkAa5NkwMA6vO/SA5wo0wSAFB+/4P+B7hVJh8AfP0c/z8Br5nJBeD1M/x/Ab5iBg4AHj7k/wX4gpkYABx8yP8T4C+WbAHw/kP+pwB/sdwHAPcf8r8A+F8Lzwf7v+R/AuDvrcwH+/4B/6/A32sZA/D+ff5PAt/eKgcA7j/s/wH8vXUCAP5/2f9/AL/eVQ4A6t+m/xL8eVsFAID/z+sfgDdvCQAA+X3j/wW8eZsAAJBPW/97ePNNR6PRaDQajUaT+Cfu/t6t0qfNwgAAAABJRU5ErkJggg==' },
    GHS06_SkullAndCrossbones: { component: Ghs06_SkullAndCrossbones, pngBase64: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACUUlEQVR4Xu2awU4DMRBF/9gYcCHcQc0JcAI8geEG4w14AW4QNyYg7gBJYkSNAXEA4wXwAIyYGBMTHHjC0w477XRWp7u7F/mTTjq1/f15enpaW4lEIpFIJBKJRCJd2YcKaAAtIAG0gALSgE7yFwR2gQfgC/gEvgEfgL+AmwL4kRIcTcAfcBS4Ahy0ofkP4BdwBgSPvyXgB/gKvAscEd6/JeABSA6BBRA4/paAB6A2pMgR4BQIHH+bwAXQhdx5ezYg8PhpAieAElLuLgYiQ+A/g+AEKEPKUgUIs/AL/2MInwHiSFkKQLDwm/5jCF8BxJWylABhbvxL/zGENwDisJQFIiz+l/5eiTcAcqSUBSIs/o/+Xol3AOKklAUiLP6H/l7J/wDCSkkKQLD4L/3HEH4CCKskKQDwLf1D/xH+BYgrJSkDxFb+pf8YwusAcaQkdYDYyv/0/5I3AOJISepAYeU/+n9J/gAQUUrSBggr/8v/U/ITQFgpSVsgrPw3/0/JXwBhpSRtgLCqf+l/AOElJakDhFV9S/8xgBeSktQBYVU/S/8xgBeSktQBYVU/S/8xgBeSktQDYVU/S/8xgBeSkgkQVv1r/xHCF4BYUpIGQFj1v/1HEF4CCKkkGQC8+v/2H0H4CSCsksgAwKv/T/8xBNcAYklFAsBW/5f+YwifAeJISQoAsdW/9B9DeAUgjpSkABS7+kv/L0UAnJKUACDLv/R/ifcAIklJAgCZ/6P/S94AiCElCQBk/g/9v8T/AAghJSkAgOY/9B9D+AAghJSkAACa/9B9DOEAoVAoFAqFQqFQyPwjNBG4c0JgXW0AAAAASUVORK5CYII=' },
    GHS07_ExclamationMark: { component: Ghs07_ExclamationMark, pngBase64: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACeElEQVR4Xu2awU4bMRBFv9gYcCHcQc0JcAI8geEG4w14AW4QNyYg7gBJYkSNAXEA4wXwAIyYGBMTHHjC0w477XRWp7u7F/mTTjq1/f15enpaW4lEIpFIJBKJRCJd2YcKaAAtIAG0gALSgE7yFwR2gQfgC/gEvgEfgL+AmwL4kRIcTcAfcBS4Ahy0ofkP4BdwBgSPvyXgB/gKvAscEd6/JeABSA6BBRA4/paAB6A2pMgR4BQIHH+bwAXQhdx5ezYg8PhpAieAElLuLgYiQ+A/g+AEKEPKUgUIs/AL/2MInwHiSFkKQLDwm/5jCF8BxJWylABhbvxL/zGENwDisJQFIiz+l/5eiTcAcqSUBSIs/o/+Xol3AOKklAUiLP6H/l7J/wDCSkkKQLD4L/3HEH4CCKskKQDwLf1D/xH+BYgrJSkDxFb+pf8YwusAcaQkdYDYyv/0/5I3AOJISepAYeU/+n9J/gAQUUrSBggr/8v/U/ITQFgpSVsgrPw3/0/JXwBhpSRtgLCqf+l/AOElJakDhFV9S/8xgBeSktQBYVU/S/8xgBeSktQBYVU/S/8xgBeSktQDYVU/S/8xgBeSkgkQVv1r/xHCF4BYUpIGQFj1v/1HEF4CCKkkGQC8+v/2H0H4CSCsksgAwKv/T/8xBNcAYklFAsBW/5f+YwifAeJISQoAsdW/9B9DeAUgjpSkABS7+kv/L0UAnJKUACDLv/R/ifcAIklJAgCZ/6P/S94AiCElCQBk/g/9v8T/AAghJSkAgOY/9B9D+AAghJSkAACa/9B9DOEAoVAoFAqFQqFQyPwjNBG4c0JgXW0AAAAASUVORK5CYII=' },
    GHS08_HealthHazard: { component: Ghs08_HealthHazard, pngBase64: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACbUlEQVR4Xu2a221DMQxFv/2MAtkA3SCZAN0g3SDdgGyQboB0A7JBNkA3QCaQDVgA13qUyIqdyMljXG/3I+95iR37yWw5nBOPx+PxeDwaQzViBfSAFqAqmAaNIAWE7/hHsAf4DvgDPABPh4dT4AvwAPSBNuAyB77SAA+gF3QFrgGPCvApcAZ4AQTHews4APwDngZTw/tL4ADwCcwEwfF4CWwCrSE5psAxcDBuL4ELYCu54/ZmIGDcfgkcA7SEci8xEAb/MYRPAGlIaQqAYOG3/mMMXwA0WFkKAGHhd/7jCF8BNFhJChBh4Zf+YwivAYRYSAoQYfGf/l6JNgDCSAkCRB7/6e+VaAeQxyRpAETk/8v/S/4DSGKQNACI4v+X/mMINwBEkkgCAD7+c//I/wrEkkkSAKj+r/zHEF4DyGGQBACY83/L/y3vAWQwSAIAxPqf/F/yJ0AEgyQAQP4/+b/kvwDCSBIAiK/8i/5HkAwiCQDI7x/wH0EGiSQAIP0+yX0/4wOQDiIZAFj8I5IdAKVIMgCAnX8iOQCVSBIAgLP/RHIAapEkABB3/I3+B6hGkgBA4n8SOQB1SJIAAHj8I5L7AOSQJAAAF/+R3AfIIZEEACB/f8n9A+SQSAIAU/+R3D8gjpRIAEB+/z/5D5BHIgkAUP3/kvsA4kgSAABe/z/5HyCOJAEAgN8/JfcBkkgSAIDq/yX3AUwkAQB4/Z/kPkASEgD4/H/yH0ASEgCQ3/+b/geISwIAkPnf5H4A8SQAgPB/kvsHhJEAAIQ/JPePYYvH4/F4PJ78G6Y1t59Lh+1XAAAAAElFTkradicalQ==' },
    GHS09_Environment: { component: Ghs09_Environment, pngBase64: 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACdklEQVR4Xu2ay42EMBBFv/2MApkA3SCZAN0g3SDdQDbIBtANkA2SDcgGyAbpBsgEMgEZWJEr2VFsR/K48R1P7tiX7HjL3k5fV1dXV1dXV1dX99sSVoA74AlwEfgC/AZ+AU/AowD8SAMOJuA98Bp4C5xoxbMLPAI+AWHi8VcBrsBD4CTQKPx9Bc4C1YHCFngJhIu/ReAcoAu55faJgMDx9wi8BSoh5V4jIAwG/zGEbwA5SGEKAGHhd/7jCF8BZLCSFACBwm/9xxC+AsiDFSVAhIXf+o8hvAQQYCEpQITFn/S9Em0AwhgJAUSkP+n3SjQDOKNJGgCR+v+X/5f8BZDQJGkAROj/5f8xxBeACKRpAIA/2z/8j/A3QBSaJAEAnH/L/zGEVwA5TJIACLz+b/m/5V0AOEySAAgU/1b+r/kLIIZJEgDA8T+1/5L/AIgjSQAA439q/yX/AYSRJAAAxf+Y/geQSSQJAIz/M/0PkEkiCQAw/o/+B5BJJAkAMP6P/geQSSQJAIz/o/+B5BJJAkA4/u/+R5C/JBkAIfz5HyD/kjQAgPDnf4D8S5IAAIj+D5AfSYIAAPR/gPxIEgAA/D9AfiQJAEAC/z8gH0kCAAD+fyB/kgQAAHL/APmTJAAAEP4D8idJAADQ/wHyJ0kAAIL/A+RPkgAAgH8g/5MkAACgfyD/kyQAAAj5B/InSQAA0P9B/idJAAAQ/gHyP0kCAAD/If+TJAAAwD+R/0kSAAAI+RfyJ0kAAJD/Qv4nSQAA0P9C/idJAACQ/UL+J0kAAJD9Qv7//3eun81J/wF1P1/c+B+O3QAAAABJRU5ErkJggg==' },
};


interface GhsPictogramProps {
  pictogram: string;
  className?: string;
}

export const GhsPictogram: React.FC<GhsPictogramProps> = ({ pictogram, className }) => {
  const data = ghsPictogramData[pictogram];
  if (!data) return null; // or a placeholder
  const PictogramComponent = data.component;
  return <PictogramComponent className={className} />;
};
