
import { useEffect, useState } from 'react'
import {View ,Text, StyleSheet, Image ,Pressable} from 'react-native'

const MenuBar = ({select, setSelect}) =>{

    
    const [color, setColor] = useState("#4fc3f7")


    return(
        <View style = {styles.container}>
            {
                select !== "Model"
                ? <Pressable style ={styles.boton} onPress={() => setSelect("Model")}>
                    <Image style ={styles.icon} sourse ={require('../assets/hoja.png')}></Image>
                    <Text style ={styles.texto}>Drive Models</Text>
                  </Pressable >
                : <Pressable style ={{...styles.boton, backgroundColor:color}} onPress={() => setSelect("Model")}>
                    <Image style ={styles.icon} sourse ={require('../assets/hoja.png')}></Image>
                    <Text style ={styles.texto}>Drive Models</Text>
                  </Pressable >
            }
            {
               select !== "Camera"
               ? <Pressable style ={styles.boton} onPress={() => setSelect("Camera")}>
                   <Image style ={styles.icon} sourse ={require('../assets/hoja.png')}></Image>
                   <Text style ={styles.texto}>Camera</Text>
                 </Pressable >
               : <Pressable style ={{...styles.boton, backgroundColor:color}} onPress={() => setSelect("Camera")}>
                   <Image style ={styles.icon} sourse ={require('../assets/hoja.png')}></Image>
                   <Text style ={styles.texto}>Camera</Text>
                 </Pressable > 
            }
            
            {
                select !== "Access"
                ? <Pressable style ={styles.boton} onPress={() => setSelect("Access")}>
                    <Image style ={styles.icon} sourse ={require('../assets/hoja.png')}></Image>
                    <Text style ={styles.texto}>Access</Text>
                  </Pressable >
                : <Pressable style ={{...styles.boton, backgroundColor:color}} onPress={() => setSelect("Access")}>
                    <Image style ={styles.icon} sourse ={require('../assets/hoja.png')}></Image>
                    <Text style ={styles.texto}>Access</Text>
                  </Pressable >
            }
            {
               select !== "Assistance"
               ? <Pressable style ={styles.boton} onPress={() => setSelect("Assistance")}>
                   <Image style ={styles.icon} sourse ={require('../assets/hoja.png')}></Image>
                   <Text style ={styles.texto}>Drive Assistance</Text>
                 </Pressable >
               : <Pressable style ={{...styles.boton, backgroundColor:color}} onPress={() => setSelect("Assistance")}>
                   <Image style ={styles.icon} sourse ={require('../assets/hoja.png')}></Image>
                   <Text style ={styles.texto}>Drive Assistance</Text>
                 </Pressable > 
            }
            {
               select !== "Valet"
               ? <Pressable style ={styles.boton} onPress={() => setSelect("Valet")}>
                   <Image style ={styles.icon} sourse ={require('../assets/hoja.png')}></Image>
                   <Text style ={styles.texto}>Valet Mode</Text>
                 </Pressable >
               : <Pressable style ={{...styles.boton, backgroundColor:color}} onPress={() => setSelect("Valet")}>
                   <Image style ={styles.icon} sourse ={require('../assets/hoja.png')}></Image>
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
        backgroundColor:"#484848",
        justifyContent:"center",
        
        
    },
    boton:{
        height:"14%",
        width:"80%",
        backgroundColor:"black",
        marginBottom:10,
        marginLeft:5,
        borderTopWidth:1,
        borderTopColor:"#e0e0e0",
        borderRightWidth:1,
        borderRightColor:"#9e9e9e",

        borderRadius:2
    },
    texto:{
        textAlign:"center",
        color:"#b2ebf2"
    },
    icon:{
        height:20,
        width:20
    }

})
export default MenuBar