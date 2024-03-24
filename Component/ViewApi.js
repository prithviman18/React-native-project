import { View, Text, Btn } from 'react-native'
import React from 'react'
import axios from 'axios'

export default function ViewApi() {
    const getAPI = () => {
        axios({
            method:"GET",
            url: "http://139.59.66.191:3016/viewProducts"
        }).then(res => console.log(res)).catch(err => console.log(err))
    }
  return (
    <View>
      <Text>ViewApi</Text>
      <Btn title="GET" press={getAPI} />
    </View>
  )
}