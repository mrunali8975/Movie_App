import { StyleSheet } from "react-native";  
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    avtarImage:
    {
        margin: 30
    },
    userNameText:
    {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase'
    },
    phoneEmailText:
    {
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 15,
        textTransform: 'uppercase',
        marginTop: 10
    },
    footerView:
    {
        position: 'absolute',
        backgroundColor: '#2B2B2B',
        left: 0,
        right: 0,
        bottom: 0,
        // top:0,
        width: '100%',
        height: '7%',
        // opacity:0.7,
        alignItems: 'center',
        justifyContent: 'center',
      }

})