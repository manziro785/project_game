import style from "./startSurvey.module.css";
import bg from "../../assets/common/Group 427321682.svg";

export default function StartSurvey() {
  return (
    <div>
      <div
        className={style.container}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={style.header}>
          <div className={style.upSide}>Глава: Детство</div>
          {/* <div className={style.progress}>0 0 0 0 0 0 0</div> */}
        </div>

        <div className={style.box}>
          <p>
            Как проходит игра
            <br /> Ты будешь проходить 7 глав — это этапы жизни персонажа: от
            детства до взрослой жизни.
          </p>
          <p>
            Выбор за тобой <br />В каждой ситуации тебе нужно сделать выбор. Он
            влияет на количество получаемых баллов.{" "}
          </p>
          <p>
            Полезные карточки <br />В правом углу — появится карточка с важной
            информацией:
            <br />
            термины, советы, объяснения.
          </p>
          <p>
            После каждой главы будет небольшой тест на основе карточек. Он
            поможет закрепить, что ты понял и запомнил.
          </p>
        </div>
        <div className={style.btn}>Начать игру</div>
      </div>
    </div>
  );
}
