import React from 'react'
import {StyleSheet, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.screen}>
        <Header title="Guess a Number" />
        <Stack.Navigator initialRouteName="StartGame">
          <Stack.Screen name="StartGame" component={StartGameScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

export default App
