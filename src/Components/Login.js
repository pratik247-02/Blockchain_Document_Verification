import React from "react";

const Login = (props) => {
    return (
        <div>
            <button onClick={props.connectWallet} 
            style={{
                backgroundColor: '#4CAF50', /* Green */
                color: 'white',
                padding: '15px 32px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '4px 2px',
                cursor: 'pointer',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'background-color 0.3s ease',
            }}>Login Metamask</button>
        </div>
    )
}

export default Login;