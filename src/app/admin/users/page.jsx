import styles from "@/components/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
// import Pagination from "@/components/dashboard/pagination/pagination";
import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/actions";
import Search from "@/components/dashboard/search/search";


const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.query || "";
  console.log(q);
  // const page = searchParams?.page || 1;
  // const {count, users} = await getUsers(q, page);
  const users = await getUsers(q);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/admin/users/add">
          <button className={styles.addButton}>Add New User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Phone</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
          <tr key={user.id}>
            <td>
              <div className={styles.user}>
                <Image
                  src={user.img || "/noavatar.png"}
                  width={40}
                  height={40}
                  alt="avatar"
                  className={styles.userImage}
                  />
                {user.fullname}
              </div>
            </td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.createdAt?.toString().slice(4,16)}</td>
            <td>{user.isAdmin ? "Admin" : "User"}</td>
            <td>{user.phone}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button className={`${styles.button} ${styles.delete}`}>
                    delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination count={count} /> */}
    </div>
  );
};

export default UsersPage;
