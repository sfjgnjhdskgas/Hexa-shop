import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Products() {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.products.map((prod: any) => {
        return (
          <Link
            href={`/Products/${prod.id}`}
            className={styles.box}
            key={prod.id}
          >
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
        );
      })}
    </div>
  );
}
