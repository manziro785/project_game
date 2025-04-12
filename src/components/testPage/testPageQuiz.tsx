import style from "../../pages/startSurvey/startSurvey.module.css";
import style_glob from "./testPage.module.css";
import img_step from "../../assets/common/Group 427321687.svg";
import bg from "../../assets/common/Group 427321682.svg";
// import img_boy from "../../assets/common/Leonardo_Phoenix_10_A_fullbody_cartoon_illustration_of_a_10yea_2-Photoroom 1 (2).svg";
import { NavLink } from "react-router-dom";

export default function TestPageQuiz() {
  return (
    <div>
      <div
        className={style.container}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={style.header}>
          <div className={style.upSide}>Глава: Детство</div>
          <div className={style.progress}>
            <img src={img_step} alt="progress" />
          </div>
        </div>

        <div className={style_glob.box}>
          {/* <div className={style_glob.left}>
            <img src={img_boy} alt="" />
          </div> */}
          <div className={style_glob.right}>
            <div className={style_glob.card}>
              <img src="" alt="" />
            </div>
            <div className={style_glob.form}>
              <h2>Квиз по главе: Детство</h2>
              <div className={style_glob.up}>
                Ты очень хочешь новый планшет. Родители могут взять кредит, но
                это создаст трудности в семье. Что ты выберешь?
              </div>
              <div className={style_glob.down}>
                <div className={style_glob.block}>
                  <NavLink className={style_glob.item} to="/test/5">
                    <div>Уговоришь родителей взять кредит на планшет</div>
                  </NavLink>
                  <NavLink className={style_glob.item} to="/test/5">
                    <div>
                      Подождёшь дня рождения или начнёшь копить из карманных
                      денег
                    </div>
                  </NavLink>{" "}
                </div>
                <div className={style_glob.block}>
                  <NavLink className={style_glob.item} to="/test/5">
                    <div>Попробуешь сам заработать</div>
                  </NavLink>
                  <NavLink className={style_glob.item} to="/test/5">
                    <div>Взять деньги без разрешения</div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
