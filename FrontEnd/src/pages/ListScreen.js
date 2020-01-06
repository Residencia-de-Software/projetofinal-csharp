import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {listar} from '../service/ProdutosService';
import {ListItem} from 'react-native-elements';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  static navigationOptions = {
    title: 'Lista de Tarefas',
  };

  componentDidMount() {
    listar().then(res => {
      this.setState({list: res.data});
    });
  }

  render() {
    return (
      <>
        <View>
          <FlatList
            data={this.state.list}
            renderItem={({item}) => (
              <>
                <ListItem
                  checkBox={{
                    checkedIcon: 'dot-circle-o',
                    uncheckedIcon: 'circle-o',
                    checkedColor: 'red',
                  }}
                  title={item.nome}
                  subtitle={item.descricao}
                  bottomDivider
                />
              </>
            )}
          />
        </View>
      </>
    );
  }
}

export default ListScreen;
