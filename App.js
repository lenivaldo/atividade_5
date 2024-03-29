import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

import { TextInputMask } from 'react-native-masked-text'

const App = () => {

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const salvar = () => {
    alert("Salvo com sucesso!");
  }


  return (
    <ImageBackground style={{
      width: "100%",
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center'
    }}
      source={{ uri: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?cs=srgb&dl=pexels-pixabay-40568.jpg&fm=jpg' }}>
      <Text style={{
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 12
      }}>Clínica Viver Bem</Text>

      <Text style={styles.subtitulo}>Cadastro de clientes</Text>


      <Text style={styles.texto}>Nome:</Text>
      <TextInput style={styles.entradaTexto} placeholder='Nome completo' />

      <Text style={styles.texto}>Endereço:</Text>
      <TextInput style={styles.entradaTexto} placeholder='Digite seu endereço' />

      <Text style={styles.texto}>CEP:</Text>
      <TextInputMask
        style={styles.entradaTexto} placeholder='CEP'
        type={'zip-code'}
        value={cep}
        onChangeText={(txt) => setCep(txt)}
      />

      <Text style={styles.texto}>Data de nascimento:</Text>
      <TextInputMask style={styles.entradaTexto}
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY'
        }}
        value={nascimento}
        onChangeText={(txt) => setNascimento(txt)
        }
        placeholder='DD/MM/YYYY' />

      <Text style={styles.texto}>Telefone:</Text>
      <TextInputMask style={styles.entradaTexto}

        placeholder='(XX) XXXXX-XXXX'

        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99)'
        }}

        value={telefone}
        onChangeText={(txt) => setTelefone(txt)}
      />

      <Text style={styles.texto}>E-mail:</Text>
      <TextInput style={styles.entradaTexto} placeholder='seuemail@provedor.com.br' />

      <TouchableOpacity onPress={salvar}>
        <Text style={styles.texto}>Salvar</Text>
      </TouchableOpacity>


    </ImageBackground>
  );
};



export default App;

const styles = StyleSheet.create({
  subtitulo: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12
  },
  texto: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold"
  },
  entradaTexto: {
    backgroundColor: '#C0E6F0',
    width: '90%',
    marginVertical: 10
  }
});