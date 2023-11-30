import { imgs } from "./img";
import Image from "next/image";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>©2023 Hexashop. All right reserved.</p>
      <div className={styles.imgs}>
        {imgs.map((img) => {
          return (
            <Image
              key={img.id}
              src={`/${img.link}.png`}
              alt={`Hexashop ${img.link} link`}
              width={26}
              height={26}
              className={styles.img}
            ></Image>
          );
        })}
      </div>
    </footer>
  );
}
