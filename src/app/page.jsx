import Image from 'next/image';
import styles from './home.module.css';
import News from '../components/news/News';
import news from '../data/news.json';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Sousse For Events</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim recusandae beatae possimus voluptatem dicta repellendus corrupti impedit asperiores libero neque animi, consequatur porro voluptate labore fugiat, natus, nesciunt ab!
                </p>
                <div className={styles.buttons}>
                    <button className={`${styles.btn} ${styles.btnLearnMore}`}>Learn More</button>
                    <button className={`${styles.btn} ${styles.btnContact}`}>Contact</button>
                </div>
                <div className={styles.brands}>
                    <Image src="/brands.png" alt='' fill className={styles.brandImg} />
                </div>
            </div>
            <News news={news.news} />
            <div></div>
        </div>
    );
};

export default Home;