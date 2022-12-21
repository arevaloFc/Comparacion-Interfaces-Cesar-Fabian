import { useEffect, useState } from 'react'
import {View ,Text, StyleSheet, Image ,Pressable} from 'react-native'

const MenuBar = ({select, setSelect}) =>{

  const [color, setColor] = useState("#0294d9")

    return(
        <View style = {styles.container}>
            {
                select !== "Model"
                ? <Pressable style ={styles.boton} onPress={() => setSelect("Model")}>
                    <Image style = { styles.icon } source = { require('../assets/icono01.png') } />
                    <Text style ={styles.texto}>Drive Models</Text>
                  </Pressable >
                : <Pressable style ={{...styles.boton, backgroundColor:color}} onPress={() => setSelect("Model")}>
                    <Image style = { styles.icon } source = { require('../assets/icono01.png') } />
                    <Text style ={styles.texto}>Drive Models</Text>
                  </Pressable >
            }

            {
              select !== "Camera"
              ? <Pressable style ={styles.boton} onPress={() => setSelect("Camera")}>
                  <Image style = { styles.icon } source = { require('../assets/icono02.png') } />
                  <Text style ={styles.texto}>Camera</Text>
                </Pressable >
              : <Pressable style ={{...styles.boton, backgroundColor:color}} onPress={() => setSelect("Camera")}>
                  <Image style = { styles.icon } source = { require('../assets/icono02.png') } />
                  <Text style ={styles.texto}>Camera</Text>
                </Pressable > 
            }

            {
              select !== "Access"
              ? <Pressable style ={styles.boton} onPress={() => setSelect("Access")}>
                  <Image style = { styles.icon } source = { require('../assets/icono03.png') } />
                  <Text style ={styles.texto}>Access</Text>
                </Pressable >
              : <Pressable style ={{...styles.boton, backgroundColor:color}} onPress={() => setSelect("Access")}>
                  <Image style = { styles.icon } source = { require('../assets/icono03.png') } />
                  <Text style ={styles.texto}>Access</Text>
                </Pressable >
            }

            {
              select !== "Assistance"
              ? <Pressable style ={styles.boton} onPress={() => setSelect("Assistance")}>
                  <Image style = { styles.icon } source = { require('../assets/icono04.png') } />
                  <Text style ={styles.texto}>Drive Assistance</Text>
                </Pressable >
              : <Pressable style ={{...styles.boton, backgroundColor:color}} onPress={() => setSelect("Assistance")}>
                  <Image style = { styles.icon } source = { require('../assets/icono04.png') } />
                  <Text style ={styles.texto}>Drive Assistance</Text>
                </Pressable > 
            }

            {
              select !== "Valet"
              ? <Pressable style ={styles.boton} onPress={() => setSelect("Valet")}>
                  <Image style = { styles.icon } source = { require('../assets/icono05.png') } />
                  <Text style ={styles.texto}>Valet Mode</Text>
                </Pressable >
              : <Pressable style ={{...styles.boton, backgroundColor:color}} onPress={() => setSelect("Valet")}>
                  <Image style = { styles.icon } source = { require('../assets/icono05.png') } />
                  <Text style ={styles.texto}>Valet Mode</Text>
                </Pressable > 
            }
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        height:"100%",
        width:"30%",
        backgroundColor:"#202930",
        justifyContent:"center",
    },

    boton:{
        height:"16%",
        width:"80%",
        backgroundColor:"#3B4A5A",
        marginBottom:10,
        marginLeft:5,
        borderWidth: 1,
        borderRadius: 5
    },

    texto:{
        textAlign:"center",
        color:"#FFFFFF",
        fontWeight: "bold"
    },

    icon: {
      width: 40,
      height: 40,
      marginTop: 20,
      marginLeft: 25,
      marginBottom: 15
    },

})

export default MenuBar