import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '100px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '450px', background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>
                        {isLogin ? 'Welcome Back' : 'Join the Movement'}
                    </h2>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {!isLogin && (
                            <input type="text" placeholder="Full Name" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', background: '#f9f9f9' }} />
                        )}
                        <input type="email" placeholder="Email Address" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', background: '#f9f9f9' }} />
                        <input type="password" placeholder="Password" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', background: '#f9f9f9' }} />

                        <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '15px', marginTop: '10px' }}>
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>

                    <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <span
                            onClick={() => setIsLogin(!isLogin)}
                            style={{ color: '#ff6b35', fontWeight: '600', cursor: 'pointer' }}
                        >
                            {isLogin ? 'Sign Up' : 'Login'}
                        </span>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Auth;
