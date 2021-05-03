import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from "react-native";
import OverviewScreen from "./app/screens/OverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<View style={styles.container}>
				<Tab.Navigator>
					<Tab.Screen name="Overview" component={OverviewScreen} options={{ tabBarLabel: () => {return null}, tabBarVisible:false }} />
				</Tab.Navigator>
			</View>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		width: '100%',
		height: '100%'
	},
});
