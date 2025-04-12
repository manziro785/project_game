// components/QuizHeader.js
import React from "react";
import style from "../../pages/startSurvey/startSurvey.module.css";
import img_step from "../../assets/common/Group 427321687.svg";

const QuizHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.upSide}>Глава: Детство</div>
      <div className={style.progress}>
        <img src={img_step} alt="progress" />
      </div>
    </div>
  );
};

export default QuizHeader;
