import {Image, Text} from "react-native";
import React from "react";

export class Logo extends React.Component {
    render() {
        return       <Image
            style={{width: 100, height: 50}}
            source={require('../../assets/logo.png')}
        />;
    }
}
