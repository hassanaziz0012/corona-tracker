import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Platform, StatusBar } from 'react-native';
import Title from "../components/Title";
import Titlebar from "../components/Titlebar";
import ListItem from "../components/ListItem";
import ListSeparator from "../components/ListSeparator";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
// import NavigationBar from '../components/NavigationBar';

function OverviewScreen({ navigation }) {
	const [totalCases, setTotalCases] = useState("Loading...");
	const [deaths, setDeaths] = useState("Loading...");
	const [recovered, setRecovered] = useState("Loading...");
	const [currentlyInfectedPatients, setCurrentlyInfectedPatients] = useState("Loading...");
	const [inMildCondition, setInMildCondition] = useState("Loading...");
	const [severeOrCritical, setSevereOrCritical] = useState("Loading...");
	const [closedCases, setClosedCases] = useState("Loading...");

	let overviewData = [
		{
			type: "Total Cases",
			data: totalCases,
		},

		{
			type: "Deaths",
			data: deaths,
		},

		{
			type: "Recovered",
			data: recovered,
		},
	];

	let activeCasesData = [
		{
			dataTitle: "Currently infected patients",
			dataValue: currentlyInfectedPatients,
		},

		{
			dataTitle: "In Mild Condition",
			dataValue: inMildCondition,
		},

		{
			dataTitle: "Severe or Critical",
			dataValue: severeOrCritical,
		},
	];

	let closedCasesData = [
		{
			dataTitle: "Cases that have been closed",
			dataValue: closedCases,
		},

		{
			dataTitle: "Recovered",
			dataValue: recovered,
		},

		{
			dataTitle: "Deaths",
			dataValue: deaths,
		},
	];

	getOverviewData = () => {
		fetch("https://coronatrackerserver.herokuapp.com/get_overview")
			.then((res) => res.json())
			.then((data) => RenderData(data));
	};

	RenderData = (data) => {
		setTotalCases(data.total_cases);
        setDeaths(data.deaths);
        setRecovered(data.recovered);
        setCurrentlyInfectedPatients(data.currently_infected_patients);
        setInMildCondition(data.in_mild_condition);
        setSevereOrCritical(data.severe_or_critical);
        setClosedCases(data.closed_cases);
	};

	useEffect(() => getOverviewData());

	return (
		<View style={styles.container}>

			<View style={styles.titleArea}>
				<Title
					title="Coronavirus Tracker"
					size={25}
					style={{ marginBottom: 30 }}
				/>
				<AppButton title="Refresh" onPress={() => getOverviewData()} />
			</View>

			<FlatList
				data={overviewData}
				keyExtractor={(key) => key.type}
				renderItem={({ item }) => {
					return (
						<ListItem
							title={item.type}
							subTitle={item.data}
							onPress={() => console.log(item)}
						/>
					);
				}}
				ItemSeparatorComponent={ListSeparator}
                // refreshing={true}
                // onRefresh={() => console.log("Data Refreshed...")}
				style={{ flexGrow: 0, marginBottom: 15 }}
			/>
			<Card cardTitle="Active Cases" cardData={activeCasesData} />
			<Card cardTitle="Closed Cases" cardData={closedCasesData} />

			{/* <NavigationBar /> */}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
	titleArea: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginRight: 15,
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight+20 : 0,
	}
});

export default OverviewScreen;
