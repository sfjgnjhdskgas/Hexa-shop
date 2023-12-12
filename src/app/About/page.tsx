import styles from "./page.module.css";
import hero from "../../../public/undraw_online_test_re_kyfx.svg";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hexashop - About",
  description: `Discover a world of endless shopping possibilities at our online
          store. browse, choose amd order your favorite products from the
          comfort of your home`,
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>About us</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          adipisci rem quibusdam. Doloribus distinctio aperiam nemo ut
          accusantium, assumenda laboriosam similique quia sit illo! Atque in
          dolorum dolorem, soluta modi quaerat debitis incidunt, enim sunt, sint
          rem vero omnis aliquid ab. Natus suscipit rem labore consequatur autem
          exercitationem, corporis explicabo a, aut tenetur sit esse adipisci,
          sint excepturi. Iure animi aspernatur eum expedita non ut accusamus
          voluptatum.
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
