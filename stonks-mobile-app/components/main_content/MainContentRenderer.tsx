import {Image, Text, View} from "react-native";
import React from "react";
import {MAIN_CONTENT_MENU_ITEM_ENUM, MainContentContainer} from "./MainContentContainer";
import {Header} from "../header/Header";

export class MainContentRenderer extends React.Component<{menuItem: MAIN_CONTENT_MENU_ITEM_ENUM}, {}> {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1}}>
                    <Text>{MAIN_CONTENT_MENU_ITEM_ENUM[this.props.menuItem]} info</Text>
                </View>

                <View style={{flex: 14}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <View style={{flex: 1}}>
                            <Text>todo: gainers</Text>
                        </View>

                        <View style={{flex: 1}}>
                            <Text>todo: losers</Text>
                        </View>

                        <View style={{flex: 1}}>
                            <Text>todo: active</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
