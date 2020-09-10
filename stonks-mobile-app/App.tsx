import React from 'react';
import {View} from 'react-native';
import {Header} from "./components/header/Header";
import {MainContentContainer} from "./components/main_content/MainContentContainer";

export default class App extends React.Component{
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', paddingTop: 20, paddingLeft: 2, paddingRight: 2}}>
                <View style={{flex: 1}}>
                    <Header />
                </View>

                <View style={{flex: 6}}>
                    <MainContentContainer />
                </View>
            </View>
        );
    }
}
