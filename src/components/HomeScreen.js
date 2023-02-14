import React from 'react'
import { View, Image, Text, TouchableOpacity } from "react-native"
const HomeScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'cadetblue',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >

            <Image style={{ height: 50, width: 150, margin: 25 }} source={require("../../assets/exa-white-logo.png")} />

            <TouchableOpacity onPress={() => { navigation.navigate("Details") }} style={{ backgroundColor: "#0000ff", padding: 10, height: 50, borderRadius: 8, alignItems: "center", justifyContent: "center", paddingHorizontal: 25, }}>
                <Text style={{ color: "white", fontSize: 20 }} >
                    Open Details
                </Text>
            </TouchableOpacity>
            
        </View>
    );
}

export default HomeScreen;