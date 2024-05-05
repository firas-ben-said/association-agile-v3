import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Firas dev</div>
            <div className={styles.text}>
                © 2021 Firas dev. All Rights Reserved
            </div>
        </div>
    )
};

export default Footer;