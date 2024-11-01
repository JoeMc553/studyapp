import React from 'react';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
    const handleLogin = (username: string, password: string) => {
        // Handle login logic here
        console.log('Login attempt', { username, password });
    };

    return (
        <main className="flex overflow-hidden flex-col px-6 pt-10 pb-60 mx-auto w-full bg-white max-w-[480px]">
            <header className="flex flex-col">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/b3f5f5d45ca24c57be426ef02c82742c/832e2a19acf497906a8ed661aa839d68f3649abac8ab00bee8af799e90f521a5?apiKey=b3f5f5d45ca24c57be426ef02c82742c&"
                    alt="Login logo"
                    className="object-contain self-center max-w-full aspect-[0.82] w-[169px]"
                />
            </header>
            <section className="flex flex-col mt-20 w-full">
                <LoginForm onSubmit={handleLogin} />
                <div className="mt-7 text-xl text-center text-black">
                    create new account
                </div>
            </section>
        </main>
    );
};

export default LoginPage;