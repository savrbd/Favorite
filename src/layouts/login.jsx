import React, { useState } from "react";
import LoginForm from "../components/loginForm";
import RecoveryForm from "../components/recoveryForm";
import logo from "../image/logo.png";

const Login = () => {
    const [formType, setFormType] = useState("login");
    const toggleFormType = (params) => {
        setFormType(params);
    };
    const testLogin = {
        phone: "+7 111 111 11 11",
        password: "123456"
    };
    const [data, setData] = useState({
        phone: "",
        password: ""
    });
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const maskPhone = [
        "+",
        "7",
        " ",
        /[0-9]/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/
    ];
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center p-5">
                <div className="col-md-5 shadow p-5 m-5 rounded-4 bg-white text-center">
                    <img className="mb-5" src={logo} alt="logo" />
                    {formType === "recovery" ? (
                        <>
                            <h6 className="mb-4">Восстановление пароля</h6>
                            <RecoveryForm
                                toggleFormType={toggleFormType}
                                maskPhone={maskPhone}
                                data={data}
                                handleChange={handleChange}
                            />
                        </>
                    ) : (
                        <>
                            <LoginForm
                                toggleFormType={toggleFormType}
                                maskPhone={maskPhone}
                                testLogin={testLogin}
                                data={data}
                                handleChange={handleChange}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
