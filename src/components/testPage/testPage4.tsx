// import { useEffect, useState } from "react";
import style from "../../pages/startSurvey/startSurvey.module.css";
import style_glob from "./testPage.module.css";
import img_step from "../../assets/common/Group 427321689.svg";
// import axios from "axios";
import bg from "../../assets/common/Group 427321682.svg";
import img_boy from "../../assets/common/Leonardo_Phoenix_10_A_fullbody_cartoon_illustration_of_a_17yea_1-Photoroom 1.svg";
import { NavLink } from "react-router-dom";

export default function TestPage4() {
  return (
    <div>
      <div
        className={style.container}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={style.header} style={{ marginBottom: "-90px" }}>
          <div className={style.upSide}>Глава: Подросток</div>
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
                А накопительный счёт можно пополнять на любые суммы и снимать
                сколько нужно, когда понадобится. Вы можете распоряжаться
                деньгами на счёте без особых ограничений.
              </p>
            </div>
            <div className={style_glob.form}>
              <div className={style_glob.up}>
                Ты увидел в магазине вкусное мороженое, но у тебя совсем нет
                денег. Что ты сделаешь?
              </div>
              <div className={style_glob.down}>
                <div className={style_glob.block}>
                  <NavLink className={style_glob.item} to="/test/check">
                    <div>
                      Попрошу у родителей, пообещав отдать из своих карманных
                      денег позже.
                    </div>
                  </NavLink>
                  <NavLink className={style_glob.item} to="/test/check">
                    <div>
                      Подумаю, что лучше подождать, когда у меня будут деньги.{" "}
                    </div>
                  </NavLink>{" "}
                </div>
                <div className={style_glob.block}>
                  <NavLink className={style_glob.item} to="/test/check">
                    <div>Попрошу у друга, и забуду вернуть</div>
                  </NavLink>
                  <NavLink className={style_glob.item} to="/test/check">
                    <div>
                      Скажу, что мне его "очень нужно" и попытаюсь взять в долг
                      у незнакомого человека.{" "}
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
