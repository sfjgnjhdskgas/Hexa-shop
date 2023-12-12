"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import styles from "./SearchBar.module.css";
import makeAnimated from "react-select/animated";
import Products from "../Products/Products";
import Select, { InputActionMeta } from "react-select";
const options = [
  { value: "smartphones", label: "Smartphones" },
  { value: "laptops", label: "Laptops" },
  { value: "fragrances", label: "Fragrances" },
  { value: "skincare", label: "Skincare" },
  { value: "groceries", label: "Groceries" },
  { value: "home-decoration", label: "Home-decoration" },
];
export default function SearchBar({ data }: { data: any }) {
  const [hover, setHover] = useState(false);
  const [title, setTitle] = useState("");
  const [titles, setTitles] = useState("");
  const [category, setCategory] = useState<any[]>();

  const onInputChange = (x: any, { action, prevInputValue }: any) => {
    if (action === "select-option") {
      setCategory(x);
    } else if (action === "clear") {
      setCategory(undefined);
    } else if (action === "remove-value") {
      category?.length === 1 ? setCategory(undefined) : setCategory(x);
    }
  };
  const categories = category?.map((x) => x.value);
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setTitles(title);
    setTitle("");
  }
  function handleClick(t: string) {
    setTitle(t);
  }
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  const { theme } = useContext(ThemeContext);
  const slide = data
    .filter((prod: any) => !categories || categories.includes(prod.category))
    .filter(
      (prod: any) =>
        title &&
        prod.title.slice(0, title.length).toLowerCase() ===
          title.toLowerCase() &&
        prod.title.toLowerCase() !== title.toLowerCase()
    )
    .map((prod: any) => {
      return (
        <div key={prod.title} onClick={() => handleClick(prod.title)}>
          {prod.title}
        </div>
      );
    });
  const x = 40 * slide.length;
  return (
    <>
      <form
        className={`${styles.container} ${hover && styles.place}`}
        onSubmit={handleSubmit}
      >
        <Select
          components={makeAnimated()}
          isMulti
          name="category"
          options={options}
          className={`basic-multi-select ${styles.select}`}
          classNamePrefix="select"
          onInputChange={onInputChange}
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Search"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onChange={handleChange}
          value={title}
          className={styles.searchInput}
        ></input>
        <div className={styles.slide} style={{ height: x, bottom: -x }}>
          {slide}
        </div>
        <button>
          <svg
            className={`${styles.svg} ${
              theme === "light" ? styles.light : styles.dark
            } ${hover && styles.hoverStyle}`}
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </form>
      <Products
        data={data}
        title={titles.toLowerCase()}
        category={categories}
      />
    </>
  );
}
