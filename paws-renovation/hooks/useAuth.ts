import axios from "axios"
import { AuthenticationContext } from "../app/context/AuthContext";
import { useContext } from "react";
import { removeCookies } from "cookies-next";

const useAuth = () => {

    const {data, error, loading, setAuthState} = useContext(AuthenticationContext)

    const signin = async ({email, password}: {email: string; password: string}, handleSuccess: () => void) => {
        setAuthState({
            data: null,
            error:null,
            loading: true
        });
        
        try {
            const response = await axios.post("http://localhost:3000/api/auth/signin",{
                email,
                password
            });

            setAuthState({
                data: response.data,
                error: null,
                loading: false
            });

            console.log(data);
            handleSuccess();
        } catch (error: any) {
            
            console.log("Hello");
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false
            });

        }
    }

    const logout = () => {
        removeCookies("jwt");
        
        setAuthState({
            data: null,
            error: null,
            loading: false
        })
    }
    return {
        signin,
        logout
    }
}

export default useAuth