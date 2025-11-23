import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import quizData from "../data/quiz";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const";

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const navigate = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;

  const handleClick = (clickedIndex) => {
    // 正解かどうかを判定
    const isCorrect = clickedIndex === quizData[quizIndex].answerIndex;

    // answerLogs に追加
    setAnswerLogs(prev => [...prev, isCorrect]);

    // quizIndex は最後の問題では増やさない
    if (quizIndex + 1 < MAX_QUIZ_LEN) {
      setQuizIndex(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (answerLogs.length === MAX_QUIZ_LEN) {
      const correctNum = answerLogs.filter(ans => ans === true).length;
      navigate(ROUTES.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum
        }
      });
    }
  }, [answerLogs, MAX_QUIZ_LEN, navigate]);

  return (
    <>
      {quizData[quizIndex] && (
        <>
          <img 
            src={quizData[quizIndex].image} 
            alt={`Quiz ${quizIndex + 1}`} 
            style={{ width: "600px", height: "400px", marginBottom: "16px", borderRadius:"20px", objectFit: "cover" }}
          />
          <Display>{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}</Display>
          <br />
          {quizData[quizIndex].options.map((option, index) => (
            <Button key={`option-${index}`} onClick={() => handleClick(index)}>
              {option}
            </Button>
          ))}
        </>
      )}
    </>
  );
}
