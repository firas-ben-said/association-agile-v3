"use client";

import { register } from "@/lib/actions";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="fullname" name="fullname" required />
      <input type="text" placeholder="username" name="username" required />
      <input type="email" placeholder="email" name="email" required />
      <input type="password" placeholder="password" name="password" required />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
        required
      />
      <input type="date" name="dob" />
      {/*genre*/}
      <select name="genre" required>
        <option value="">Select Genre</option>
        <option value="Male">Male</option>
        <option value="female">Female</option>
      </select>


      <input type="tel" placeholder="Phone" name="phone" />
      {/* image upload */}
      {/* <label for="img_upload" class={styles.imgButton} >
        + Upload Image
      </label> */}
      {/* <input
        type="file"
        id="img_upload"
        name="img"
        accept="image/*"
        capture="camera"
        className={styles.imgInput}
      /> */}
      <button>Sign Up</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
