"use client";

import { useState } from "react";
import styles from "./Links.module.css";
import NavLink from "./navLink/NavLink";
import { auth } from "@/lib/auth";
import { handleGithubLogout } from "@/lib/actions";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Events",
    path: "#event",
  },
  // {
  //   title: "Profile",
  //   path: "/profile",
  // }
];

const Links = async () => {
  const [open, setOpen] = useState(false);

  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>  
            <NavLink item={{ title: "Profile", path: "/profile" }} />
            {session.user?.isAdmin ? <NavLink item={{ title: "Admin", path: "/admin" }} /> : <NavLink item={{ title: "User", path: "/user" }} />}
            <form action={handleGithubLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button className={styles.menuBtn} onClick={() => setOpen((prev => !prev))}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
