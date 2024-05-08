import Card from "@/components/dashboard/card/card";
import Chart from "@/components/dashboard/chart/chart";
import styles from "@/components/dashboard/dashboard.module.css";
import Rightbar from "@/components/dashboard/rightbar/rightbar";
import Transactions from "@/components/dashboard/transactions/transactions";


const UserPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    );
}

export default UserPage;