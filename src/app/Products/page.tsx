import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { Metadata } from "next";
import SearchBar from "@/componants/SearchBar/SearchBar";
export const metadata: Metadata = {
  title: "Hexashop - Products",
  description: `Discover a world of endless shopping possibilities at our online
          store. browse, choose amd order your favorite products from the
          comfort of your home`,
};
async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Products() {
  const data = await getData();
  // async function datas(input: string) {
  //   "use server";
  //   return input;
  // }
  // const title = datas;
  // console.log(title);
  return (
    <div className={styles.container}>
      <SearchBar data={data.products} />
      {/* {data.products.map((prod: any) => {
        return (
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
        );
      })} */}
    </div>
  );
}
function wait(arg0: number) {
  throw new Error("Function not implemented.");
}
