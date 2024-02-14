import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const ProtectedRoute = ({redirectPath}) => {
    // cargamos el estado global
    const {estadoGlobal} = useContext(AuthContext);
    
    const isActive = !!estadoGlobal;

    if(!isActive) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
}

export default ProtectedRoute;