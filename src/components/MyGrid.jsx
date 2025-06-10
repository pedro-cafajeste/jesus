import styles from "./MyGrid.module.css";

export function MyGrid() {
    return (
    <div className={styles.container}>
      <header className={styles.header1} />
      <header className={styles.header2} />
      <aside className={styles.aside} />
      <aside className={styles.aside2} />
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Card 1</h2>
            <p>info card 1</p>
          </div>
          <div className={styles.card}>
            <h2>Card 2</h2>
            <p>info card 2</p>
          </div>
          <div className={styles.card}>
            <h2>Card 3</h2>
            <p>info card 3</p>
          </div>
          <div className={styles.card}>
            <h2>Card 4</h2>
            <p>info card 4</p>
          </div>
          <div className={styles.card}>
            <h2>Card 5</h2>
            <p>info card 5</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer2} />
      <footer className={styles.footer} />
    </div>
  );
}
