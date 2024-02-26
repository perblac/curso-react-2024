import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    username: '',
    password: '',
    password2: '',
    fullname: '',
    address: '',
    email: '',
}

const useRegisterFormValidate = () => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username && formData.password && formData.password === formData.password2) {
            saveUser({
                username: formData.username,
                password: atob(formData.password),
                fullname: formData.fullname,
                address: formData.address,
                email: formData.email,
            });
            navigate("/login");
        } else if (formData.username.length === 0) alert('Debe introducir un nombre de usuario');
        else if (formData.password.length === 0) alert('Debe introducir una contraseña');
        else if (formData.password !== formData.password2) alert('Las contraseñas no coinciden');
    }

    const saveUser = (user) => {
        const users = JSON.parse(localStorage.getItem('users')) ?? [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

  return ({ formData, handleChange, handleSubmit });
}

export default useRegisterFormValidate;