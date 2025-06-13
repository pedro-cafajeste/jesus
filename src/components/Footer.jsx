import styles from "./Footer.module.css";
import { Github, Instagram, MailOpen, BicepsFlexed } from "lucide-react";

export function Footer() {
  
  return (
   <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}>
            <h1>IFRN - Campus Macau</h1>
            <h1>Curso Técnico em Informática</h1>
            <h1>Programação para Internet </h1>
          </div>
          <div>
            <p>Pedro Henrique Costa Calixta</p>
          </div>
          <div className={styles.icons}>
            <a href="https://github.com/pedro-cafajeste" target="_blank">
              <Github />
            </a>
            <a href="https://www.instagram.com/peterhr.00" target="_blank">
              <Instagram />
            </a>
            <a href="pedrocalixta2006@gmail.com" target="_blank">
              <MailOpen />
            </a>
          </div>
        </div>
      </footer>
  );
}
