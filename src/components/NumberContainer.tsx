import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

const NumberContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
  },
})
