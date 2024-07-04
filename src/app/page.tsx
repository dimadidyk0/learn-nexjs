import Link from "next/link";
import s from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={s.header}>
        Here will be some incredible header soon ⏳
      </header>

      <main>
        <section className={s.section}>
          <h2>Whar this app offers</h2>
          <p>
            This application can help you to learn Japanese
          </p>
        </section>
      </main>
    </>
  );
}
