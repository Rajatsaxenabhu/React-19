import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../api/axios"; // Adjust the path as necessary
import { logout } from '../redux/auth_verify/authy_slice'; // Adjust the path as necessary

const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutUser = async () => {
        try {
            const response = await api.get("/auth/logout");
            if (response.status === 200) {
                console.log("Logout successful:", response);
                dispatch(logout()); // Dispatch the logout action
                navigate("/login"); // Redirect to the login page
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return { logoutUser };
};

export default useLogout;
