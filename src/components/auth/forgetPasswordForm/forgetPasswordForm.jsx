"use client";

import { forgetPassword } from "@/lib/actions";
import styles from "./forgetPasswordForm.module.css";
// import { useFormState } from "react-dom";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const ForgetPasswordForm = () => {
  return (
    <form className={styles.form} action={forgetPassword}>
      <h3>Trouble logging in?</h3>
      <p>
        Enter your email and we'll send you a link to get back into your
        account.
      </p>
      <input type="text" placeholder="Type your email" name="email" required />
      <button>Send reset email</button>
      <Link href="/login">
        <b>Back to login</b>
      </Link>
    </form>
  );
};

export default ForgetPasswordForm;
