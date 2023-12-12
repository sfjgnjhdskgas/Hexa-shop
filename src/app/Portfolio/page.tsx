import Slider from "@/componants/Slider/Slider";
import styles from "./page.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";
import product from "../Products/[id]/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hexashop - Portfolio",
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
export default async function Portfolio() {
  const data = await getData();

  const priceDis = Math.floor(
    data.price - data.price / data.discountPercentage
  );

  const discountPercentage = data.products.filter(
    (product: { discountPercentage: number }) => product.discountPercentage > 16
  );

  const trending = data.products.filter(
    (product: { stock: number }) => product.stock < 50
  );

  const highestRating = data.products.filter(
    (product: { rating: number }) => product.rating > 4.59
  );
  const portfolio = [discountPercentage, trending, highestRating];
  const headers = ["Trending", "High Discounts", "High rating"];
  return (
    <div className={styles.container}>
      {portfolio.map((item, index) => {
        return (
          <div key={index} className={`${styles.section}${index}`}>
            <h1 className={styles.title}>{headers[index]}</h1>
            <Slider data={item} id={`${index}`} />
          </div>
        );
      })}
    </div>
  );
}
