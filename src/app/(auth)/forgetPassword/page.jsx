import ForgetPasswordForm from "@/components/auth/forgetPasswordForm/forgetPasswordForm";
import styles from "./forgetPassword.module.css";

const ForgetPasswordPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
