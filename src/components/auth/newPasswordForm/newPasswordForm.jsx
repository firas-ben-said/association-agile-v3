"use client";

import Link from "next/link";
import styles from "./newPasswordForm.module.css";
import { useSearchParams } from "next/navigation";
import { resetPassword } from "@/lib/actions";
import { useState } from "react";

const NewPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const result = await resetPassword(token, password, confirmPassword);
      if (result.error) {
        setError(result.error);
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError("Failed to reset password");
      console.error(err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Reset account password</h3>
      <p>Enter a new password for your account.</p>
      <input
        type="password"
        placeholder="New password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm new password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit">Reset password</button>
      {error && <p className={styles.error}>{error}</p>}
      {success && (
        <p className={styles.success}>Password reset successfully!</p>
      )}
      <Link href="/login">
        <b>Back to login</b>
      </Link>
    </form>
  );
};

export default NewPasswordForm;
