import React, {Component} from 'react';
import RegisterationForm from "./UI/RegisterationForm";
import Login from "./UI/Login";
import LoginForm from "./UI/LoginForm";
import HomeScreen from "./UI/HomeScreen";

class App extends Component {
    render() {
        return(
            // <Login/>
            <HomeScreen/>
            // <RegisterationForm/>
        );
    };
};

export default App;