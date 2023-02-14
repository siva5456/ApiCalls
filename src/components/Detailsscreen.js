import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, TouchableOpacity, ActivityIndicator } from "react-native"
import axios, { Axios } from 'axios'

const DetailsScreen = ({ navigation }) => {
    const [countries, setCountries] = useState(null)
    const [lodaing, setLodaing] = useState(false)
    const [err, setErr] = useState(null)



    // API Call With js async await

    /*   useEffect(() => {
           let data = async () => {
               // console.log("executed first");
               setLodaing(true);
               try {
                   let myData = await fetch("https://api.nationalize.io/?name=nathaniel")
                   let results = await myData.json()
                   results = results.country
                   // console.log(results);
                   // console.log("executed middle");
                   setLodaing(false);
   
                   setCountries(results)
               } catch (e) {
                   setLodaing(false);
   
                   console.log(e);
               }
               // console.log("executed last");
               setErr("data not found")
   
           }
           data()
       }, [])
    // console.log("---------------------------------------------------");

   */


    // API Call With js then and cath blcoks

   /* useEffect(() => {
        setLodaing(true);

        // console.log("executed first");
        fetch("https://api.nationalize.io/?name=nathaniel")
            .then((res) => { return res.json() })
            .then((data) => {
                setCountries(data.country)
                // ,console.log(data),console.log("middle")
                setLodaing(false);

            })
            .catch((e) => {
                console.log(e);
                setErr("data not found")

                setLodaing(false);

            })
        // console.log("executed last");
    }, [])
    // console.log("---------------------------------------------------");
    */


    // API Call With axios
    useEffect(() => {

        setLodaing(true)
        async function data() {
            try {
                const { data: { country } } = await axios.get("https://api.nationalize.io/?name=nathaniel")
                setTimeout(() => {
                    setLodaing(false)
                    setCountries(country)
                }, 2000)
                // console.log(country);
            } catch (e) {
                console.log(e);
                setErr("data not found")
            }
        }
        data()

    }, [])




    return (
        <View style={{
            flex: 1,
            backgroundColor: 'cadetblue',
            alignItems: 'center',
            justifyContent: "center",
            padding: 50,
            paddingBottom: 100,
        }}>
            {
                lodaing && <View tyle={{
                    backgroundColor: "palevioletred",
                    marginTop: 30,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <ActivityIndicator size={70} color="#0000ff" />
                </View>
            }
            {!lodaing && <>
                <FlatList
                    data={countries}
                    renderItem={({ item }) => {
                        return (
                            <View style={{
                                backgroundColor: "palevioletred", marginTop: 30, width: 250, height: 70, alignItems: "center", justifyContent: "center", borderRadius: 8, marginBottom: 0,
                            }} center >
                                <Text style={{ color: "white", fontSize: 22 }} >{item.country_id}</Text>
                                <Text style={{ color: "white", fontSize: 22 }}>{item.probability}</Text>

                            </View>
                        )
                    }}
                    keyExtracto={item => item.id}
                />
                <TouchableOpacity onPress={() => { navigation.navigate("Home") }} style={{ backgroundColor: "#0000ff", padding: 10, width: 100, height: 50, borderRadius: 8, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontSize: 20 }} >
                        Back
                    </Text>
                </TouchableOpacity>
            </>
            }

        </View>
    );
}

export default DetailsScreen;