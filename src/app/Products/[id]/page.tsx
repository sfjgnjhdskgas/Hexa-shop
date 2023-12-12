import Counter from "@/componants/Counter/counter";
import styles from "./page.module.css";
import Image from "next/image";
import Swap from "@/componants/ImgSwap/swap";
import type { Metadata, ResolvingMetadata } from "next";

async function getData(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const data = await getData(params.id);

  return {
    title: `Hexashop - ${data.title}`,
    description: data.description,
  };
}

export default async function product({ params }: { params: any }) {
  const data = await getData(params.id);
  const priceDis = Math.floor(
    data.price - data.price / data.discountPercentage
  );
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.description}</p>
        </div>
      </header>
      <Swap imgs={data.images} data={data} />
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint in
          pariatur voluptatibus vel a necessitatibus, quae, consequatur, maiores
          labore modi vitae. Omnis maxime, maiores explicabo dicta quod quae ut
          doloremque. Necessitatibus commodi, dolores praesentium nulla minus
          dolorum odio totam similique. Cupiditate at, unde fugit vitae nihil
          fugiat. Fugit esse iusto aspernatur nisi modi! Praesentium architecto
          fugit quas perspiciatis! Exercitationem numquam eaque qui incidunt
          explicabo rerum enim a porro quam neque dolor illum eos eligendi iste
          modi ea provident culpa ullam suscipit corporis, tempore voluptatem!
          Quam facere natus, blanditiis aut, ducimus, dolor veniam debitis in
          earum sapiente ex explicabo molestias?
        </p>
        <div className={styles.busket}>
          <p
            className={data.discountPercentage ? styles.pricedis : styles.price}
          >
            {`Price : $${data.price}.99 `}
          </p>
          {priceDis && (
            <span className={styles.discount}>{`Price : $${priceDis}.99`}</span>
          )}
          <Image
            src={data.thumbnail}
            alt={data.title}
            width={400}
            height={300}
          ></Image>
          <Counter data={data} />
        </div>
      </div>
    </div>
  );
}
