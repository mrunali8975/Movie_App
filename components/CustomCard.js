import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'

const CustomCard = (props) => {
  return (
    <View style={styles.card}>
          <View style={styles.cardContent}>
              {
                  props.children
              }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card:
    {
    borderRadius: 15,
    elevation: 5,
    backgroundColor: '#B2B2B2',
    // alignItems:'center',
    shadowOpacity: 1,
    shadowColor: '#333',
    shadowRadius: 1,
    flex: 1,
    marginHorizontal: 10,
    marginVertical:6,
    shadowOffset:
    {
      width: 1,
      height:1
    }
    }
    ,
    cardContent:
    {
      width: '100%',
    // height:'100%'  

      // marginHorizontal: 18,
      marginBottom:5,
        
    }
})
export default CustomCard