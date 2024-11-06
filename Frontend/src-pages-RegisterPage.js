import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('adopter');
    const { login } = useUser();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, role })
            });
            const data = await response.json();
            if (response.ok) {
                login(data.token);
                alert('Registration successful');
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('An error occurred');
        }
    };

    return (
        <div className="register-page">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="adopter">Adopter</option>
                    <option value="donor">Donor</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;

