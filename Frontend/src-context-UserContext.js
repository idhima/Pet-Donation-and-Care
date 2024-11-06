import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const UserContext = createContext();

// Create a custom hook to use the context
export const useUser = () => {
    return useContext(UserContext);
};

// User provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Validate JWT token here (Optional step: you can call an API to verify)
            setUser({ token });
        }
        setLoading(false);
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setUser({ token });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {!loading && children}
        </UserContext.Provider>
    );
};

//for checking token expiry
import jwt_decode from 'jwt-decode';

// In the `useEffect` where you check for the token:
useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const decoded = jwt_decode(token);
            const currentTime = Date.now() / 1000;
            if (decoded.exp > currentTime) {
                setUser({ token });
            } else {
                // If the token is expired, remove it
                localStorage.removeItem('token');
                setUser(null);
            }
        } catch (error) {
            localStorage.removeItem('token');
            setUser(null);
        }
    }
    setLoading(false);
}, []);

