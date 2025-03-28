import zhCN from './zh-CN';
import enUS from './en-US';

export const locales = {
    'zh-CN': zhCN,
    'en-US': enUS
} as const;

export type LocaleType = keyof typeof locales;
export type LocaleKeys = keyof typeof zhCN;

export default locales; 