import { Button, StyleSheet, Text, Alert, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import { Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = () => {
  const [enteredvalue, setEnteredvalue] = useState<string>('')
  const [confirmed, setConfirmed] = useState<Boolean>(false)
  const [selectedNumber, setSelectedNumber] = useState<Number>()

  const numberInputHandler = (inputText: string) => {
    setEnteredvalue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredvalue('')
  }

  const confirmInputHandler = () => {
    const chooseNum = parseInt(enteredvalue)
    if (isNaN(chooseNum) || chooseNum <= 0 || chooseNum >= 99) {
      Alert.alert('Invalid number', 'Number must be between 1 and 99.', [
        { text: 'Okey', style: 'destructive', onPress: resetInputHandler },
      ])
      return
    }
    setSelectedNumber(chooseNum)

    setConfirmed(true)
    setEnteredvalue('')
  }

  let confirmOutput: React.ReactNode

  if (confirmed) {
    confirmOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        {/* <NumberContainer /> */}
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>StartGameScreen</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredvalue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.accent}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 80,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
  },
})
