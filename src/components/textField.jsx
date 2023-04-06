import React, { useState } from "react";
import MaskedInput from "react-text-mask";

const TextField = ({
    label,
    type,
    name,
    value,
    onChange,
    maskValue,
    guideValue,
    error
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const [showPassword, setShowPassword] = useState(false);
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="mb-3">
            <div className="d-flex">
                <label htmlFor={name}>{label}</label>
            </div>
            <div className="input-group has-validation">
                {guideValue ? (
                    <MaskedInput
                        mask={maskValue}
                        guide={guideValue}
                        type={type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        className={getInputClasses()}
                    />
                ) : (
                    <input
                        type={showPassword ? "text" : type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        className={getInputClasses()}
                    />
                )}
                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={
                                "bi bi-eye" + (showPassword ? "-slash" : "")
                            }
                        ></i>
                    </button>
                )}
                {error && <div className="invalid-feedback ">{error}</div>}
            </div>
        </div>
    );
};

export default TextField;
