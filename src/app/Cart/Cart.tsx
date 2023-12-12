"use client";
import { useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import styles from "./Cart.module.css";
import Image from "next/image";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useContext,
} from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export default function Cart() {
  const { cart, setCart } = useContext(ThemeContext);
  let [slide, setSlide] = useState(false);
  let priceDis: number;
  function toggleCart() {
    setSlide(!slide);
  }
  function deleteProduct(id: Number) {
    setCart((prev: any[]) => prev.filter((p: any, index: any) => index !== id));
  }
  return (
    <>
      <div className={styles.cart} onClick={toggleCart}>
        🛒
      </div>
      <div className={`${styles.container} ${slide && styles.slide}`}>
        <div className={styles.slider} onClick={toggleCart}>
          👈 - Go back
        </div>
        <div className={styles.box}>
          {cart &&
            cart.map(
              (
                product: {
                  discountPercentage: any;
                  price: Number | any;
                  id: Key | null | undefined;
                  thumbnail: string | StaticImport;
                  title:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | PromiseLikeOfReactNode
                    | null
                    | undefined;
                  description:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | PromiseLikeOfReactNode
                    | null
                    | undefined;
                  stock: any;
                },
                index: any
              ) => {
                priceDis = Math.floor(
                  product.price - product.price / product.discountPercentage
                );
                return (
                  <div key={index} className={styles.products}>
                    <div className={styles.product}>
                      <Image
                        src={product.thumbnail}
                        alt={`${product.title}`}
                        width={200}
                        height={100}
                      />
                      <div className={styles.text}>
                        <h3 className={styles.title}>{product.title}</h3>
                        <p className={styles.description}>
                          {product.description}
                        </p>
                      </div>
                    </div>
                    <div className={styles.edit}>
                      <div className={styles.price}>
                        {/* const priceDis = Math.floor( data.price - data.price /
                        data.discountPercentage ); $ */}
                        {priceDis * product.stock}
                        .99
                      </div>
                      <p>{`${product.stock}`}</p>
                      <p
                        className={styles.trash}
                        onClick={() => deleteProduct(index)}
                      >
                        🗑️
                      </p>
                    </div>
                  </div>
                );
              }
            )}
        </div>
        <button className={styles.checkout}>Check out</button>
      </div>
    </>
  );
}
