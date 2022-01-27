import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn({ setUser }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSignIn = async (e) => {
        e.preventDefault();
        try {
            const user = await signIn(form);
            setUser(user);
            navigate("/");
        }catch (error) {
            setForm({
                isError: true,
                errorMsg: "Invalid Email or Password",
                email: "",
                password: "",
            });
        }
    };

    const renderError = () => {
        if (form.isError) {
            return <button type="submit">{form.errorMsg}</button>;
        } else {
            return (
            <button className="signin_button" type="submit">
                Sign In{" "}
            </button>
            );
        }
    }

    return (
        <div>
            <form className="signin_form" onSubmit={(e) => onSignIn(e)}>
            <p>Username</p>
            <br />
            <input
                className="signin_input"
                required
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
            />
            <br />
            <p>Password</p>
            <br />
            <input
                className="signin_input"
                required
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
            />
            <br />
            {renderError()}
            </form>
        </div>
    )
}
