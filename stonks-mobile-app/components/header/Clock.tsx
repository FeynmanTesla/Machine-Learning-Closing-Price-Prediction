import {Text} from "react-native";
import React from "react";
enum MONTHS_ENUM {January, February, March, April, May, June, July, August, September, October, November, December}

export class Clock extends React.Component<{}, {time: Date}> {
    private timerID: number | undefined;

    private updateTime() : void {
        this.setState({time: new Date()});
    }

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {time: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return <Text style={{marginTop: 30}}>{this.getVerboseTime()}</Text>;
    }

    private getVerboseTime() : string {
        return this.getHours() + ":" + this.getMins() + ":" + this.getSecs() + " " +
            Clock.getOrdinal(this.state.time.getDate()) + " " + MONTHS_ENUM[this.state.time.getMonth()] + " " +
            this.state.time.getFullYear();
    }

    private getHours() : string {
        return Clock.padZeroes(this.state.time.getHours());
    }

    private getMins() : string {
        return Clock.padZeroes(this.state.time.getMinutes());
    }

    private getSecs() : string {
        return Clock.padZeroes(this.state.time.getSeconds());
    }

    private static padZeroes(num : number) : string {
        return num >= 10 ? num.toString() : "0" + num.toString();
    }

    private static getOrdinal(num: number) : string {
        switch (Math.round(num % 10)) {
            case 2:
                return num.toString() + "nd";
            case 3:
                return num.toString() + "rd";
            default:
                return num.toString() + "th";
        }
    }
}
