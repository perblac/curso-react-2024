import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;
    const [logged, setLogged] = useState(false);

    const login = (user) => {
        setLogged(user);
    }

    const logout = () => {
        setLogged(false);
    }
    

    return (
        <AuthContext.Provider value={{ logged, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}