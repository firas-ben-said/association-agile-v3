"use client"

import Link from 'next/link'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
    MdHome,
} from 'react-icons/md'

const Navbar = () => {

    const pathname = usePathname();
    return (
        <div className={styles.container}>
            <div className={styles.title}>{pathname.split('/').pop()}</div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch />
                    <input type="text" placeholder="Search" className={styles.input}/>
                </div>
                {/* <div className={styles.icons}>
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20}/>
                    <MdPublic size={20}/>
                </div> */}
                    <Link href="/" className={styles.home}>
                        <MdHome size={20}/>
                        <h3>Home</h3>
                    </Link>
            </div>
        </div>
    );
}


export default Navbar