
import React from 'react';
import {
    LanguageContext,
    LanguageContextType
} from './LanguageProvider';

export default function useLanguage() {
    return React.useContext<LanguageContextType>(LanguageContext);
}