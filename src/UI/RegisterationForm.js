import React, { Component } from 'react';
import {View,Text,TextInput,TouchableOpacity,KeyboardAvoidingView,Image,StyleSheet} from 'react-native';

class RegisterationForm extends Component {
    render() {
        const {container, input, buttonContainer, buttonText, cardStyle, logo, logoContainer,titleStyle}=styles
        return (
            
            <View style={container}>
                <View style={cardStyle}>
                    
                    <View style={logoContainer}>
                        <Image style={logo} source={require('../components/images/iv_logo.png')} />

                        {/* <Text style={titleStyle}>Welcome to Smart Industrial Visit</Text> */}
                    </View>
                    <View style={{marginBottom:0}}>
                        <TextInput 
                            placeholder="First Name"
                            placeholderTextColor="rgba(255,255,255,0.9)"
                            returnKeyType="next" //returns type of button in keyboard
                            onSubmitEditing={() => this.passwordInput.focus()}
                            style={input}/>

                        <TextInput 
                            placeholder="Last Name"
                            placeholderTextColor="rgba(255,255,255,0.9)"
                            returnKeyType="next" //returns type of button in keyboard
                            onSubmitEditing={() => this.passwordInput.focus()}
                            style={input}/>

                        <TextInput 
                            placeholder="Role"
                            placeholderTextColor="rgba(255,255,255,0.9)"
                            returnKeyType="next" //returns type of button in keyboard
                            onSubmitEditing={() => this.passwordInput.focus()}
                            style={input}/>

                        <TextInput 
                            placeholder="Email"
                            placeholderTextColor="rgba(255,255,255,0.9)"
                            returnKeyType="next" //returns type of button in keyboard
                            onSubmitEditing={() => this.passwordInput.focus()}
                            style={input}/>

                        <TextInput 
                            placeholder="Phone Number"
                            placeholderTextColor="rgba(255,255,255,0.9)"
                            returnKeyType="next" //returns type of button in keyboard
                            onSubmitEditing={() => this.passwordInput.focus()}
                            style={input}/>

                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor="rgba(255,255,255,0.9)"
                            returnKeyType="go"
                            ref={(input) => this.passwordInput = input}
                            style={input}/>
                    </View>
                </View>
                <TouchableOpacity style={buttonContainer}>
                    <Text style={buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        )
    };
};

const styles = StyleSheet.create ({
    container:{
        // marginTop:5,
        padding: 20,
        flex:1,
        backgroundColor:'#81cfe0'
    },

    cardStyle:{
        backgroundColor:"#e4f1fe",
        width:'95%',
        height:'70%',
        borderWidth:2,
        borderColor:'black',
        alignContent:'center',
        // justifyContent:'center',
        paddingTop:155,
        alignSelf: 'center',
        borderRadius: 30,
        marginTop:90,
        elevation:20,
    },

    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        // marginTop: 15,
        position:'absolute',
        top:0,
        left:180,
    },

    logo:{
        height:200,
        width:200,
        borderRadius:200,
        borderWidth:2,
        borderColor:'white',
        position:'absolute',  
    },

    titleStyle:{
        color:'black',
        marginTop:10,
        width:250,
        textAlign:'center',
        opacity:0.7,
        fontSize: 20,
    },

    input:{
        height: 50,
        width:'90%',
        backgroundColor:'#6bb9f0',
        marginBottom: 12,
        paddingHorizontal: 10,
        color:'#FFF',
        borderRadius:30,
        alignSelf:'center',
        borderWidth:2,
        borderColor:'#22a7f0'
    },

    buttonContainer:{
        // backgroundColor: '#2980b9',
        marginTop: 20,
        paddingVertical: 15,
        backgroundColor: 'green',
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius:100,
    },

    buttonText:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '500',
    },

});

export default RegisterationForm;