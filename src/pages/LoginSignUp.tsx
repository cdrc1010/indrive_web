import LoginForm from "../components/Login";
import Signup from "../components/Signup";
import styles from "./loginsignup.module.css";
import services from "../assets/images/services.png";

const LoginSignUp = () => {
  return (
    <>
      <header>
        <img src={services} alt="" />
      </header>
      <div className={styles.container}>
        <aside className={styles.login}>
          <LoginForm />
        </aside>
        <main className={styles.signup}>
          <Signup />
        </main>
      </div>
    </>
  );
};

export default LoginSignUp;
