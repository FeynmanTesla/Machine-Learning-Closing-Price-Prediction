import {Button, ScrollView, Text, View} from "react-native";
import React from "react";
import {MAIN_CONTENT_MENU_ITEM_ENUM} from "./MainContentContainer";

export class MainContentMenu extends React.Component<{menuItem: MAIN_CONTENT_MENU_ITEM_ENUM, setMenu: (menuItem: MAIN_CONTENT_MENU_ITEM_ENUM) => void}, {}> {
    render() {
        return (
            <ScrollView horizontal={true} style={{padding: 2, margin: 2}} showsHorizontalScrollIndicator={false}>
                <Text onPress={() => this.props.setMenu(MAIN_CONTENT_MENU_ITEM_ENUM.Watchlist)} style={{margin: 2}}>Watchlist</Text>
                <Text onPress={() => this.props.setMenu(MAIN_CONTENT_MENU_ITEM_ENUM.Indices)} style={{margin: 2}}>Indices</Text>
                <Text onPress={() => this.props.setMenu(MAIN_CONTENT_MENU_ITEM_ENUM.Cryptocurrencies)} style={{margin: 2}}>Cryptocurrencies</Text>
                <Text onPress={() => this.props.setMenu(MAIN_CONTENT_MENU_ITEM_ENUM.Stocks)} style={{margin: 2}}>Stocks</Text>
                <Text onPress={() => this.props.setMenu(MAIN_CONTENT_MENU_ITEM_ENUM.Commodities)} style={{margin: 2}}>Commodities</Text>
                <Text onPress={() => this.props.setMenu(MAIN_CONTENT_MENU_ITEM_ENUM.Currencies)} style={{margin: 2}}>Currencies</Text>
                <Text onPress={() => this.props.setMenu(MAIN_CONTENT_MENU_ITEM_ENUM.Bonds)} style={{margin: 2}}>Bonds</Text>
                <Text onPress={() => this.props.setMenu(MAIN_CONTENT_MENU_ITEM_ENUM.Funds)} style={{margin: 2}}>Funds</Text>
                <Text onPress={() => this.props.setMenu(MAIN_CONTENT_MENU_ITEM_ENUM.Indicators)} style={{margin: 2}}>Indicators</Text>
                <Text onPress={() => this.props.setMenu(MAIN_CONTENT_MENU_ITEM_ENUM.Futures)} style={{margin: 2}}>Futures</Text>
                <Text onPress={() => this.props.setMenu(MAIN_CONTENT_MENU_ITEM_ENUM.Derivatives)} style={{margin: 2}}>Derivatives</Text>
            </ScrollView>
        );
    }
}
