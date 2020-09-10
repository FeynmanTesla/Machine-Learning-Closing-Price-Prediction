import {Text, View} from "react-native";
import React from "react";
import {MainContentContainer} from "../main_content/MainContentContainer";
import {Logo} from "./Logo";
import {DataScroller} from "./DataScroller";
import {NewsScroller} from "./NewsScroller";
import {Clock} from "./Clock";

export class Header extends React.Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 4, flexDirection: "row"}}>
                    <View style={{flex: 2}}>
                        <Logo />
                    </View>

                    <View style={{flex: 5}}>
                        <Clock />
                    </View>
                </View>

                <View style={{flex: 2}}>
                    <DataScroller />
                </View>

                <View style={{flex: 2}}>
                    <NewsScroller />
                </View>
            </View>
        );
    }
}
