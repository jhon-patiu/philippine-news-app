import { Toolbar } from "../components/Toolbar";
import * as styles from "../styles/eom.module.css";

const EOM = ({ employee }) => {
    return (
        <>
            <div className="page-container">
                <Toolbar />
                <div className={styles.main}>
                    <h1>Employee of the Month</h1>
                    <div className={styles.eom}>
                        <h2>{employee.name}</h2>
                        <h4>{employee.position}</h4>
                        <img src={employee.image} alt=" " />
                        <p>{employee.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const res = await fetch(
        "https://my-json-server.typicode.com/jhon-patiu/my-fake-json/myFakeJson"
    );

    const employee = await res.json();

    return {
        props: {
            employee,
        },
    };
};

export default EOM;
