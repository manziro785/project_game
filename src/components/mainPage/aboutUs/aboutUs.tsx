import style from "./aboutUs.module.css";
import img1 from "../../../assets/cards/Group 427321667.svg";
import img2 from "../../../assets/cards/Group 427321668.svg";
import img3 from "../../../assets/cards/Group 427321669.svg";
import img4 from "../../../assets/cards/Group 427321670.svg";

export default function AboutUs() {
  return (
    <>
      <div className="wrapper_component">
        <div className={style.aboutUs}>
          <h2>GROW SMART это</h2>
          <div className={style.wrapp_p}>
            <p>
              Эта игра — симуляция жизни, где ты принимаешь реальные финансовые
              решения. Мы не просто развлекаем — мы обучаем. В процессе ты
              узнаешь, какие бывают кредиты, как они работают, и как не попасть
              в финансовую ловушку.
            </p>
          </div>
          <div className={style.cards}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
