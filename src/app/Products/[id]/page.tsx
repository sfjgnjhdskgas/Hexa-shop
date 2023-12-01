import styles from "./page.module.css";
import Image from "next/image";
export default function product({ params }: { params: any }) {
  console.log(params);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>Product Name</h1>
          <p className={styles.desc}></p>
        </div>
        <div className={styles.imgcontainer}>
          <Image
            className={styles.img}
            src={"https://i.dummyjson.com/data/products/26/thumbnail.jpg"}
            alt={"product img"}
            fill={true}
          ></Image>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          tempora dolore qui! Dolor ducimus repellat at, eveniet nobis nostrum
          rerum consequuntur reprehenderit pariatur error ex maxime, qui beatae
          alias repellendus eum! Sed suscipit praesentium sit a asperiores,
          laborum enim veniam, accusamus aut culpa quia minus dignissimos nemo
          aliquam eius unde.
        </p>
      </div>
    </div>
  );
}
