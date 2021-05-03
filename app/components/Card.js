import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ListItem from "./ListItem";
import ListSeparator from "./ListSeparator";

function Card({ cardTitle, cardData }) {
	return (
		<View style={styles.container}>
			<Text style={styles.cardTitle}>{cardTitle}</Text>
			<FlatList
				data={cardData}
				keyExtractor={(key) => key.dataTitle}
				renderItem={({ item }) => {
					return (
						<ListItem
							title={item.dataTitle}
							subTitle={item.dataValue}
							onPress={() => console.log(item)}
                            style={{backgroundColor: 'gainsboro'}}
                            />
					);
				}}
				style={{ flexGrow: 0, marginBottom: 15 }}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
        backgroundColor: '#e1e1e1',
        borderRadius: 10,
        marginBottom: 20,
    },
	cardTitle: {
		backgroundColor: "dodgerblue",
		textAlign: "center",
		fontWeight: "700",
		fontSize: 25,
		width: "100%",
		color: "white",
		padding: 5,

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
	},
});

export default Card;
