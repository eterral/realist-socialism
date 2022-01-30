import { useNavigate } from "react-router-dom";
import "../Signin/Signin.css";
import { useState } from "react";
import { signIn } from "../../services/users";

export default function Signin({ setUser }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
    username: "",
    password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSignIn = async (e) => {
        e.preventDefault();
        const user = await signIn(form);
        setUser(user);
        navigate("/");
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
            <form className="signin-form" onSubmit={(e) => onSignIn(e)}>
            <p>Login</p>
            <br />
            <input
                className="signin-input"
                required
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
            />
            <br />
            <br />
            <input
                className="signin-input"
                required
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
            />
            <br />
            {renderError()}
            </form>
        </div>
    )
}
