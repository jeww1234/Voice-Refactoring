import "./Intro.style.css"
import type {FC} from "react"

const Intro: FC = () => {
  return (
    <div id="app">
      <div id="mainScreen" className="screen active">
        <div className="container">
          <h1 className="logo">AI Speak!</h1>
          <h2 className="subtitle">[AI 기반 언어 발음 연습 서비스]</h2>
          <button className="btn-primary" id="startBtn">
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
