import React from 'react';
import InputField from './InputField';
import Button from './Button';

interface LoginFormProps {
    onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(username, password);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <InputField
                label="username"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="email@ttu.edu"
            />
            <InputField
                label="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <Button type="submit" className="self-center mt-5">
                login
            </Button>
        </form>
    );
};

export default LoginForm;