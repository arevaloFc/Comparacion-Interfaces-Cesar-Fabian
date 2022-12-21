import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import MenuBar from './components/MenuBar';
export default function App() {

  const [select, setSelect] = useState("")
  useEffect(()=>{
    console.log(select)
  },[select])
  const opcion = () =>{
    
    switch(select){
      case"Model":
        return(<Text style={styles.textOption}>ha elegido Models</Text>)

      case"Camera":
        return(<Text style={styles.textOption}>ha elegido Camera</Text>)

      case"Access":
        return(<Text style={styles.textOption}>ha elegido Access</Text>)
     
      
      case"Assistance":
        return(<Text style={styles.textOption}>ha elegido Drive Assistance</Text>)
      

      case"Valet":
        return(<Text style={styles.textOption}>ha elegido Valet</Text>)
      
    }
    
  }
  return (
    <View style={styles.container}>
      <MenuBar select={select} setSelect={setSelect}/>
      <View style={styles.containerOption}>
        {opcion()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#484848',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height:"100%",
    width:"100%"
  },
  containerOption:{
    height:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  textOption:{
    color:"white"
  }
});
