import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssFields/loginPage.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://ingest-test.tingz.net/get_jwtForMaptiler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.jwt);
                localStorage.setItem('jwt-token', data.jwt);




                const validateResponse = await fetch('https://ingest-test.tingz.net/validate_jwtForMaptiler', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: data.jwt  
                    })
                });
                
                // const validateResponse = await fetch('https://ingest-test.tingz.net/validate_jwtForMaptiler', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Authorization': `Bearer ${data.jwt}` 
                //     }
                // });
                debugger
                if (validateResponse.status === 200) {
                    navigate('/truckPage');
                } else {
                    const errorData = await validateResponse.json();
                    alert(errorData.message);
                }
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
