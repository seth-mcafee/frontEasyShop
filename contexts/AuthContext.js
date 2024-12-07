import { createContext, useEffect, useState } from "react";
import { Token } from "@/api/token";
import { User } from "@/api/user";

const tokenCtrl = new Token();
const userCtrl = new User();
export const AuthContext = createContext();

export function AuthProvider(props){

    const {children} = props;
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const token = tokenCtrl.getToken();

            if(!token) {
                logout();
                setLoading(false);
                return;
            }

            await login(token);
        })()
    }, []);


    const login = async(token) => {
        try {
            tokenCtrl.setToken(token);
            const response = await userCtrl.getMe();
            setUser(response)
            setToken(token);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const logout = () => {
        tokenCtrl.removeToken();
        setToken(null);
        setUser(null);
    }

    const data = {
        accessToken : token,
        user,
        login,
        logout
    }

    if(loading) return null;

    return (
    <AuthContext.Provider value={data}>

        {children}

    </AuthContext.Provider>
    )
}