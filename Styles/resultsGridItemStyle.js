import {StyleSheet} from 'react-native'
export default styles = StyleSheet.create({
    gridItemContainer: {
        alignItems: 'center',
        alignSelf:'stretch', 
        flex:1,  
        padding:10
    },
    gridItemImage:{
        height:225, 
        width:175
    },
    gridItemTitle: {
        flexWrap:'wrap',
        fontSize: 24
    }
})