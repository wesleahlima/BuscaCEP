import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import logo from './src/assets/logo.png';
import api from './src/services/api'

export default function App() {

  const [CEP, setCEP] = useState('');
  const [endereco, setEndereco] = useState([]);

  const buscar = () => {
    api
      .get(`${CEP}/json`)
      .then(({ data }) => {
        setEndereco(data)
      })
      .catch((error) => Alert.alert('CEP Inválido', 'Digite um CEP válido.'))
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image source={logo} />
        <Text style={styles.titulo}>Busca CEP</Text>
        <TextInput style={styles.input}
          keyboardType="number-pad"
          maxLength={8}
          onChangeText={txtCep => setCEP(txtCep)}
          placeholder="Digite o CEP que deseja buscar"
          placeholderTextColor="#fff"
        />
        <TouchableOpacity style={styles.botao}
          onPress={buscar}>
          <Text style={styles.textoBotao}>BUSCAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.enderecoView}>
        <Text style={styles.texto}>{endereco.logradouro}</Text>
        <Text style={styles.texto}>{endereco.bairro}</Text>
        <Text style={styles.texto}>{endereco.localidade}</Text>
        <Text style={styles.texto}>{endereco.uf}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    backgroundColor: '#F6E125',
    borderColor: '#F6E125',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    marginTop: 20,
    padding: 8,
    width: 300,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#2F48D4',
    flex: 1,
    paddingTop: 50,
  },
  enderecoView: {
    alignItems: 'center',
    marginTop: 30,
  },
  headerView: {
    alignItems: 'center',
  },
  input: {
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    color: '#fff',
    fontSize: 16,
    height: 40,
    marginTop: 20,
    padding: 8,
    textAlign: 'center',
    width: 300,
  },
  texto: {
    color: '#fff',
    fontSize: 20,
  },
  textoBotao: {
    color: '#2F48D4',
    fontSize: 17,
    fontWeight: 'bold',
  },
  titulo: {
    color: '#F6E125',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
