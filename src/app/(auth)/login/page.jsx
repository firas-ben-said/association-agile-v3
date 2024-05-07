import { handleGithubLogin, handleGoogleLogin } from "@/lib/actions"; // Assuming you have a function for handling Google login
import styles from "./login.module.css";
import { auth } from "@/lib/auth";
import LoginForm from "@/components/loginForm/LoginForm";

const LoginPage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Google login button with action */}
        <form action={handleGoogleLogin}>

        <button className={styles.google} >Login with Google</button>
        </form> 
        {/* GitHub login button with existing action */}
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <hr />
        {/* Your existing login form component */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
