"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";
import styles from "./Slider.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Slider({ data, id }: { data: any; id: string }) {
  const slideLeft = () => {
    var slider: HTMLElement | null = document.getElementById(id);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 1000;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById(id);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 1000;
    }
  };

  const priceDis = Math.floor(
    data.price - data.price / data.discountPercentage
  );

  return (
    <div className={styles.span4}>
      <span onClick={slideLeft} className={styles.left}>
        {"<"}
      </span>

      <div className={styles.hide}>
        <div className={styles.section} id={id}>
          {data.map(
            (dat: {
              rating: any;
              stock: any;
              price: any;
              discountPercentage: any;
              title: string;
              id: Key | null | undefined;
              thumbnail: string | StaticImport;
            }) => {
              return (
                <Link
                  key={dat.id}
                  className={styles.box}
                  href={`/Products/${dat.id}`}
                >
                  <Image
                    src={dat.thumbnail}
                    alt={dat.title}
                    width={200}
                    style={{ width: "100%" }}
                    height={150}
                  ></Image>
                  <h3>{dat.title}</h3>
                  <div className={styles.text}>
                    <p className={styles.price}>
                      Price :<span> ${dat.price}.99</span> $
                      {Math.floor(
                        dat.price - dat.price / dat.discountPercentage
                      )}
                      .99
                    </p>
                    <p className={styles.rating}>Rating : {dat.rating}</p>
                    <p className={styles.stock}>
                      {dat.stock ? "In stock" : "not available"}
                    </p>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>

      <span className={styles.right} onClick={slideRight}>
        {">"}
      </span>
    </div>
  );
}
