import React from "react";

import useLogout from "../hook/logout"; // Adjust the path as necessary

const LogoutLink: React.FC = () => {
    const { logoutUser } = useLogout();

    const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent the default anchor behavior
        await logoutUser(); // Call the logout function
        // Note: Navigation is handled within the logoutUser hook
    };

    return (
        <a 
            href="/login" 
            onClick={handleLogout} 
            className="hover:bg-gray-700 px-3 py-2 rounded"
        >
            Logout
        </a>
    );
};

export default LogoutLink;
