import { useState, useEffect } from "react";
import "./App.css";

// General Routes
import LandingPage from "./routes/landingPage/LandingPage";
import ForgotPassword from "./routes/forgotPassword/ForgotPassword";
import Login from "./routes/login/Login";
import ResetPassword from "./routes/resetPassword/ResetPassword";
import Signup from "./routes/signup/Signup";
import EmailConfirmation from "./routes/emailConfirmation/EmailConfirmation";

// Admin Routes
import AdminDashboard from "./routes/admin/dashboard/Dashboard";
import AdminTicket from "./routes/admin/tickets/Ticket";
import AdminTicketPreview from "./routes/admin/ticketPreview/TicketPreview";


// Employee Routes
import UserDashboard from "./routes/user/dashboard/Dashboard";
import UserLogin from "./routes/userLogin/UserLogin";
import UserTicket from "./routes/user/tickets/Ticket";
import UserTicketPreview from "./routes/user/ticketPreview/TicketPreview";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from 'axios'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/tickets" element={<AdminTicket />} />
        <Route path="/admin/tickets/:id" element={<AdminTicketPreview />} />


          {/* User Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/tickets" element={<UserTicket />} />
        <Route path="/user/tickets/:id" element={<UserTicketPreview />} />


        <Route path="/confirm-email" element={<EmailConfirmation />} />  
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
