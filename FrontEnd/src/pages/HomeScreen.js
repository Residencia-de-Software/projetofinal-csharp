import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

const HomeScreen = props => {
  const {navigate} = props.navigation;
  return (
    <View style={style.container}>
      <View style={style.row}>
        <Button title="Cadastrar" onPress={() => navigate('List')} />
      </View>
      <View style={style.row}>
        <Button onPress={() => navigate('Form')} title="Exibir" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, alignSelf: 'auto', justifyContent: 'center'},
  row: {padding: 10},
});

export default HomeScreen;
