import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:
    {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    vote_avraText:
    
        {margin: 4, color: 'white'}
    ,
    uText:
        { fontSize: 15, margin: 4, color: 'white' },
    aText:
    {
        fontWeight: 'bold',
        fontSize: 15,
        margin: 4,
        color: 'black',
    },
    overviewText:
    
        {fontSize: 15, margin: 4,color:'white'} ,
        
    date:
    {margin: 4, color: 'white'},
    hindiText:
    
        {fontWeight: 'bold', fontSize: 15, margin: 4}
        ,
    engText:
    {fontSize: 15, margin: 4, color: 'white'},
    headerTitleView:
    
        {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        padding: 5,
        marginRight: 10
          }
    ,
    headerTitleText:
        { fontWeight: 'bold', color: 'white', fontSize: 18 },
    readLessFooterText:
        { color: 'grey', },
        readMoreFooterText:
        {color: 'grey', marginTop: 5}
})