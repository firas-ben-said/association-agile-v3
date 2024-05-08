import styles from "./newPassword.module.css";
import NewPasswordForm from "@/components/auth/newPasswordForm/newPasswordForm";

const ForgetPasswordPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <NewPasswordForm />
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
