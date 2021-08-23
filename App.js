import React, { useState } from 'react';
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import logo from './src/assets/logo.png';
import axios from 'axios';

export default function App() {
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');
  const [ibge, setIbge] = useState('');
  const [ddd, setDdd] = useState('');
  const [endereco, setEndereco] = useState([]);

  const getAdress = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.data;

      if (data.erro) {
        Alert.alert('CEP Inválido', 'Digite um CEP válido')
      } else {
        setBairro('Bairro: ');
        setLocalidade('Cidade: ');
        setUf('UF: ');
        setIbge('IBGE: ');
        setDdd('DDD: ');
        setEndereco(data);
      }
    } catch (error) {
      Alert.alert('CEP Inválido', 'Digite um CEP válido')
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2F48D4" barStyle="light-content" />
      <View style={styles.buscaContainer}>
        <Image source={logo} />
        <Text style={styles.titulo}>Busca CEP</Text>
        <TextInput style={styles.input}
          keyboardType="number-pad"
          maxLength={8}
          onChangeText={value => setCep(value)}
          placeholder="Digite o CEP que deseja buscar"
          placeholderTextColor="#2F48D4"
        />
        <TouchableOpacity
          style={styles.botao}
          onPress={getAdress}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.enderecoContainer}>
        <Text style={styles.texto}>{endereco.logradouro}</Text>
        <Text style={styles.texto}>{bairro} {endereco.bairro}</Text>
        <Text style={styles.texto}>{localidade} {endereco.localidade}</Text>
        <Text style={styles.texto}>{ibge} {endereco.ibge}</Text>
        <Text style={styles.texto}>{ddd} {endereco.ddd}</Text>
        <Text style={styles.texto}>{uf} {endereco.uf}</Text>
      </View>
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
  buscaContainer: {
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
    textTransform: 'uppercase',
  },
  enderecoContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  texto: {
    color: '#F6E125',
    fontSize: 18,
  },
});
