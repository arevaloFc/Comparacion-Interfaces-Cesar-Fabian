import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react'
import MenuBar from './components/MenuBar';
export default function App() {

  const [ select, setSelect ] = useState("")

  useEffect(()=>{
    console.log(select)
  },[select])

  const opcion = () =>{
    
    switch(select){
      case"Model":
        return(<Image style = { styles.iconModels } source = { require('./assets/driveModels.jpg') } />)

      case"Camera":
        return(<Image style = { styles.iconCamara } source = { require('./assets/camara.jpg') } />)

      case"Access":
        return(<Image style = { styles.iconAccess } source = { require('./assets/access.jpg') } />)

      case"Assistance":
        return(<Image style = { styles.iconDrive } source = { require('./assets/drive.jpg') } />)
      
      case"Valet":
        return(<Image style = { styles.iconMode } source = { require('./assets/mode.jpg') } />)
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
    backgroundColor: '#202930',
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
  },

  iconModels: {
    width: 250,
    height: 400
  },

  iconCamara: {
    width: 250,
    height: 500
  },

  iconAccess: {
    width: 250
  },

  iconDrive: {
    width: 250,
    height: 300
  },

  iconMode: {
    width: 250,
    height: 200
  }

});
