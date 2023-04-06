import React from "react";
import TextField from "./textField";

const RecoveryForm = ({ toggleFormType, maskPhone, data, handleChange }) => {
    return (
        <div>
            <TextField
                maskValue={maskPhone}
                guideValue={true}
                label="Введите номер телефона"
                name="phone"
                value={data.phone}
                onChange={handleChange}
            />
            <div
                className="d-flex justify-content-end mb-4"
                onClick={() => toggleFormType("login")}
            >
                <h6 className="text-warning">назад</h6>
            </div>
            <p>временный пароль 123456</p>
            <button
                type="submit"
                className="btn btn-warning w-100 mx-auto text-white"
            >
                Позвонить
            </button>
        </div>
    );
};

export default RecoveryForm;
