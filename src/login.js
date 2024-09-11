import React, { useState } from "react";
import validator from 'validator';

const Login = () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

   
    const validateForm = () => {
        let formErrors = {};

        // Email validation
        if (!email) {
            formErrors.email = 'Email is required';
        } else if (!validator.isEmail(email)) {
            formErrors.email = 'Invalid email format';
        }

        // Password validation
        if (!validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            formErrors.password = 'Password must be at least 8 characters long, include at least one lowercase letter, one uppercase letter, one number, and one special character';
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

   
    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (validateForm()) {
            
            console.log('Email:', email);
            console.log('Password:', password);
            alert('Login successful!');
            
            setEmail('');
            setPassword('');
            setErrors({});
        }
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />
                    {errors.email && <p style={styles.error}>{errors.email}</p>}
                </div>
                <div style={styles.formGroup}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                    {errors.password && <p style={styles.error}>{errors.password}</p>}
                </div>
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

// CSS styles in JS object
const styles = {
    container: {
        width: '300px',
        margin: '100px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        padding: '8px',
        fontSize: '16px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginBottom: '10px',
    },
};

export default Login;

