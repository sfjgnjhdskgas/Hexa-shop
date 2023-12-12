import { Metadata } from "next";
import styles from "./page.module.css";
export const metadata: Metadata = {
  title: "Hexashop - Contact",
  description: `Discover a world of endless shopping possibilities at our online
          store. browse, choose amd order your favorite products from the
          comfort of your home`,
};

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.content}>
        <h1 className={styles.title}>Contact-Us</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          tenetur exercitationem quae dolores amet
        </p>
      </div>
      <div className={styles.pForm}>
        <form className={styles.form} action="">
          <input
            type="text"
            name="text"
            placeholder="YOUR NAME"
            className={styles.mainInput}
          />
          <input
            type="email"
            name="mail"
            placeholder="YOUR MAIL"
            className={styles.mainInput}
          />
          <textarea
            name="textarea"
            className={styles.textarea}
            placeholder="YOUR MESSAGE"
          ></textarea>
          <input className={styles.submit} type="submit" value="SEND MESSAGE" />
        </form>
        <div className={styles.infos}>
          <h4 className={styles.touch}>Get In Touch</h4>
          <span className={styles.phone}>+00 123.456.789</span>
          <span className={styles.phone}>+00 123.456.789</span>
          <h4 className={styles.touch}>Where We Are</h4>
          <div className={styles.address}>
            Awesome Address 17
            <br />
            New York, NYC
            <br />
            123-4567-890
            <br />
            USA
          </div>
        </div>
      </div>
    </div>
  );
}
