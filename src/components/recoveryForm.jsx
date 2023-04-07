import React from "react";
import TextField from "./textField";
import Modal from "./modal";

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
            <button
                type="button"
                className="btn btn-warning w-100 mx-auto text-white"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                Восстановить пароль
            </button>
            <Modal toggleFormType={toggleFormType} />
        </div>
    );
};

export default RecoveryForm;
