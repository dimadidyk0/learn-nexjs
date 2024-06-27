import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

      </div>

      <p><Link href={"/meals"}>Meals page</Link></p>
      <p><Link href={"/meals/share"}>Meals share page</Link></p>
      <p><Link href={"/community"}>Community page</Link></p>
    </main>
  );
}
