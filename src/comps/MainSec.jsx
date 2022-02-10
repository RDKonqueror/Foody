import '../App.css';
import DataArr from '../DataArr';
import SignupForm from '../comps/SignupForm';
import LoginForm from './LoginForm';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import FastfoodSharpIcon from '@material-ui/icons/FastfoodSharp';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const styleHidden = {
    right: '-460px'
};
const styleVisible = {
    right: '0',
};

const MainSec = () => {
    const slicedArr = DataArr.slice(0, 9);

    const [signupState, setSignupState] = useState(styleHidden);
    const [loginState, setLoginState] = useState(styleHidden);


    const openLogin = () => {
        if(loginState === styleHidden) {
            if(signupState === styleVisible) {
                setSignupState(styleHidden);
            }
            setLoginState(styleVisible);
        } else {
            setLoginState(styleHidden);
        }
    };

    const openSignup = () => {
        
        if(signupState === styleHidden) {
            if(loginState === styleVisible) {
                setLoginState(styleHidden);
            }
            setSignupState(styleVisible);
        } else {
            setSignupState(styleHidden);
        }
        
    };

    return (
        <>
            <section className="main">
                <div className="container">
                    <header>
                        <div className="logo">
                            <FastfoodSharpIcon fontSize="large" /> FOODY
                    </div>
                        <div className="reg">
                            <a href="javascript:void(0)" onClick={openLogin}>Login</a>
                            <a href="javascript:void(0)" onClick={openSignup}>Sign up</a>
                        </div>
                    </header>
                    <div className="slidetxt">
                        <div>
                            <span>Hungry?</span>
                            <span>Unexpected guests?</span>
                            <span>Cooking gone wrong?</span>
                            <span>Late night at office?</span>
                            <span>Hungry?</span>
                        </div>
                    </div>
                    <p>Order food from restaurants near you.</p>
                    <div className="searchbox">
                        <input type="text" placeholder="Enter your location" />
                        <div className="btn-container">
                            <Button
                                style={{
                                    height: "100%",
                                    borderRadius: "0",
                                    padding: "0 15px",
                                    color: "#505160",
                                    textTransform: "none"
                                }}
                                startIcon={<MyLocationIcon />}>
                                Locate me
                        </Button>
                            <Button
                                variant="contained"
                                style={{
                                    height: "100%",
                                    backgroundColor: "#fb6542",
                                    color: "#fff",
                                    borderRadius: "0",
                                    border: "1px solid #fb6542",
                                    fontWeight: "600",
                                    padding: "0 22px"
                                }}>
                                find food
                        </Button>
                        </div>
                    </div>
                    <h5>POPULAR CITIES</h5>
                    <div className="cities">
                        {slicedArr.map((val) => {
                            return (
                                <a href="#">{val.city}</a>
                            )
                        })}
                    &amp; <a href="#">more</a>
                    </div>
                </div>
                <div className="img-container">
                    <img src="../img/bg1.png" alt="" />
                </div>
            </section>
            <SignupForm id="signup" styles={signupState} />
            <LoginForm id="login" styles={loginState}  />
        </>
    );
}

export default MainSec;