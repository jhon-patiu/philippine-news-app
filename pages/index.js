import Head from "next/head";
import { Toolbar } from "../components/toolbar";

import * as styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className="page-container">
            <Toolbar />

            <div className={styles.main}>
                <h1>PhiLippine News App</h1>
                <h3>hello, world</h3>
            </div>
        </div>
    );
}
