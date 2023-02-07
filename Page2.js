import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Page2 = ({route}) => {
  
  return (
    <View style ={{
        flex: 2,
      }}>
        <View style ={{
          flex : 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={styles.text1}>Chiều rộng : {route.params.data.w}</Text>
        </View>

        <View style ={{
          flex : 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={styles.text1}>Chiều rộng : {route.params.data.h}</Text>
        </View>
      </View>
  )
}

export default Page2

const styles = StyleSheet.create({
  text1 :{
    color: 'white',
    fontSize: 20
  }
})