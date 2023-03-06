import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ApiRequest = () => {
  const [response, setResponse] = React.useState();

  const request = React.useCallback(async () => {
    const result = await fetch('http://10.9.3.70:5000/api/BookStore').then(res => res.json());
    console.log(result);
    setResponse(result);
  }, []);
  React.useEffect(() => {
    request();
  }, [request])
  return (
    <TouchableOpacity
      onPress={() => console.log(response)}
    >
      <Text>App</Text>
    </TouchableOpacity>
  )
}

export default ApiRequest