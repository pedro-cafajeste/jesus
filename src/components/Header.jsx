import styles from "./Header.module.css";
import { Github, Instagram, MailOpen, BicepsFlexed, Car, } from "lucide-react";
export function Header() {
  return (
    <header className={styles.header1}>
      <Car />
      <h1>PH Motor's</h1>
    </header>
  );
}