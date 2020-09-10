import {View} from "react-native";
import React from "react";
import {MainContentRenderer} from "./MainContentRenderer";
import {MainContentMenu} from "./MainContentMenu";
export enum MAIN_CONTENT_MENU_ITEM_ENUM {Watchlist, Stocks, Indices, Commodities, Currencies, Bonds, Cryptocurrencies, Funds, Indicators, Futures, Derivatives}
type MAIN_CONTENT_STATE_TYPE = {menuItem: MAIN_CONTENT_MENU_ITEM_ENUM};

export class MainContentContainer extends React.Component<{}, MAIN_CONTENT_STATE_TYPE> {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1}}>
                    <MainContentMenu menuItem={this.state.menuItem}
                                     setMenu={(menuItem: MAIN_CONTENT_MENU_ITEM_ENUM) => this.setMenuItem(menuItem)} />
                </View>

                <View style={{flex: 14}}>
                    <MainContentRenderer menuItem={this.state.menuItem} />
                </View>
            </View>
        );
    }

    private setMenuItem(newMenuItem: MAIN_CONTENT_MENU_ITEM_ENUM) : void {
        this.setState({menuItem: newMenuItem});
    }

    constructor(props: {}) {
        super(props);
        this.state = {menuItem: MAIN_CONTENT_MENU_ITEM_ENUM.Watchlist} as MAIN_CONTENT_STATE_TYPE;
    }
}
