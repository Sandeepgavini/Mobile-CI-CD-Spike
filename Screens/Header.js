import { View, SafeAreaView, Image, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView style = {{flex:1,flexDirection:'row',padding:20}}>
   
  
      <Text style={{flex:1,width:163,height:24,fontFamily:'Ubuntu',fontStyle:'normal',color:'#181F2C'}}>Let's organize your Day...</Text>
      <View style = {{flex:1,alignItems:'center'}}>
      <Image
          source={{
          uri: 'https://reactjs.org/logo-og.png',
        }}
        style={{width: 25, height: 25}}
      />
  </View>
   <View style = {{flex:1}}>
      <Image
          source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 25, height: 25}}
      />
  </View>
 </SafeAreaView>
  )
}

export default Header