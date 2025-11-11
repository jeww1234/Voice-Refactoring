import React from "react";
import { usePracticeStore } from "../../../../Store/usePracticeStore";
import type {
  SentenceCategory,
  SentenceLanguage,
  SentenceLength,
} from "../../../../Type/practiceStore";
import "./SelectOption.style.css";
import Button from "react-bootstrap/Button";

const SelectOption: React.FC = () => {
  //버튼 상태
  const {
    length,
    language,
    category,
    setLength,
    setLanguage,
    setCategory,
    setCurrentSentence,
    sentences,
  } = usePracticeStore();

  console.log(language, length, category);

  //문장 생성 버튼 활성 조건
  const isReady = language && length && category;
  console.log(isReady);

  //   문장 성생 함수
  const generateSentence = () => {
    console.log("문장 생성");
    setCurrentSentence("");
    if (language && length && category) {
      const pool =
        sentences[language as SentenceLanguage]?.[
          category as SentenceCategory
        ]?.[length as SentenceLength];

      if (pool?.length) {
        const random = pool[Math.floor(Math.random() * pool.length)];
        console.log("선택된 문장", random);
        setCurrentSentence(random);
      }
    }
  };

  //카테고리 배열
  const categories: { key: SentenceCategory; label: string }[] = [
    { key: "quote", label: "명언" },
    { key: "book", label: "서적" },
    { key: "movie", label: "영화/드라마" },
    { key: "music", label: "음악/가사" },
    { key: "news", label: "뉴스/시사" },
    { key: "sns", label: "SNS/트렌드" },
    { key: "philosophy", label: "철학/사유" },
    { key: "daily", label: "일상/감정" },
  ];

  return (
    <div>
      <h1>학습 설정</h1>

      {/* 언어 선택 */}
      <div>
        <h3>1. 언어 선택</h3>
        <div>
          <Button
            onClick={() => setLanguage("ko")}
            className={`m-1 ${
              language === "ko" ? "bg-success border-dark border-1" : ""
            }`}
            size="sm"
          >
            한국어(kr)
          </Button>
          <Button
            onClick={() => setLanguage("en")}
            className={`m-1 ${
              language === "en" ? "bg-success border-dark border-1" : ""
            }`}
            size="sm"
          >
            영어(en)
          </Button>
        </div>
      </div>

      {/* 길이 선택 */}
      <div>
        <h3>2. 길이 선택</h3>
        <div>
          <Button
            onClick={() => setLength("short")}
            className={`m-1 ${
              length === "short" ? "bg-success border-dark border-1" : ""
            }`}
            size="sm"
          >
            짧은 문장
          </Button>
          <Button
            onClick={() => setLength("long")}
            className={`m-1 ${
              length === "long" ? "bg-success border-dark border-1" : ""
            }`}
            size="sm"
          >
            긴 문장
          </Button>
        </div>
      </div>

      {/* 카테고리 선택 */}
      <div>
        <h3>3. 카테고리 선택</h3>
        <div>
          {categories.map((cat) => (
            <Button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`m-1 ${
                category === cat.key ? "bg-success border-dark border-1" : ""
              }`}
              size="sm"
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      {/* 문장 생성 버튼 */}
      <Button disabled={!isReady} onClick={generateSentence} className="w-100">
        문장 생성하기
      </Button>
    </div>
  );
};

export default SelectOption;
