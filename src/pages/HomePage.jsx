import { Link, Routes } from "react-router-dom"
import { ROUTES } from "../const"

export default function HomePage() {
  return (
    <>
      <h1>Quiz App</h1>
      <p>全てイタリア国内です。この場所はどこでしょう！？</p>
      <Link to={ROUTES.QUIZ}>ここをクリック！</Link>
    </>
  )
}
