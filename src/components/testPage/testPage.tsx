import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Для работы с параметрами URL
import style from "../../pages/startSurvey/startSurvey.module.css";
import style_glob from "./testPage.module.css";
import img_step from "../../assets/common/Group 427321687.svg";
import axios from "axios";
import bg from "../../assets/common/Group 427321682.svg";
import img_boy from "../../assets/common/Leonardo_Phoenix_10_A_fullbody_cartoon_illustration_of_a_10yea_2-Photoroom 1 (2).svg";
import { v4 as uuidv4 } from "uuid";

export default function TestPage() {
  const { id } = useParams(); // Используем useParams для получения id из URL
  const [question, setQuestion] = useState(null); // Для хранения текущего вопроса
  const [answers, setAnswers] = useState([]); // Для хранения вариантов ответа
  const [message, setMessage] = useState(""); // Состояние для хранения сообщения
  const [sessionUUID] = useState(uuidv4()); // Генерация UUID для сессии

  // Запрос на старт игры и получение вопросов
  useEffect(() => {
    const fetchTokenAndData = async () => {
      try {
        const gameId = 2;

        const tokenResponse = await axios.post(
          `https://inai-5.onrender.com/bank-quiz/api/start_game/${gameId}/`,
          { uuid: sessionUUID }
        );

        const token = tokenResponse.data.token;
        localStorage.setItem("quizToken", token);
        localStorage.setItem("quizSessionUUID", sessionUUID);

        if (tokenResponse.data.message) {
          setMessage(tokenResponse.data.message);
        }

        if (tokenResponse.data.questions) {
          setQuestion(
            tokenResponse.data.questions.find(
              (q) => q.question_id === parseInt(id)
            )
          ); // Найдем вопрос по id
        }
      } catch (error) {
        console.error(
          "Ошибка при получении данных:",
          error.response?.data || error.message
        );
      }
    };

    fetchTokenAndData();
  }, [id, sessionUUID]);

  // Запрос на получение ответов для текущего вопроса
  useEffect(() => {
    const fetchAnswers = async () => {
      if (question) {
        try {
          const response = await axios.get(
            `https://inai-5.onrender.com/bank-quiz/api/answer_option/${question.question_id}/`
          );
          setAnswers(response.data); // Сохраняем ответы
        } catch (error) {
          console.error("Ошибка при получении вариантов ответа:", error);
        }
      }
    };

    fetchAnswers();
  }, [question]); // Загружаем ответы каждый раз, когда меняется вопрос

  const handleItemClick = async (answerId) => {
    try {
      const token = localStorage.getItem("quizToken");
      const response = await axios.post(
        `https://inai-5.onrender.com/bank-quiz/api/submit_answer/`,
        {
          questionId: question.question_id,
          answerId: answerId,
          token: token,
        }
      );

      if (response.data.success) {
        // После отправки ответа можно переходить к следующему вопросу
        console.log("Ответ на сервере:", response.data);
        // Переход к следующему вопросу или другому действию
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

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
            <img src={img_boy} alt="character" />
          </div>
          <div className={style_glob.right}>
            <div className={style_glob.card}>
              <p>
                Потребительский кредит — это деньги, которые берут в долг, чтобы
                купить что-то для себя. Их нужно вернуть с дополнительной
                платой.
              </p>
            </div>

            <div className={style_glob.form}>
              {/* Отображаем сообщение */}
              {message && <div className={style_glob.up}>{message}</div>}

              {/* Отображаем вопрос и варианты ответа */}
              {question ? (
                <div>
                  <div className={style_glob.up}>{question.text}</div>

                  {answers.length > 0 ? (
                    answers.map((answer) => (
                      <div
                        key={answer.answer_id}
                        className={style_glob.item}
                        onClick={() => handleItemClick(answer.answer_id)}
                      >
                        {answer.text}
                      </div>
                    ))
                  ) : (
                    <div>Загрузка ответов...</div>
                  )}
                </div>
              ) : (
                <div>Загрузка вопроса...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
