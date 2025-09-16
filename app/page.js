import Image from "next/image";
import styles from "./page.module.css";
import Board from "@/app/components/Board";

export default function Home() {
  return (
    <div className={styles.page}>
        <h1>Tabuleiro</h1>
        <div>
            <Board />
        </div>

    </div>
  );
}
