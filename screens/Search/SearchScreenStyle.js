import { StyleSheet,Dimensions } from "react-native";
export const styles = StyleSheet.create({
    container:
        { backgroundColor: 'black', flex: 1 },
    searchContainer:
    {
        flex: 1,
        margin: 5,
        borderColor: '#555555',
        borderWidth: 2,
        borderRadius: 10,
    },
    imageTitleView:
    {
        flexDirection: 'row',
        // marginBottom: 0,
        margin:10
    },
    image:
    {
        height:100,
        width: 100,
       
    },
    titleText:
    {
        fontSize: 12,
        fontWeight: 'bold',
        width: Dimensions.get('screen').width / 2,
        margin: 7,
        textTransform:'uppercase',
        color: 'white',
    },
    overViewText:
    {
        fontSize: 12,
        width: Dimensions.get('screen').width / 2,
        marginLeft: 7,
        opacity:0.6,
        color: 'white',
    },
    errorText:
    {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 15,
        textTransform:'uppercase'
    },
    searchStyle:
    {
        height: 40,
        width: '90%',
        backgroundColor: '#A6A9B6',
        color: 'white',
        tintColor:'white'
      },
        
    rating:
    {
        alignItems: 'flex-start',
        padding: 7,
        elevation: 5,
        shadowColor: 'red',
        shadowOpacity: 0.1
    },
    
})