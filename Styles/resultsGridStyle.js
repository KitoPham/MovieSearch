import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
    resultsPageContainer: {
        alignItems: 'center', 
        flex: 1, 
        justifyContent: 'flex-start' 
    },
    resultsTextHeadline: {
        fontSize: 30,
        height: 50,  
        padding: 10, 
        textAlign:'center'
    },
    resultsGridContainer: { 
        alignContent: 'center', 
        alignSelf:'stretch',
        height: 500,
        justifyContent:'center'
    },
    resultsButtonRow: {
        flexDirection: 'row',
        justifyContent:"space-between", 
        padding: 8
    }
})