// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import style from "../../pages/startSurvey/startSurvey.module.css";
// // import style_glob from "./testPage.module.css";
// // import img_step from "../../assets/common/Group 427321687.svg";
// // import axios from "axios";
// // import bg from "../../assets/common/Group 427321682.svg";
// // import img_boy from "../../assets/common/Leonardo_Phoenix_10_A_fullbody_cartoon_illustration_of_a_10yea_2-Photoroom 1 (2).svg";
// // import { v4 as uuidv4 } from "uuid";

// // // Интерфейсы
// // interface Question {
// //   question_id: number;
// //   text: string;
// // }

// // interface Answer {
// //   answer_id: number;
// //   text: string;
// // }

// // export default function TestPage() {
// //   const { id } = useParams();
// //   const [question, setQuestion] = useState<Question | null>(null);
// //   const [answers, setAnswers] = useState<Answer[]>([]);
// //   const [message, setMessage] = useState("");
// //   const [sessionUUID] = useState(uuidv4());

// //   // Получение токена и вопросов
// //   useEffect(() => {
// //     const fetchTokenAndData = async () => {
// //       try {
// //         const gameId = 2;

// //         const tokenResponse = await axios.post(
// //           `https://inai-5.onrender.com/bank-quiz/api/start_game/${gameId}/`,
// //           { uuid: sessionUUID }
// //         );

// //         const token = tokenResponse.data.token;
// //         localStorage.setItem("quizToken", token);
// //         localStorage.setItem("quizSessionUUID", sessionUUID);

// //         if (tokenResponse.data.message) {
// //           setMessage(tokenResponse.data.message);
// //         }

// //         if (tokenResponse.data.questions) {
// //           setQuestion(
// //             tokenResponse.data.questions.find(
// //               (q: any) => q.question_id === parseInt(id || "0")
// //             )
// //           );
// //         }
// //       } catch (error) {
// //         const err = error as any;
// //         console.error(
// //           "Ошибка при получении данных:",
// //           err.response?.data || err.message
// //         );
// //       }
// //     };

// //     fetchTokenAndData();
// //   }, [id, sessionUUID]);

// //   // Получение вариантов ответа
// //   useEffect(() => {
// //     const fetchAnswers = async () => {
// //       if (question) {
// //         try {
// //           const response = await axios.get(
// //             `https://inai-5.onrender.com/bank-quiz/api/answer_option/${question.question_id}/`
// //           );
// //           setAnswers(response.data);
// //         } catch (error) {
// //           const err = error as any;
// //           console.error(
// //             "Ошибка при получении вариантов ответа:",
// //             err.response?.data || err.message
// //           );
// //         }
// //       }
// //     };

// //     fetchAnswers();
// //   }, [question]);

// //   const handleItemClick = async (answerId: number) => {
// //     try {
// //       const token = localStorage.getItem("quizToken");
// //       const response = await axios.post(
// //         `https://inai-5.onrender.com/bank-quiz/api/submit_answer/`,
// //         {
// //           questionId: question?.question_id,
// //           answerId: answerId,
// //           token: token,
// //         }
// //       );

// //       if (response.data.success) {
// //         console.log("Ответ на сервере:", response.data);
// //         // здесь можно добавить переход к следующему вопросу
// //       }
// //     } catch (error) {
// //       const err = error as any;
// //       console.error(
// //         "Ошибка при отправке данных:",
// //         err.response?.data || err.message
// //       );
// //     }
// //   };

// //   return (
// //     <div>
// //       <div
// //         className={style.container}
// //         style={{ backgroundImage: `url(${bg})` }}
// //       >
// //         <div className={style.header}>
// //           <div className={style.upSide}>Глава: Детство</div>
// //           <div className={style.progress}>
// //             <img src={img_step} alt="progress" />
// //           </div>
// //         </div>

// //         <div className={style_glob.box}>
// //           <div className={style_glob.left}>
// //             <img src={img_boy} alt="character" />
// //           </div>
// //           <div className={style_glob.right}>
// //             <div className={style_glob.card}>
// //               <p>
// //                 Потребительский кредит — это деньги, которые берут в долг, чтобы
// //                 купить что-то для себя. Их нужно вернуть с дополнительной
// //                 платой.
// //               </p>
// //             </div>

// //             <div className={style_glob.form}>
// //               {message && <div className={style_glob.up}>{message}</div>}

// //               {question ? (
// //                 <div>
// //                   <div className={style_glob.up}>{question.text}</div>

// //                   {answers.length > 0 ? (
// //                     answers.map((answer) => (
// //                       <div
// //                         key={answer.answer_id}
// //                         className={style_glob.item}
// //                         onClick={() => handleItemClick(answer.answer_id)}
// //                       >
// //                         {answer.text}
// //                       </div>
// //                     ))
// //                   ) : (
// //                     <div>Загрузка ответов...</div>
// //                   )}
// //                 </div>
// //               ) : (
// //                 <div>Загрузка вопроса...</div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import style from "../../pages/startSurvey/startSurvey.module.css";
// import style_glob from "./testPage.module.css";
// import img_step from "../../assets/common/Group 427321687.svg";
// import axios from "axios";
// import bg from "../../assets/common/Group 427321682.svg";
// import img_boy from "../../assets/common/Leonardo_Phoenix_10_A_fullbody_cartoon_illustration_of_a_10yea_2-Photoroom 1 (2).svg";
// import { v4 as uuidv4 } from "uuid";

// // Интерфейсы
// interface Question {
//   question_id: number;
//   text: string;
// }

// interface Answer {
//   answer_id: number;
//   text: string;
// }

// export default function TestPage() {
//   const { id } = useParams();
//   const [question, setQuestion] = useState<Question | null>(null);
//   const [answers, setAnswers] = useState<Answer[]>([]);
//   const [message, setMessage] = useState("");
//   const [sessionUUID] = useState(uuidv4());

//   // Получение токена и вопросов
//   useEffect(() => {
//     const fetchTokenAndData = async () => {
//       try {
//         const gameId = 2;

//         const tokenResponse = await axios.post(
//           `https://inai-5.onrender.com/bank-quiz/api/start_game/${gameId}/`,
//           { uuid: sessionUUID }
//         );

//         const token = tokenResponse.data.token;
//         localStorage.setItem("quizToken", token);
//         localStorage.setItem("quizSessionUUID", sessionUUID);

//         if (tokenResponse.data.message) {
//           setMessage(tokenResponse.data.message);
//         }

//         if (tokenResponse.data.questions) {
//           setQuestion(
//             tokenResponse.data.questions.find(
//               (q: any) => q.question_id === parseInt(id || "0")
//             )
//           );
//         }
//       } catch (error) {
//         const err = error as any;
//         console.error(
//           "Ошибка при получении данных:",
//           err.response?.data || err.message
//         );
//       }
//     };

//     fetchTokenAndData();
//   }, [id, sessionUUID]);

//   // Получение вариантов ответа
//   useEffect(() => {
//     const fetchAnswers = async () => {
//       if (question) {
//         try {
//           const response = await axios.get(
//             `https://inai-5.onrender.com/bank-quiz/api/answer_option/${question.question_id}/`
//           );
//           setAnswers(response.data);
//         } catch (error) {
//           const err = error as any;
//           console.error(
//             "Ошибка при получении вариантов ответа:",
//             err.response?.data || err.message
//           );
//         }
//       }
//     };

//     fetchAnswers();
//   }, [question]);

//   const handleItemClick = async (answerId: number) => {
//     try {
//       const token = localStorage.getItem("quizToken");
//       const response = await axios.post(
//         `https://inai-5.onrender.com/bank-quiz/api/submit_answer/`,
//         {
//           questionId: question?.question_id,
//           answerId: answerId,
//           token: token,
//         }
//       );

//       if (response.data.success) {
//         console.log("Ответ на сервере:", response.data);
//         // здесь можно добавить переход к следующему вопросу
//       }
//     } catch (error) {
//       const err = error as any;
//       console.error(
//         "Ошибка при отправке данных:",
//         err.response?.data || err.message
//       );
//     }
//   };

//   return (
//     <div>
//       <div
//         className={style.container}
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         <div className={style.header}>
//           <div className={style.upSide}>Глава: Детство</div>
//           <div className={style.progress}>
//             <img src={img_step} alt="progress" />
//           </div>
//         </div>

//         <div className={style_glob.box}>
//           <div className={style_glob.left}>
//             <img src={img_boy} alt="character" />
//           </div>
//           <div className={style_glob.right}>
//             <div className={style_glob.card}>
//               <p>
//                 Потребительский кредит — это деньги, которые берут в долг, чтобы
//                 купить что-то для себя. Их нужно вернуть с дополнительной
//                 платой.
//               </p>
//             </div>

//             <div className={style_glob.form}>
//               {message && <div className={style_glob.up}>{message}</div>}

//               {question ? (
//                 <div>
//                   <div className={style_glob.up}>{question.text}</div>

//                   {answers.length > 0 ? (
//                     answers.map((answer) => (
//                       <div
//                         key={answer.answer_id}
//                         className={style_glob.item}
//                         onClick={() => handleItemClick(answer.answer_id)}
//                       >
//                         {answer.text}
//                       </div>
//                     ))
//                   ) : (
//                     <div>Загрузка ответов...</div>
//                   )}
//                 </div>
//               ) : (
//                 <div>Загрузка вопроса...</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
import style from "../../pages/startSurvey/startSurvey.module.css";
import style_glob from "./testPage.module.css";
import img_step from "../../assets/common/Group 427321687.svg";
// import axios from "axios";
import bg from "../../assets/common/Group 427321682.svg";
import img_boy from "../../assets/common/Leonardo_Phoenix_10_A_fullbody_cartoon_illustration_of_a_10yea_2-Photoroom 1 (2).svg";
import { NavLink } from "react-router-dom";

export default function TestPage3() {
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
