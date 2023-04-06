import React from "react";
import { useNavigate } from "react-router-dom";

const Exit = () => {
    const navigate = useNavigate();
    const onExit = () => {
        navigate(-1);
    };
    return (
        <button
            type="button"
            className="btn btn-warning btn-lg mt-5"
            onClick={onExit}
        >
            Выход
        </button>
    );
};

export default Exit;
