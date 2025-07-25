import styles from "./MyGrid.module.css";
import { Github, Instagram, MailOpen, BicepsFlexed } from "lucide-react";
const cards = [0, 1, 2, 3, 4];
export function MyGrid() {
  const randomNumbers = cards.map(() => Math.floor(Math.random() * 1000));
  return (
    <div className={styles.container}>
      <header className={styles.header1}>
        <BicepsFlexed />
        <h1>Foco,Força e Fé</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.grid}>
          {
            <div className={styles.card}>
              <img
                src={"https://picsum.photos/200/300?random=${randomNumbers[0]}"}
              ></img>
              <h2>My Text 0</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          }
          {
            <div className={styles.card}>
              <img
                src={"https://picsum.photos/200/300?random=${randomNumbers[1]}"}
              ></img>
              <h2>My Text 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          }
          {
            <div className={styles.card}>
              <img
                src={"https://picsum.photos/200/300?random=${randomNumbers[2]}"}
              ></img>
              <h2>My Text 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          }
          {
            <div className={styles.card}>
              <img
                src={"https://picsum.photos/200/300?random=${randomNumbers[3]}"}
              ></img>
              <h2>My Text 3</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          }
          {
            <div className={styles.card}>
              <img
                src={"https://picsum.photos/200/300?random=${randomNumbers[4]}"}
              ></img>
              <h2>My Text 4</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          }
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}>
            <h1>IFRN-Campus Macau</h1>
            <h1>Curso Técnico em Informática</h1>
            <h1>Programação para Internet</h1>
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
    </div>
  );
}
