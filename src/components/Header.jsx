import styles from "./Header.module.css";
import { Github, Instagram, MailOpen, BicepsFlexed, } from "lucide-react";
export function Header() {
  return (
    <header className={styles.header1}>
      <BicepsFlexed />
      <h1>Foco,Força e Fé</h1>
    </header>
  );
}