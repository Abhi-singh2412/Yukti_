import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Donate = () => {
    const [formData, setFormData] = useState({
        foodType: '',
        quantity: '',
        location: '',
        expiryTime: '',
        contact: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your donation! We will connect you shortly.');
        // Here you would send data to backend
        console.log(formData);
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div className="container" style={{ marginTop: '100px', flex: 1 }}>
                <div className="section-header center">
                    <h2 className="section-title">Donate <span className="gradient-text">Food</span></h2>
                    <p className="section-description">Fill out the details below to share your surplus food.</p>
                </div>

                <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Food Type / Name</label>
                            <input
                                type="text"
                                name="foodType"
                                value={formData.foodType}
                                onChange={handleChange}
                                placeholder="e.g. Rice and Curry, Bread..."
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                required
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Quantity (Servings)</label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                placeholder="e.g. 5"
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                required
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Pickup Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Enter address"
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                required
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Fresh Until</label>
                            <input
                                type="datetime-local"
                                name="expiryTime"
                                value={formData.expiryTime}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                required
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Contact Number</label>
                            <input
                                type="tel"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="+91..."
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>
                            Submit Donation
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Donate;
