import style from "../../pages/startSurvey/startSurvey.module.css";
import style_glob from "./testPage.module.css";
import img_step from "../../assets/common/Group 427321687.svg";
// import axios from "axios";
import bg from "../../assets/common/Group 427321682.svg";
import img_boy from "../../assets/common/Leonardo_Phoenix_10_A_fullbody_cartoon_illustration_of_a_10yea_2-Photoroom 1 (2).svg";
import { NavLink } from "react-router-dom";

export default function TestPage2() {
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
          <div className={style_glob.left}>
            <img src={img_boy} alt="" />
          </div>
          <div className={style_glob.right}>
            <div className={style_glob.card}>
              <img src="" alt="" />
              <p>
                Ипотека — это залог недвижимости. То есть когда вы берете в
                банке ипотечный кредит, то отдаете ему в залог ваш дом, квартиру
                или земельный участок.
              </p>
            </div>
            <div className={style_glob.form}>
              <div className={style_glob.up}>
                Ты хочешь жить в большом уютном доме, но у твоей семьи сейчас
                нет столько денег. Что лучше всего сделать?
              </div>
              <div className={style_glob.down}>
                <div className={style_glob.block}>
                  <NavLink className={style_glob.item} to="/test/4">
                    <div>
                      Взять ипотеку в банке и выплачивать дом частями каждый
                      месяц.
                    </div>
                  </NavLink>
                  <NavLink className={style_glob.item} to="/test/4">
                    <div>Снять дом в аренду и пока копить на свой</div>
                  </NavLink>{" "}
                </div>
                <div className={style_glob.block}>
                  <NavLink className={style_glob.item} to="/test/4">
                    <div>Попросить дом у родственников бесплатно</div>
                  </NavLink>
                  <NavLink className={style_glob.item} to="/test/4">
                    <div>
                      Отказаться от мечты, потому что это слишком дорого
                    </div>
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
