
import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.css";
import { auth } from "@/lib/auth";
import LoginForm from "@/components/loginForm/LoginForm";

const LoginPage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <hr />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
