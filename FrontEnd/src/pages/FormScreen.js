import React, {Component} from 'react';
import {View, TextInput, Text, Button, Alert} from 'react-native';
import {cadastrar} from '../service/ProdutosService';

class FormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      descricao: '',
    };
  }

  render() {
    return (
      <>
        <View>
          <View>
            <Text>Nome da Tarefa</Text>
          </View>
          <View>
            <TextInput
              value={this.state.nome}
              onChangeText={text => {
                this.setState({nome: text});
              }}
            />
          </View>
        </View>
        <View>
          <View>
            <Text>Descrição da Tarefa</Text>
          </View>
          <View>
            <TextInput
              value={this.state.descricao}
              onChangeText={text => {
                this.setState({descricao: text});
              }}
            />
          </View>
        </View>
        <View>
          <Button
            title="Cadastrar"
            onPress={() => {
              cadastrar(this.state).then(() => {
                Alert.alert(
                  'Lista de Produtos',
                  'Produto Cadastrado com sucesso!',
                  [
                    {
                      text: 'Ok',
                    },
                  ],
                  {cancelable: false},
                );
              });
              console.log(this.state);
            }}
          />
        </View>
      </>
    );
  }
}

export default FormScreen;
