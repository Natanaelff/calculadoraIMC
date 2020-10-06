import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

 

export default class App extends React.Component {

    state = {
      peso: 0,
      altura: 0,
      imc: 0,
      legenda: 'Indeterminado',
      cor: '#bdc3c7',
    };

    calcularIMC = () => {
        const resultado = 
        this.state.peso / (this.state.altura * this.state.altura);

        
          this.setState ({
            imc: Math.ceil(resultado)
          });

        if(resultado < 18.5) {
          this.setState({
            legenda: "Abaixo do Peso",
            cor: '#e74c3c',
          });
        }else if (resultado >= 18.6 && resultado < 25) {
          this.setState({
            legenda: "Peso Ideal",
            cor: '#2ecc71',
          });
        }else if (resultado >= 20 && resultado < 30) {
          this.setState({
            legenda: "Levemente Acima do Peso",
            cor: '#f1c40f',
          });
        }else if (resultado >= 30 && resultado < 35) {
          this.setState({
            legenda: "Obesidade grau I",
            cor: '#f39c12',
          });
        }else if (resultado >= 30 && resultado < 40) {
          this.setState({
            legenda: "Obesidade grau II",
            cor: '#e67e22',
          });
        }else if (resultado >= 40) {
          this.setState({
            legenda: "Obesidade grau III",
            cor: '#c0392b',
          })
        }

    }

  render () {
    return (
      <View style={styles.container}>

          <Image style={styles.img} source={require('./assets/icon1.png')}></Image>

          <Text style={styles.legenda}>SEU IMC</Text>

          <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
              <Text style={styles.resultado}>{this.state.imc}</Text>
              <Text style={styles.diagnostico}>{this.state.legenda}</Text>
          </View>

          <View style={{marginVertical: 30}}>
              <Text style={styles.text}>PESO</Text>
              <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 15, borderRadius: 10 }}
              label= "PESO"
              keyboardType= "phone-pad"
              onChangeText= {valor => {
                this.setState({
                  peso: valor.replace(',' , '.')
                });
              }}
                
              />
                <Text style={styles.text}>ALTURA</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 15, borderRadius: 10 }}
                keyboardType= "phone-pad"
                onChangeText= {valor => {
                  this.setState({
                    altura: valor.replace(',' , '.')
                  });
                }}
              />
          </View>

          <View>
            <Button onPress={this.calcularIMC} title='Calcular' />
          </View>
          
      </View>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize : 15
},

  resultado: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
},
  diagnostico: {
    textAlign: 'center',
    fontSize: 18,
},

  peso: {
    marginVertical: 10,
},

  altura: {
    marginVertical: 10,
},

  painel: {
    borderRadius: 10,
    width: 150,
    marginVertical: 10,
    padding: 8,
    alignSelf: 'center',
},
  text: {
    fontSize: 12,
    fontWeight: 'bold',
},

img: {
  height: 100,
  width: 100,
  alignSelf: "center",
},


});
