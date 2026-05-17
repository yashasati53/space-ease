import React from "react";
import Link from "next/link";
import "./login.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Sign in</h1>
        <p className="login-subtitle">Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
        
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input type="email" id="email" required />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password <span className="required">*</span></label>
            <input type="password" id="password" required />
          </div>
          
          <div className="form-actions">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          
          <button type="button" className="btn-signin">Sign in</button>
        </form>
        
        <div className="signup-section">
          <h2>Become a member</h2>
          <p>Join SpaceEase for exclusive offers and sustainable living tips.</p>
          <button type="button" className="btn-signup">Sign up</button>
        </div>
      </div>
    </div>
  );
}
