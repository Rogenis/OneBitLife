import React from 'react';
import { View , StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

export function LifeStatus() {
  /*Status:
   100 - Máximo
   50 - Médio
   25 - baixo
   00 - Curto (Acabou o game)
   No robô, nós temos primeiros Felicidade e depois a Saúde xx-xx
  */
  return (
    <View style={styles.container}>
      <Lottie
        style={styles.animationEducation}
        source={require('../../../assets/education/education-100.json')} 
        autoPlay
        loop 
      />
      <Lottie
        style={styles.animationMoney}
        source={require('../../../assets/money/money-100.json')} 
        autoPlay
        loop 
      />
      <Lottie
        style={styles.animationRobot}
        source={require('../../../assets/robot/robot-100-100.json')} 
        autoPlay
        loop 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  animationRobot: {
    width: 190,
    marginTop: 30,
    marginLeft: 25,
  },
  animationEducation: {
    width: 100,
    marginTop: 50,
    marginLeft: 5,
    position: "absolute",
  },
  animationMoney: {
    width: 100,
    position: "absolute",
    marginTop: 50,
    marginLeft: 95,
  },
});