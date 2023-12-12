import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./Products.module.css";
import Image from "next/image";
export default function Products({
  data,
  title,
  category,
}: {
  data: any;
  title: string;
  category: any;
}) {
  const elements = data
    .filter((prod: any) => !category || category.includes(prod.category))
    .map((prod: any) => {
      let titles: string = prod.title;
      titles = titles.toLowerCase();
      return !title || title === titles.slice(0, title.length) ? (
        <Link
          href={`/Products/${prod.id}`}
          className={styles.box}
          key={prod.id}
          id={prod.category}
        >
          <span className={styles.price}>${prod.price}.99</span>
          <span className={styles.pricedis}>%{prod.discountPercentage}-</span>
          <Image
            src={prod.thumbnail}
            width={350}
            height={250}
            alt={"product"}
            className={styles.img}
          ></Image>
          <div className={styles.content}>
            <h3 className={styles.title}>{prod.title}</h3>
            <p className={styles.desc}>{prod.description}</p>
          </div>
        </Link>
      ) : (
        ""
      );
    });
  return (
    <>
      {elements.every((element: string) => element === "") ? (
        <div className={styles.shit}>Sorry we dont have this shit 😳</div>
      ) : (
        elements
      )}
    </>
  );
}
