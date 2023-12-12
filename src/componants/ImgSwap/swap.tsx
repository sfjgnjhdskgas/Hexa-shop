"use client";
import { useState } from "react";
import styles from "./swap.module.css";
import Image from "next/image";
export default function Swap({ imgs, data }: { imgs: string[]; data: any }) {
  const [swap, setSwap] = useState("");
  function handleClick(img: string) {
    setSwap(img);
  }
  return (
    <>
      <div className={styles.imgcontainer}>
        <Image
          className={styles.img}
          src={swap ? swap : data.thumbnail}
          alt={data.title}
          fill={true}
        ></Image>
        <span className={styles.category}>{data.category}</span>
      </div>
      <div className={styles.imgs}>
        {imgs.map((img: string, i: Number) => {
          return (
            <Image
              key={`${i}`}
              src={img}
              alt={"img"}
              width={130}
              height={140}
              className={swap == img ? styles.current : styles.imgss}
              onClick={() => handleClick(img)}
            ></Image>
          );
        })}
      </div>
    </>
  );
}
