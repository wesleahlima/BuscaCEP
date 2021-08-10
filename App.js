import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import logo from './src/assets/logo.png';

export default function App() {
  const [CEP, setCEP] = useState('');
  const [endereco, setEndereco] = useState([]);

  const buscar = () => {
    fetch(`https://viacep.com.br/ws/${CEP}/json/`)
      .then((response) => response.json())
      .then((json) => setEndereco(json))
      .catch((error) => Alert.alert(error))
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#2F48D4" barStyle="light-content"  />
        <View style={styles.headerView}>
          <Image source={logo} />
          <Text style={styles.titulo}>Busca CEP</Text>
          <TextInput style={styles.input}
            keyboardType="number-pad"
            maxLength={8}
            onChangeText={txtCep => setCEP(txtCep)}
            placeholder="Digite o CEP que deseja buscar"
            placeholderTextColor="#2F48D4"
          />
          <TouchableOpacity style={styles.botao}
            onPress={buscar}>
            <Text style={styles.textoBotao}>BUSCAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.enderecoView}>
          <Text style={styles.texto}>CEP: {endereco.cep}</Text>
          <Text style={styles.texto}>Logradouro: {endereco.logradouro}</Text>
          <Text style={styles.texto}>Complemento: {endereco.complemento}</Text>
          <Text style={styles.texto}>Bairro: {endereco.bairro}</Text>
          <Text style={styles.texto}>Localidade: {endereco.localidade}</Text>
          <Text style={styles.texto}>UF: {endereco.uf}</Text>
          <Text style={styles.texto}>IBGE: {endereco.ibge}</Text>
          <Text style={styles.texto}>GIA: {endereco.gia}</Text>
          <Text style={styles.texto}>DDD: {endereco.ddd}</Text>
          <Text style={styles.texto}>SIAFI: {endereco.siafi}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#2F48D4',
    flex: 1,
    justifyContent: 'center',
  },
  headerView: {
    alignItems: 'center',
  },
  titulo: {
    color: '#F6E125',
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    color: '#2F48D4',
    fontSize: 16,
    height: 40,
    marginTop: 20,
    padding: 8,
    textAlign: 'center',
    width: 300,
  },
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
  textoBotao: {
    color: '#2F48D4',
    fontSize: 17,
    fontWeight: 'bold',
  },
  enderecoView: {
    alignItems: 'center',
    marginTop: 30,
  },
  texto: {
    color: '#F6E125',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
