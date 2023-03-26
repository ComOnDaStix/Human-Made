import styles from "../styles/Login.module.css";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginContainer}>
        <div className={styles.h1Container}>
          <h1 className={styles.h1}>Login</h1>
        </div>
        <div className={styles.formContainer}>
          <form action="">
            <label className={styles.label} htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Email Address"
              required
            />

            <label className={styles.label} htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="Password"
              required
            />

            <Link className={styles.link} href="/">
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
