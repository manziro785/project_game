import { NavLink } from "react-router-dom";
import style from "./footer.module.css";
import logo from "../../../assets/common/Your constant assist.png";

export default function Footer() {
  return (
    <>
      <div className={style.footer_wrapper}>
        <div className="wrapper_component">
          <div className={style.footer}>
            <div className={style.logo}>
              <img src={logo} alt="" />
            </div>
            <div className={style.btns}>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <div className={style.btn_play}>Играть</div>
              </NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <div className={style.btn_test}>Тест</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
