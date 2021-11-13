import Link from "next/link";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
    return (
        <div className={styles.main}>
            <Link href="/">Home</Link>
            <Link href="/feed/1">Feed</Link>
            <Link href="/eom">Staff</Link>
            <a
                href="https://www.facebook.com/PatiuJhon"
                target="_blank"
                rel="noreferrer noopener">
                Facebook
            </a>
        </div>
    );
};
