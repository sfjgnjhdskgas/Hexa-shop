import Image from "next/image";
import styles from "./page.module.css";
import hero from "/public/undraw_online_test_re_kyfx.svg";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your one-stop e-commerce destination!</h1>
        <p className={styles.desc}>
          Discover a world of endless shopping possibilities at our online
          store. browse, choose amd order your favorite products from the
          comfort of your home
        </p>

        <Link href={"./Products"} className={styles.button}>
          Shop Now
        </Link>
      </div>
      <div className={styles.col}>
        <Image
          src={hero}
          alt={"Hexashop hero img"}
          className={styles.img}
        ></Image>
      </div>
    </div>
  );
}
