import { login, signup } from './actions'
import styles from "./style.module.scss";

export default function LoginPage() {
  return (
    <form className={styles.LoginPage}>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}