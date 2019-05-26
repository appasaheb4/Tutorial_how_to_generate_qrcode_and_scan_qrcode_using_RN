
import {
    createStackNavigator
} from "react-navigation";
import HomeScreen from "../screen/HomeScreen";
import QRCodeScanScreen from "../screen/QRCodeScanScreen";
import QRCodeScreen from "../screen/QRCodeScreen";





//TODO: StackNavigator:HomeRouter
const HomeStackNavigator = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: { header: null }
        },
        QRCodeScreen: {
            screen: QRCodeScreen,
            navigationOptions: { header: null }
        },
        QRCodeScanScreen: {
            screen: QRCodeScanScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: "HomeScreen"
    }
);

export const createRootNavigator = (
    signedIn = false,
    screenName = "OnBoardingNavigator"
) => {
    return createStackNavigator(
        {
            HomeNavigator: {
                screen: HomeStackNavigator,
                navigationOptions: { header: null }
            }
        },
        {
            initialRouteName: signedIn ? "HomeNavigator" : "HomeNavigator"
        }
    );
};