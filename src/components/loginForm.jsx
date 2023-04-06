import React, { useState } from "react";
import TextField from "./textField";
import { useNavigate } from "react-router-dom";

const LoginForm = ({
    toggleFormType,
    maskPhone,
    testLogin,
    data,
    handleChange
}) => {
    const [errors, setErrorse] = useState({
        phone: "",
        password: ""
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (JSON.stringify(testLogin) === JSON.stringify(data)) {
            navigate("/exit");
        } else if (data.phone === testLogin.phone) {
            setErrorse({
                phone: "",
                password: "пароль не верен"
            });
        } else if (data.password === testLogin.password) {
            setErrorse({
                phone: "логин не верен",
                password: ""
            });
        } else {
            setErrorse({
                phone: "логин не верен",
                password: "пароль не верен"
            });
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                maskValue={maskPhone}
                guideValue={true}
                label="Введите логин"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                error={errors.phone}
            />
            <TextField
                label="Введите пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <div
                className="d-flex justify-content-end mb-4"
                onClick={() => {
                    toggleFormType("recovery");
                }}
            >
                <h6 className="text-warning">Забыли пароль?</h6>
            </div>
            <button
                type="submit"
                className="btn btn-warning w-100 mx-auto text-white mb-4"
            >
                <h4>Войти</h4>
            </button>
        </form>
    );
};

export default LoginForm;
