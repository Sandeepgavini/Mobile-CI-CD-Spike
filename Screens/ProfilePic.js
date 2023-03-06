import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const ProfilePic = () => {
  return (
    <View>
        <ImageBackground
            resizeMode='cover'
            style = {{width:'100%',height:'auto'}}
            spurce = {{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}}
        />
    </View>
  )
}

export default ProfilePic