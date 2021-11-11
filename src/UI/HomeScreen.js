import React, {Component} from 'react';
import {Text,View,TextInput,Image,StyleSheet,ScrollView, FlatList} from 'react-native';
import ListCard from './ListCard';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';


class HomeScreen extends Component{
    render() {
        const {headerStyle,headerTextStyle,viewStyle,}=styles
        const data = [{
            image_name:require('../components/images/bsnl.jpg'),
            companyName="BSNL"
        },
        {
            image_name:require('../components/images/jnj.jpg'),
            companyName="Jhonson&Jhonsons"
        },
        {
            image_name:require('../components/images/tata.jpg'),
            companyName="TATA Group"
        },
        {
            image_name:require('../components/images/abbott.jpg'),
            companyName="Abott"
        },

    ]
        return(
            <View style={viewStyle}>
                <View style={headerStyle}>
                    <Text style={headerTextStyle}>Home</Text>
                </View>
                {/* <ScrollView>
                <ListCard image={require('../components/images/bsnl.jpg')} companyName="BSNL"/>
                <ListCard image={require('../components/images/jnj.jpg')} companyName="Jhonson&Jhonsons"/>
                <ListCard image={require('../components/images/tata.jpg')} companyName="TATA Group"/>
                <ListCard image={require('../components/images/abbott.jpg')} companyName="Abbott"/>
                </ScrollView> */}
                <FlatList
                data={data}
                renderItem={item=>{
                    console.log(item)
                }}
                
                
                />
            </View>
        )
    };
};

const styles = StyleSheet.create({

    viewStyle:{
        backgroundColor:'#b3ffff',
        flex:1,
    },

    headerStyle:{
        height:70,
        width:'100%',
        backgroundColor: 'black',
        padding:10,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
    },

    headerTextStyle:{
        fontSize:25,
        color:'beige',
        fontStyle:'italic',
    },


})

export default HomeScreen;

// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }