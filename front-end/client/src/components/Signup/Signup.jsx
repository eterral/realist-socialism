import '../Signup/Signup.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from '../../services/users';

export default function Signup({setUser}) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: "",
        password2: "",
    });

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };

    const onSignUp = async (e) => {
        e.preventDefault();
            const user = await signUp(form);
            setUser(user);
            navigate("/");
    };

    const renderError = () => {
        if (form.isError) {
        return <button type="submit">{form.errorMsg}</button>;
        } else {
        return <button type="submit" className="signup_button">Create Account</button>;
        }
    };

    return (
        <div className="signup-container">

        <form className='signup-form' onSubmit={onSignUp}>
            <p>Create Account</p>
            <br />
            <input className="signup-input"
            required
            type="text"
            name="username"
            value={form.username}
            placeholder="Enter Username"
            onChange={handleChange}
            />
            <br /><br />
            <input className="signup-input"
            required
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter Password"
            onChange={handleChange}
            /><br />
            <br />
            <input className="signup-input"
            required
            type="password"
            name="password2"
            value={form.password2}
            placeholder="Reenter Password"
            onChange={handleChange}
            />
            <br />
            {renderError()}
            </form>
        </div>
    );
}
