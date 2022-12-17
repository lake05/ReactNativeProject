import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native'
import React from 'react'

export type CardProps = {
  children: React.ReactNode
  style: StyleProp<ViewStyle>
}

const Card = (props: CardProps) => {
  return <View style={[styles.card, props.style]}>{props.children}</View>
}

export default Card

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5, // only Android
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
})
