import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <form style={formStyle}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>
              SUBSCRIBE
            </button>
          </form>
        </div>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4 style={headingStyle}>CURRENCY</h4>
          <p>USD</p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <div style={bottomContainerStyle}>
        <div style={sectionBottomStyle}>
          <h4 style={headingStyle}>mettä muse</h4>
          <ul style={listStyle}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>
        <div style={sectionBottomStyle}>
          <h4 style={headingStyle}>Quick Links</h4>
          <ul style={listStyle}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div style={sectionBottomStyle}>
          <h4 style={headingStyle}>Follow Us</h4>
          <p>
            <span>Instagram</span> | <span>LinkedIn</span>
          </p>
          <h4 style={headingStyle}>mettä muse ACCEPTS</h4>
          <div style={paymentMethodsStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_S1I-kRo8EmqBe0MSfTSRdtAflozeeDoBQ&s"
              alt="GPay"
              style={paymentIconStyle}
            />
            <img
              src="data:image/jpeg;base64,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"
              alt="Visa"
              style={paymentIconStyle}
            />
            <img
              src="data:image/png;base64,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"
              alt="PayPal"
              style={paymentIconStyle}
            />
            <img
              src="https://play-lh.googleusercontent.com/c8oisII4zLnZjpba-fpVOmdRUbmZHpPRVzBW-dee049P74S4zpX8cUD2-0p_AHrKog"
              alt="AMEX"
              style={paymentIconStyle}
            />
            <img
              src="data:image/png;base64,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"
              alt="Apple Pay"
              style={paymentIconStyle}
            />
            <img
              src="data:image/jpeg;base64,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"
              alt="O Pay"
              style={paymentIconStyle}
            />
          </div>
        </div>
      </div>

      <div style={footerBottomStyle}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '40px 0',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '40px',
};

const bottomContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px 0',
  borderTop: '1px solid #333',
};

const sectionStyle = {
  flex: '1 1 200px',
  marginBottom: '20px',
};

const sectionBottomStyle = {
  flex: '1 1 200px',
  margin: '0 20px',
};

const headingStyle = {
  fontSize: '1.2em',
  marginBottom: '10px',
  textTransform: 'uppercase',
};

const formStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const inputStyle = {
  padding: '10px',
  width: '250px',
  marginRight: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '4px',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const paymentMethodsStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '10px',
};

const paymentIconStyle = {
  width: '40px',
  height: 'auto',
  margin: '0 10px',
};

const footerBottomStyle = {
  borderTop: '1px solid #333',
  padding: '20px 0',
  fontSize: '0.9em',
};

export default Footer;
