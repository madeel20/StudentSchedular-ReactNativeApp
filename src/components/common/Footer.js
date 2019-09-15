
import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import {Actions } from 'react-native-router-flux';


const Footer = () => {
    const { buttonStyle, textStyle,footer } = styles;
    return (
        <View style={footer} >
        <TouchableOpacity onPress={()=>{Actions.reset('auth')}} style={buttonStyle}>
        <Text style={textStyle}> Log Out </Text>
        </TouchableOpacity>
        </View>
    );
};
const styles = {
    buttonStyle: {
        backgroundColor: 'red',
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'stretch',
        flex: 1,
        alignItems: 'center',
    },
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: '800',
        paddingTop: 15,
        paddingBottom: 5
    },
    footer: {
            position: 'absolute',
            flex:0.1,
            left: 0,
            right: 0,
            bottom: -10,
            backgroundColor:'red',
            flexDirection:'row',
            height:'12%',
            alignItems:'center',
        }
};

export { Footer }; 

// import React from 'react';
// import { View } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import Button from './index';


// const Footer = () => {
//     return (
//         <View style={styles.footer}>
//             <Button buttonClickEvent={()=>{Actions.reset('auth')}}>
//                 Log Out
//             </Button>
//         </View>
//     );
    
// };
// var styles = {
//   footer: {
//     position: 'absolute',
//     flex:0.1,
//     left: 0,
//     right: 0,
//     bottom: -10,
//     backgroundColor:'green',
//     flexDirection:'row',
//     height:80,
//     alignItems:'center',
//   }
// }
// export { Footer }; 

