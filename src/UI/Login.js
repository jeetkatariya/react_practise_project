import React, {Component} from 'react';
import {Text,View,TextInput,Image,StyleSheet,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component{
    render() {
        const {container, logoContainer, logo, titleStyle, formContainer, input, buttonContainer, buttonText} = styles;

        return(
            <KeyboardAvoidingView behavior="padding" style={container}>
                <View style={container}>
                    <View style={logoContainer}>
                        <Image 
                        style={logo}
                        source={require('../components/images/iv_logo.png')}
                        />

                        <Text style={titleStyle}>Welcome to Smart Industrial Visit</Text>
                    </View>
                        <View style={formContainer}>
                            <LoginForm/>
                        </View>
                </View>
            </KeyboardAvoidingView>
        )
    };
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#81cfe0',

    },

    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        // justifyContent: 'center',
        marginTop: 100,
        elevation:50,
        shadowColor: '#202020',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
    },

    logo:{
        height:200,
        width:200,
    },

    titleStyle:{
        color:'#FFF',
        marginTop:10,
        width:250,
        textAlign:'center',
        opacity:0.7,
        fontSize: 20,
    },

    formContainer:{
        justifyContent: 'center',
        padding:20,
        marginBottom:300,
    },
    
});

export default Login;