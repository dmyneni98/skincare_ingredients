import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Main_Page_Logo from "../../assets/Main_Page_Logo.png"

const Welcome = () => {
  return (
    <View>
      <Image source={Main_Page_Logo} 
      style={{width: '100%', height: '100%'}}
      />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})