import React, { useState } from 'react';
import { Alert, Image } from 'react-native';

import {
    Container,
    SearchArea,
    Animation,
    Title,
    Input,
    Button,
    ButtonText,
    AdressArea,
    Text
} from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';

export default function Home() {
    const [cep, setCep] = useState('');
    const [adress, setAdress] = useState(null);

    async function handleBuscar() {

        try {
            const { status, data } = await api.get(`${cep}/json/`);

            if (status !== 200) {
                Alert.alert('CEP Inválido', 'Digite um CEP válido');
            } else {
                setAdress(data);
            }

        } catch (error) {
            Alert.alert('CEP Inválido', 'Digite um CEP válido');
        }

    };

    async function handleLimpar() {
        setAdress(null);
        setCep('');
    }

    return (
        <Container>
            <SearchArea>
                <Animation 
                    animation='bounceInDown'
                    duration={1500}
                >
                    <Image source={logo} />

                    <Title>Busca CEP</Title>
                </Animation>

                <Animation 
                    animation='bounceInRight'
                    duration={1500}    
                >
                    {adress === null &&
                        <Input
                            keyboardType="numeric"
                            maxLength={8}
                            onChangeText={setCep}
                            onSubmitEditing={handleBuscar}
                            placeholder="Digite o CEP que deseja buscar"
                            placeholderTextColor="#2F48D4"
                            value={cep}
                        />
                    }

                    <Button
                        activityOpacity={0.7}
                        onPress={adress !== null ? handleLimpar : handleBuscar}>
                        <ButtonText>{adress !== null ? 'Limpar' : 'Buscar'}</ButtonText>
                    </Button>
                </Animation>
            </SearchArea>

            {adress !== null &&
                <AdressArea>
                    <Text>CEP: {cep}</Text>
                    <Text>{adress.logradouro}</Text>
                    <Text>Bairro: {adress.bairro}</Text>
                    <Text>Cidade: {adress.localidade}</Text>
                    <Text>IBGE: {adress.ibge}</Text>
                    <Text>DDD: {adress.ddd}</Text>
                    <Text>UF: {adress.uf}</Text>
                </AdressArea>
            }
        </Container>
    );
}