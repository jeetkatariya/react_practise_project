import React, {Component} from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native';

class ListCard extends Component{
    render() {
        const {imageStyle,cardStyle,textStyle,buttonTextStyle,buttonStyle} = styles;
        const {image,companyName} = this.props;
        return(
            <View style={cardStyle}>
                <Image style={imageStyle} source={image}/>
                <View>
                    <Text style={textStyle}>{companyName}</Text>
                </View>
                <TouchableOpacity style={buttonStyle}>
                    <Text style={buttonTextStyle}>Visit Company</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    imageStyle:{
        height:240,
        width: '100%',
    },

    cardStyle:{
        backgroundColor:'#ff3300',
        width:'80%',
        alignItems:'center',
        alignSelf:'center',
        borderWidth:1,
        borderColor:'black',
        marginVertical:10,
    },

    textStyle:{
        height:30,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        paddingVertical:4,
        fontSize:16

    },

    buttonTextStyle:{
        color:'white',
        fontSize:16
    },

    buttonStyle:{
        backgroundColor:'black',
        height:50,
        width:'100%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
    }
});

export default ListCard;