import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, StatusBar, TouchableNativeFeedback, Linking } from 'react-native';
import { Avatar, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import {Button} from 'react-native-elements'

function HospitalCard(props) {
  const { hospital } = props
    return (
      <Card style={styles.card} >
      <View style={styles.cardview}>
        <View>
        <Title>{hospital.name}</Title>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Area : {hospital.mandal || hospital.area}</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>District : {hospital.district}</Text>
        </View>
        <View>
            { hospital.isVaccinationCenter ? <Text style={{color:'green'}}>Vaccination Centre</Text> : null}
            {hospital.isPrivate ?
              <Text style={{ color: 'red', fontWeight: "bold" }}>Private Hospital</Text> :
              <Text style={{ color: 'green' }}>Government Hospital</Text>
          }</View>
        
      </View>
      
    <Card.Content style={{paddingTop:15}}>
      <Text>
         <Icon name="heart" type='evilicon'></Icon><Text>   Oxygen Available : {hospital.oxygen.Available}</Text>
      </Text>
      <Text>
            <Icon name="bed" type='material-community'></Icon><Text>   Beds Available : { hospital.beds.available} </Text>
      </Text>
      <Text>
            <Icon name="needle" type='material-community'></Icon><Text>  Vaccine Available : { hospital.covaxin || hospital.covishield ? <Text>Available</Text> : <Text>Unavailable </Text> } </Text>
      </Text>
      <Text>
        <Icon name="gas-cylinder" type='material-community'></Icon><Text>  Ventilator Available : {hospital.ventilators}</Text>
      </Text>
    </Card.Content>
    
    <Card.Actions>
    <View style={{justifyContent:'center'}}>
            <Button title='Navigate'  onPress={() => {
              Linking.openURL(`https://www.google.com/maps/place/${hospital.location.latitude}+${hospital.location.longitude}`)
            }}/>
    </View>  
    </Card.Actions>
  </Card>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:StatusBar.currentHeight,
      
      backgroundColor:"lightgrey"
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },
    card:{
        width: 375,
        paddingBottom:20,
        marginVertical:8,
        borderRadius:15,
        overflow: 'hidden',
    },
    cardview:{
        paddingHorizontal:20,
        paddingTop:10,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between"
        
    }
  });

export default HospitalCard
