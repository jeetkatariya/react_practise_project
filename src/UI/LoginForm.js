import React, { Component } from 'react';
import {View,Text,TextInput,TouchableOpacity,KeyboardAvoidingView,StyleSheet} from 'react-native';

class LoginForm extends Component {
    render() {
        const {container, input, buttonContainer, buttonText,signupText}=styles
        return (
            <KeyboardAvoidingView>
                <View style={container}>
                        <TextInput 
                            placeholder="Username"
                            placeholderTextColor="#24252a"
                            returnKeyType="next" //returns type of button in keyboard
                            onSubmitEditing={() => this.passwordInput.focus()}
                            style={input}/>

                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor="#24252a"
                            returnKeyType="go"
                            ref={(input) => this.passwordInput = input}
                            style={input}/>

                        <TouchableOpacity style={buttonContainer}>
                            <Text style={buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity>
                                <Text style={signupText}>
                                New to our website? Sign-Up by clicking Here
                                </Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </KeyboardAvoidingView>
        )
    };
};

const styles = StyleSheet.create ({
    container:{
        padding: 20,
    },
    input:{
        height: 40,
        backgroundColor:'#e4f1fe',
        marginBottom: 10,
        paddingHorizontal: 10,
        color:'#FFF',
    },

    buttonContainer:{
        // backgroundColor: '#2980b9',
        marginTop:10,
        paddingVertical: 15,
        backgroundColor: 'green',
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 60,
    },

    buttonText:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
    },

    signupText:{
        textAlign: 'center',
        color: '#FFF',
        fontSize:13,
        alignSelf:'center',
        alignItems: 'center',
        width:'50%',
        marginTop:10,
    }

});

export default LoginForm;