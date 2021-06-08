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


  

export default function FirstScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [ModalVisible, setModalVisible] = useState(false);
  const [district, setDistrict] = useState("GHMC");
  const [mandal, setmandal] = useState("");
  const [filter, setfilter] = useState('')

  function Districts(){
      return(
        <Picker selectedValue={district}
        label="District"
        style={{height: 50, width: 280}}
        onValueChange={(itemValue, itemIndex) => {
          setmandal('');
          setDistrict(itemValue);
        }}>
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
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
      
    <View style={styles.container}>
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
  }}
  statusBarTranslucent={true}
  style={{borderRadius:20, overflow:'hidden',bottom:3}}>
  <View
    style={{
      height: '40%',
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
      <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%', paddingHorizontal:50, top:10}}>
      <TouchableOpacity style={[styles.addFilters,{backgroundColor:"#FFA07A"}]} onPress={() => {
        setModalVisible(!ModalVisible);
      }}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Cancel</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.addFilters} onPress={() => {
        setModalVisible(!ModalVisible);
      }}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Apply Filters</Text>
    </TouchableOpacity>
    </View>
    </View>
  </View>
</Modal>
      </View>
      <ScrollView style={{marginTop:60,width:'100%'}} contentContainerStyle={{alignItems:'center', justifyContent: 'center' }}>
      <HospitalCard oxy='20'/>
      <HospitalCard/>
      <HospitalCard/>
      <HospitalCard/>
      <HospitalCard/>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
    addFilters:{
        width:'45%',
        height: 45,
        backgroundColor:'#64B6AC',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    marginTop:StatusBar.currentHeight,
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
