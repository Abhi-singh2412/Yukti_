import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-background"></div>
            <div className="container">
                <div className="cta-grid">
                    <div className="cta-left">
                        <div className="cta-badge">
                            <i className="fas fa-rocket"></i>
                            <span>Join Us Today</span>
                        </div>
                        <h2 className="cta-title">Ready to Be Part of<br />This <span className="text-white">Journey?</span></h2>
                        <p className="cta-text">
                            We're just getting started, and we need passionate people like you. Together, we can build
                            a platform that fights hunger and reduces food waste across India.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/auth" className="btn btn-white">
                                <span>Get Started Now</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            <button className="btn btn-outline-white">
                                <span>Learn More</span>
                            </button>
                        </div>
                        <div className="cta-features">
                            <div className="cta-feature">
                                <i className="fas fa-check-circle"></i>
                                <span>Built with passion for community</span>
                            </div>
                            <div className="cta-feature">
                                <i className="fas fa-check-circle"></i>
                                <span>Every contribution counts</span>
                            </div>
                        </div>
                    </div>
                    <div className="cta-right">
                        <div className="cta-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1617953141905-b27fb1f79ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kcyUyMGhvbGRpbmclMjBmb29kfGVufDF8fHx8MTc2MzkwNTI5NHww&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Hands sharing food in community" className="cta-image" />
                            <div className="cta-decoration"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
