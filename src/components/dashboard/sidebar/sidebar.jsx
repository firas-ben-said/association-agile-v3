import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdShoppingBag,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdHome,
} from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import Link from "next/link";
import { auth, signOut } from "@/lib/auth";
import { handleGithubLogout } from "@/lib/actions";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/admin",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/admin/users",
        icon: <FiUsers />,
      },
      {
        title: "Events",
        path: "/admin/events",
        icon: <MdShoppingBag />,
      },
    ],
  },
  {
    title: "Office",
    list: [
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Users",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const session = await auth();
  // console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={session.user.img || "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>{session.user.username}</span>
          <span className={styles.userTitle}>
            {session.user.isAdmin ? "Admin" : "User"}
          </span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form action={handleGithubLogout}>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
