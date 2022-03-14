import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
    align-items: center;
    background-color: #2F48D4;
    flex: 1;
    justify-content: center;
`;

export const SearchArea = styled.View`
    align-items: center;
`;

export const Animation = styled(Animatable.View)``;

export const Title = styled.Text`
    color: #F6E125;
    font-family: Roboto_500Medium;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    border-radius: 5px;
    color: #2F48D4;
    font-family: Roboto_500Medium;
    font-size: 16px;
    height: 40px;
    margin-top: 20px;
    padding: 8px;
    text-align: center;
    width: 300px;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    background-color: #F6E125;
    border-color: #F6E125;
    border-radius: 5px;
    border-width: 1px;
    height: 40px;
    margin-top: 20px;
    padding: 8px;
    width: 300px;
`;

export const ButtonText = styled.Text`
    color: #2F48D4;
    font-family: Roboto_500Medium;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const AddressArea = styled.View`
    align-items: center;
    margin-top: 15px;
`;

export const Text = styled.Text`
    color: #F6E125;
    font-family: Roboto_500Medium;
    font-size: 18px;
`;