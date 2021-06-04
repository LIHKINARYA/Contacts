import React from 'react'
import fire from './config/fire';
import './App.css';

class Login extends React.Component {
    login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Succeesss logged In");
            })
            .catch((err) => {
                console.log("Error " + err.toString());
            })
    }

    signUp() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Succeesss signed up");
            })
            .catch((err) => {
                console.log("Error " + err.toString());
                alert("Please enter a valid email address!");
            })
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand">Contacts</a>
                        </div>
                    </nav>
                </div>
            <div className="logincont">
                <div className="cont">
                    <div>Email</div>
                    <input id="email" placeholder="Enter Username.." type="email"/>
                </div>
                <div  className="cont">
                    <div>Password</div>
                    <input id="password" placeholder="Enter Password.." type="text"/>
                </div>
                <button type="button" className="btn btn-primary p-2 m-3 rnd" onClick={this.login}>Login</button>
                <button type="button" className="btn btn-primary p-2 m-3 rnd" onClick={this.signUp}>Signup</button>
            </div>
            </div>
        )
    }
}

export default Login;