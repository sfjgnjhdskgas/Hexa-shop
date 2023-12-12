import Link from "next/link";
import styles from "./Navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/darkmodetoggle";
import DisplayButton from "../DisplayButton/DisplayButton";
export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href={`/`} className={styles.logo}>
        HexaShop
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        <DisplayButton />
      </div>
    </div>
  );
}
