'use client';
import { useForm } from "react-hook-form"
import styles from "./style.module.scss";

type Inputs = {
    email: string
    password: string
  }
  
type LoginFormProps = {
    login: (formData: FormData) => Promise<void>;
    signup: (formData: FormData) => Promise<void>;
    className?: string;
}

const LoginForm = ({login,signup,className}:LoginFormProps)=>{
    const {
        register,
        formState: { isDirty, isValid, errors }
      } = useForm<Inputs>({ mode: "onChange" })
    //   const [wrongPassowrd, setWrongPassword] = useState(false)
    

    return <form className={styles.formContainer}>
        <label htmlFor="email">Email:</label>
        <input placeholder="email" {...register("email",{ required: true })} id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input placeholder="password" {...register("password", { required: true })} id="password" name="password" type="password" required />
        <button className={styles.btnPrimary} disabled={!isDirty || !isValid} formAction={login}>Log in</button>
        <button className={styles.formContainer} formAction={signup}>Sign up</button>

        {(errors.password || errors.email )&& <span>Verifique os campos</span>}
        {/* {(wrongPassowrd) && <span>Verifique o usuario ou senha</span>} */}
    </form>
}

export default LoginForm;