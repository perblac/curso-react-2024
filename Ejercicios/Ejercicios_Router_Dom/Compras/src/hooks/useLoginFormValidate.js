import { useState } from "react";
import { useAuthContext } from '../context/useAuthContext';
import { useNavigate } from "react-router-dom";

const initialState = {
    username: '',
    password: '',
}

const useLoginFormValidate = () => {
    const [formData, setFormData] = useState(initialState);
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username && formData.password) {
            if (checkCredentials()) {
                login(checkCredentials());
                navigate("/");
            }
            else alert('Nombre de usuario o contraseña incorrectos');
        } else if (formData.username.length === 0) alert('Debe introducir un nombre de usuario');
        else alert('Debe introducir una contraseña');
    }

    const checkCredentials = () => {
        const users = JSON.parse(localStorage.getItem('users')) ?? [];
        let result = null;
        users.forEach((user) => {
            if (user.username === formData.username && user.password === atob(formData.password)) {
                result = user;
            }
        });
        return result;
    }

  return ({ formData, handleChange, handleSubmit });
}

export default useLoginFormValidate;