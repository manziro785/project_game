import style from "./important.module.css";
import img from "../../../assets/cards/Group 11.svg";

export default function Important() {
  return (
    <>
      <div className={style.important_wrapper}>
        <div className="wrapper_component">
          <div className={style.important}>
            <div className={style.left}>
              <h2>ПОЧЕМУ ЭТО ВАЖНО?</h2>
              <p>
                Финансовая грамотность — ключ к уверенной жизни. Наша цель —
                дать тебе простые, понятные и применимые знания, чтобы ты мог
                уверенно управлять своими деньгами.
              </p>
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
