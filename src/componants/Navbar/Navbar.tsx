import Link from "next/link";
import { links } from "./data";
import styles from "./Navbar.module.css";
import Button from "../Button/Buttom";
import DarkModeToggle from "../DarkModeToggle/darkmodetoggle";
export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href={`/`} className={styles.logo}>
        HexaShop
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        <button></button>
        {links.map((link) => {
          return (
            <Link key={link.id} href={`${link.link}`} className={styles.link}>
              {link.title}
            </Link>
          );
        })}
        <Button />
      </div>
    </div>
  );
}
