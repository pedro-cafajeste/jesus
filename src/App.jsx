import "./styles/theme.css";
import "./styles/global.css";
import { MyTextList } from "./components/MyTextList";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LuckyNumber } from "./components/etapa2/LuckyNumber";

export default function App() {
  return (
   <>
      <div className="container">
        <Header />
        <LuckyNumber />
      </div>
    </>
  );
}
