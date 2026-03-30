import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Donate from './pages/Donate';
import Receive from './pages/Receive';
import RequestFood from './pages/RequestFood';
import RequestDonation from './pages/RequestDonation';
import FulfillRequest from './pages/FulfillRequest';
import Auth from './pages/Auth';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/request-food" element={<RequestFood />} />
                <Route path="/request-donation" element={<RequestDonation />} />
                <Route path="/fulfill-request" element={<FulfillRequest />} />
                <Route path="/receive" element={<Receive />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </Router>
    );
}

export default App;
