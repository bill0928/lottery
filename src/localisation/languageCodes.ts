// locale moment
// import 'moment/locale/zh-cn'
// import 'moment/locale/zh-tw'
// import 'moment/locale/hi'
// import 'moment/locale/ja'
// import 'moment/locale/ko'
// import 'moment/locale/vi'
// locale files
import en_US from "./i18n/en-us";
import zh_CN from "./i18n/zh-cn";
import { LangType } from "./types";
import { ReactNode } from "react";

export const EN = {
  code: "en-us",
  language: "English",
  locale: en_US,
};
export const ZHCN = {
  code: "zh-cn",
  language: "简体中文",
  locale: zh_CN,
};

export const allLanguages: LangType[] = [
  EN,
  ZHCN,
];
export const convertLan = (value?: string) => {
  if (!value) {
    return null;
  }
  const cv = value.toUpperCase();
  const f = allLanguages.find((x) => x.code.toUpperCase() === cv);
  if (f) {
    return f.code;
  }
  return null;
};
