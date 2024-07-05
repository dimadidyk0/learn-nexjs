import Container from "@/components/ui/Container/Container";
import s from "./page.module.css";

export default function Home() {
  return (
    <Container>
      <main>
        <section className={s.section}>
          <h2>Whar this app offers</h2>
          <p>
            This application can help you to learn Japanese
          </p>
        </section>
      </main>
      <aside>
        Sidebar
      </aside>
    </Container>
  );
}
