import "./Main.style.css";
import React from 'react'
import SelectOption from "./component/SelectOption/SelectOption";
import Recording from "./component/Recording/Recording";
import Result from "./component/Result/Result";

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="option-area">
        <SelectOption />
      </div>
      <div className="recorder-area">
        <Recording />
      </div>
      <div className="result-area">
        <Result />
      </div>
    </div>
  );
};

export default Main;
