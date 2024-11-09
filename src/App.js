import React, { useState } from 'react';
import logo from './Untitled.png';

function AadhaarQueueManagement() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [sentOtp, setSentOtp] = useState('');

    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSendOtp = () => {
        if (phoneNumber) {
            const generatedOtp = '123456';
            setSentOtp(generatedOtp);
            alert(`OTP sent to ${phoneNumber}: ${generatedOtp}`); 
            setOtpSent(true); 
        } else {
            alert("Please enter a valid phone number.");
        }
    };

    const handleVerifyOtp = () => {
        if (otp) {
            if (otp === sentOtp) { 
                alert('OTP Verified');
            } else {
                alert("Invalid OTP. Please try again.");
            }
        } else {
            alert("Please enter the OTP.");
        }
    };

    const handleResendOtp = () => {
        const generatedOtp = '123456'; 
        setSentOtp(generatedOtp); 
        alert(`New OTP sent to ${phoneNumber}: ${generatedOtp}`); 
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>Aadhaar Queue Management System</div>
            <div style={styles.content}>
                <div style={styles.leftPanel}>
                    <img
                        src={logo} 
                        alt="Aadhaar Logo"
                        style={styles.logo}
                    />
                </div>
                <div style={styles.rightPanel}>
                    <h2 style={styles.loginTitle}>Login with phone number</h2>
                    <p style={styles.loginSubtitle}>See what is going on with your Aadhaar</p>
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        style={styles.input}
                    />
                    <button style={styles.continueButton} onClick={handleSendOtp}>
                        Continue
                    </button>
                    {otpSent && (
                        <>
                            <input
                                type="text"
                                placeholder="OTP"
                                value={otp}
                                onChange={handleOtpChange}
                                style={{ ...styles.input, marginTop: '20px' }} // Add margin here
                            />
                            <button style={styles.verifyButton} onClick={handleVerifyOtp}>
                                Verify
                            </button>
                            <button 
                                style={styles.resendOtpButton} 
                                onClick={handleResendOtp}
                            >
                                Resend OTP
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f8b400',
        color: '#8b0000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    },
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    content: {
        display: 'flex',
        backgroundColor: '#d32f2f',
        borderRadius: '10px',
        overflow: 'hidden',
    },
    leftPanel: {
        padding: '40px',
        backgroundColor: '#ffffff',
    },
    logo: {
        width: '150px',
        height: '150px',
    },
    rightPanel: {
        padding: '40px',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '300px',
    },
    loginTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    loginSubtitle: {
        fontSize: '14px',
        color: '#555',
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '14px',
    },
    continueButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#d32f2f',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    verifyButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#f8b400',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '10px',
    },
    resendOtpButton: {
        fontSize: '12px',
        color: '#555',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px',
        textAlign: 'center',
    },
};

export default AadhaarQueueManagement;