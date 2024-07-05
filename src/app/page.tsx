import Container from "@/components/ui/Container/Container";
import s from "./page.module.css";

export default function Home() {
  return (
    <Container>
      <div className={s.root}>
        <main className={s.main}>
          Here will be featerus soon
        </main>

        <aside className={s.sidebar}>
          Here will be sidebar soon
        </aside>
      </div>
    </Container>
  );
}
