import React, { useState, useEffect } from 'react';
import { Platform,Button, Text, View, StyleSheet, StatusBar, Modal } from 'react-native';
import { Avatar, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import Dialog from 'react-native-dialog';
import * as Location from 'expo-location';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import HospitalCard from '../../Components/HospitalCard';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import {District} from '../../Components/Districts';
import Mandals from '../../Components/Mandals';
import {Filters} from '../../Components/Filters';
import { Picker } from '@react-native-picker/picker'
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import fire from '../../Config/fire'
import firebase from "firebase/app"
import { TouchableWithoutFeedback } from 'react-native';
 const db = fire.firestore()
  

export default function FirstScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [ModalVisible, setModalVisible] = useState(false);
  const [district, setDistrict] = useState("");
  const [mandal, setmandal] = useState("");
  const [filter, setfilter] = useState('')
  const [hospitals, setHospitals] = useState([])
  
  function Districts(){
      return(
        <Picker selectedValue={district}
        label="District"
        style={{height: 50, width: 280}}
        onValueChange={(itemValue, itemIndex) => {
          setmandal('');
          setDistrict(itemValue);
        }}>
        <Picker.Item value="" label="All Districts" />
        <Picker.Item value="under10km" label="Under 10 KM" />
        <Picker.Item value="GHMC" label="GHMC" />
        <Picker.Item value="Adilabad" label="Adilabad " />
        <Picker.Item value="Bhadradri Kothagudem" label="Bhadradri Kothagudem"/>
        <Picker.Item value="Jagital" label="Jagital " />
        <Picker.Item value="Jangaon" label="Jangaon " />
        <Picker.Item value="Jayashankar Bhupalapally" label="Jayashankar Bhupalapally"/>
        <Picker.Item value="Jogulamba Gadwal" label="Jogulamba Gadwal " />
        <Picker.Item value="Kamareddy" label="Kamareddy " />
        <Picker.Item value="Komaram Bheem Asifabad" label="Komaram Bheem Asifabad"/>
        <Picker.Item value="Karimnagar" label="Karimnagar " />
        <Picker.Item value="Khammam" label="Khammam " />
        <Picker.Item value="Mahbubabad" label="Mahbubabad " />
        <Picker.Item value="Mancherial" label="Mancherial " />
        <Picker.Item value="Mahbubnagar" label="Mahbubnagar " />
        <Picker.Item value="Medak" label="Medak " />
        <Picker.Item value="Medchal" label="Medchal " />
        <Picker.Item value="Mulugu" label="Mulugu " />
        <Picker.Item value="Nagarkurnool" label="Nagarkurnool " />
        <Picker.Item value="Nalgonda" label="Nalgonda " />
        <Picker.Item value="Narayanpet" label="Narayanpet " />
        <Picker.Item value="Nirmal" label="Nirmal " />
        <Picker.Item value="Nizamabad" label="Nizamabad " />
        <Picker.Item value="Pedapally" label="Pedapally " />
        <Picker.Item value="Rangareddy" label="Rangareddy " />
        <Picker.Item value="Sangareddy" label="Sangareddy " />
        <Picker.Item value="Siddipet" label="Siddipet " />
        <Picker.Item value="Suryapet" label="Suryapet " />
        <Picker.Item value="Rajanna Sircilla" label="Rajanna Sircilla " />
        <Picker.Item value="Vikarabad" label="Vikarabad " />
        <Picker.Item value="Wanaparthy" label="Wanaparthy " />
        <Picker.Item value="Warangal Rural" label="Warangal Rural " />
        <Picker.Item value="Yadadri Bhuvanagiri" label="Yadadri Bhuvanagiri " />
        <Picker.Item value="Warangal Urban" label="Warangal Urban " />
        </Picker>
      )
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
    db.collection("hospitals")
      .where("district", "==", district)
      .onSnapshot((docs) => {
          setHospitals([])
          docs.forEach((doc) => {
              setHospitals((oldArr) => [...oldArr, doc.data()])
          })
      })
  }, []);
 
    useEffect(() => {
      setHospitals([])
      if(district === "under10km")
        getNearerHospitalsDriver()
      else if (district === "") {
        fire.firestore()
        .collection("hospitals")
        .onSnapshot((docs) => {
            setHospitals([])
            docs.forEach((doc) => {
                setHospitals((oldArr) => [...oldArr, doc.data()])
            })
        })
      }
      else if (mandal === "" && district !== "") {
          if (filter.length === 0) {
              fire.firestore()
                  .collection("hospitals")
                  .where("district", "==", district)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "covaxin") {
              fire.firestore()
                  .collection("hospitals")
                  .where("district", "==", district)
                  .where("covaxin", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "covishield") {
              fire.firestore()
                  .collection("hospitals")
                  .where("district", "==", district)
                  .where("covishield", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "remedesivir") {
              fire.firestore()
                  .collection("hospitals")
                  .where("district", "==", district)
                  .where("remedesivir", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "beds") {
              fire.firestore()
                  .collection("hospitals")
                  .where("district", "==", district)
                  .where("beds.available", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "ventilators") {
              fire.firestore()
                  .collection("hospitals")
                  .where("district", "==", district)
                  .where("ventilators", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "oxygen") {
              fire.firestore()
                  .collection("hospitals")
                  .where("district", "==", district)
                  .where("oxygen.Available", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "vaccinations") {
              fire.firestore()
                  .collection("hospitals")
                  .where("district", "==", district)
                  .where("isVaccinationCenter", "==", true)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "private") {
              fire.firestore()
                  .collection("hospitals")
                  .where("district", "==", district)
                  .where("isPrivate", "==", true)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "govt") {
              fire.firestore()
                  .collection("hospitals")
                  .where("district", "==", district)
                  .where("isPrivate", "==", false)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          }
      } else if (mandal !== "") {
          if (filter.length === 0) {
              fire.firestore()
                  .collection("hospitals")
                  .where("mandal", "==", mandal)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "covaxin") {
              fire.firestore()
                  .collection("hospitals")
                  .where("mandal", "==", mandal)
                  .where("covaxin", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          }
          if (filter === "covishield") {
              fire.firestore()
                  .collection("hospitals")
                  .where("mandal", "==", mandal)
                  .where("covishield", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "remedesivir") {
              fire.firestore()
                  .collection("hospitals")
                  .where("mandal", "==", mandal)
                  .where("remedesivir", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "beds") {
              fire.firestore()
                  .collection("hospitals")
                  .where("mandal", "==", mandal)
                  .where("beds.available", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "ventilators") {
              fire.firestore()
                  .collection("hospitals")
                  .where("mandal", "==", mandal)
                  .where("ventilators", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "vaccinations") {
              fire.firestore()
                  .collection("hospitals")
                  .where("mandal", "==", mandal)
                  .where("isVaccinationCenter", "==", true)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "oxygen") {
              fire.firestore()
                  .collection("hospitals")
                  .where("mandal", "==", mandal)
                  .where("oxygen.Available", ">", 0)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "private") {
              fire.firestore()
                  .collection("hospitals")
                  .where("mandal", "==", mandal)
                  .where("isPrivate", "==", true)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          } else if (filter === "govt") {
              fire.firestore()
                  .collection("hospitals")
                  .where("mandal", "==", mandal)
                  .where("isPrivate", "==", false)
                  .onSnapshot((docs) => {
                      setHospitals([])
                      docs.forEach((doc) => {
                          setHospitals((oldArr) => [...oldArr, doc.data()])
                      })
                  })
          }
      }
  }, [district, mandal, filter])
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  
  const getRadians = (degree) => {
    const oneDeg = Math.PI / 180
    return oneDeg * degree
}
const getNearerHospitals = (
    latitude1,
    longitude1,
    latitude2,
    longitude2
) => {
    const lat1 = getRadians(latitude1)
    const lat2 = getRadians(latitude2)
    const long1 = getRadians(longitude1)
    const long2 = getRadians(longitude2)

    let dlat = lat2 - lat1
    let dlong = long2 - long1

    let ans =
        Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlong / 2), 2)
    let res = 2 * Math.asin(Math.sqrt(ans))
    const Radius = 6371
    return res * Radius
}
const getNearerHospitalsDriver = () => {
    setDistrict("under10km")
    setmandal("")
        const { latitude, longitude } = location.coords
        let latitude2, longitude2
        fire.firestore()
            .collection("hospitals")
            // .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setHospitals([])
                snapshot.forEach((doc) => {
                    if (doc.data().location) {
                        latitude2 = doc.data().location.latitude
                        longitude2 = doc.data().location.longitude
                        let dist = getNearerHospitals(
                            latitude,
                            longitude,
                            latitude2,
                            longitude2
                        )

                        if (dist <= 10) {
                            setHospitals((oldArr) => [
                                ...oldArr,
                                doc.data(),
                            ])
                        }
                    }
                })
    })
}

  return (
      
    <SafeAreaView style={styles.container}>
    <StatusBar
 backgroundColor="#02223C"
 barStyle="light-content"
/>
      <View style={{backgroundColor:'#011627',position:'absolute',top:0, width:'100%', height:60,flexDirection:"row",alignItems:'center',paddingHorizontal:10,justifyContent:'space-between'}}>
          <Text style={{fontSize:25,color:'white',}}>Covid-19 Help Desk</Text>
          <TouchableOpacity
        onPress={() => {
              setModalVisible(true);
            }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 7,
            borderRadius: 4,
          }}>
          Filters
        </Text>

      </TouchableOpacity>
      <Modal
  animationType="slide"
  transparent={true}
  visible={ModalVisible}
  onRequestClose={() => {
    console.log("shashank")
  }
  
  }
  statusBarTranslucent={true}
  style={{borderRadius:20, overflow:'hidden',bottom:3}}>
  
  <View
    style={{
      height: '50%',
      marginTop: 'auto',
      borderRadius:20,
      overflow: 'hidden',
      bottom:3
    }}>
    <View style={styles.footer}>
      <Text style={styles.headerText}>Select Filters</Text>
      <Districts></Districts>
      <Mandals district={district} mandal={mandal} setmandal={setmandal}></Mandals>
      <Filters filter={filter} setFilter={setfilter}></Filters>
      
        <TouchableOpacity style={styles.button10} onPress={getNearerHospitalsDriver}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>
            Hospitals under 10KM
          </Text>
        </TouchableOpacity>
      <TouchableOpacity style={[styles.addFilters,{backgroundColor:"#FFA07A"}]} onPress={() => {
        setModalVisible(!ModalVisible);
      }}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Close Filters</Text>
    </TouchableOpacity>
    
    </View>
  </View>
</Modal>
      </View>
      <ScrollView style={{marginTop:60,width:'100%'}} contentContainerStyle={{alignItems:'center', justifyContent: 'center' }}>
      
        {hospitals.length > 0 ? hospitals.map(hospital => {
          return <HospitalCard hospital={hospital}/>
        }) : <Text>No Hospitals Found</Text>}
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    addFilters:{
        width:'45%',
        height: 45,
        backgroundColor:'#64B6AC',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
  
    },
    button10:{
        width:'60%',
        height: 45,
        margin: 15,
        backgroundColor:'#FF3366',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',

    },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    
    backgroundColor:"#DAFFEF"
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal:10,
  },
  card:{
      width: 375,
      paddingBottom:20,
      
  },
  cardview:{
      paddingHorizontal:20,
      paddingTop:10,
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"space-between"
      
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    padding: 26,
  },
  footer: {
    flex: 1,
    backgroundColor: '#C0FDFB',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    alignItems:'center',
  },
  
});
