import style from "./banner.module.css";
import "../../../common.css";
import { NavLink } from "react-router-dom";
import img from "../../../assets/banner/Illustration.svg";

export default function Banner() {
  return (
    <>
      <div className={style.banner_wrapper}>
        <div className="wrapper_component">
          <div className={style.banner}>
            <div className={style.left}>
              <h2>Grow Smart</h2>
              <p>
                Проходи через этапы жизни, принимай финансовые решения и учись
                обращаться с кредитами в увлекательной форме.
              </p>
              <div className={style.btns}>
                <NavLink to="/start_survey" style={{ textDecoration: "none" }}>
                  <div className={style.btn_play}>Играть</div>
                </NavLink>
                {/* <NavLink to="/" style={{ textDecoration: "none" }}>
                  <div className={style.btn_test}>Тест</div>
                </NavLink> */}
              </div>
            </div>
            <div className={style.right}>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
