import styles from "@/components/dashboard/users/addUser/addUser.module.css";
import { addUser } from "@/lib/actions";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="fullname" name="fullname" required />
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="tel" placeholder="phone" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value="false">Is Admin ?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {/* <input
          type="file"
          id="img_upload"
          name="img"
          accept="image/*"
        /> */}
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
