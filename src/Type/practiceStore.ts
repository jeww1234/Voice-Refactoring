//타입 저장소

export type SentenceLanguage = "ko" | "en";
export type SentenceLength = "short" | "long";
export type SentenceCategory =
  | "quote"
  | "book"
  | "movie"
  | "music"
  | "news"
  | "sns"
  | "philosophy"
  | "daily";

export type SentenceMap = {
  [lang: string]: {
    [category: string]: {
      short: string[];
      long: string[];
    };
  };
};
