type LoginFormProps = {
    login: (formData: FormData) => Promise<void>;
    signup: (formData: FormData) => Promise<void>;
    className?: string;
}

const LoginForm = ({login,signup,className}:LoginFormProps)=>{
    return <form className={className}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button disabled={true} name="login" formAction={login}>Log in</button>
        <button name="signup" formAction={signup}>Sign up</button>
    </form>
}

export default LoginForm;