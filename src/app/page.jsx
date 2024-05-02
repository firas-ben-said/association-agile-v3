import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Sousse For Events</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim recusandae beatae possimus voluptatem dicta repellendus corrupti impedit asperiores libero neque animi, consequatur porro voluptate labore fugiat, natus, nesciunt ab!
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button}>Learn More</button>
                    <button className={styles.button}>Contact</button>
                </div>
                <div className={styles.brands}>
                    <Image src="/brands.png" alt='' fill className={styles.brandImg} />
                </div>
            </div>
            {/* NEWS SLIDER */}
        </div>
    );
};

export default Home;