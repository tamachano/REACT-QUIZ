import styles from "./Result.module.css";
import Confetti from 'react-confetti'

export default function Result({maxQuizLen,correctNumLen}) {
  return (
    <>
    <div>
        あなたの正解数は...
        <span className={styles.resultHighlight}>
            {`全${maxQuizLen}問中、${correctNumLen}問正解でした！`}
        </span>
        でした！
    </div>
    <Confetti />
    </>
  )
}
