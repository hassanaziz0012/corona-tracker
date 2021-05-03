import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

function ListItem({ title, subTitle, icon, iconSize, onPress, color, style }) {
	return (
		<TouchableOpacity style={[styles.container, { style }]} onPress={onPress}>
			<Icon
				name={icon}
				size={iconSize}
				style={{ marginRight: 10 }}
				color={color}
			/>
			<View style={styles.titles}>
				<Text style={styles.text}>{title}</Text>
				{subTitle ? <Text style={styles.subTitle}>{subTitle}</Text> : null}
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	text: {
		fontSize: 18,
		fontWeight: "500",
	},
    titles: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "90%",
        marginRight: 10
    }
});

export default ListItem;
