import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        alignSelf: 'stretch'
    },
    title: {
        fontSize : 25,
        textAlign : 'center'
    },
    searchContainer: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent:'center'

    },
    searchInput: {
        fontSize : 20,
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 8,
        flex:3
    },
    searchButton: {
        fontSize: 20,
        padding: 8,
        textAlign: 'center',
        backgroundColor: 'gray',
        flex: 1
    }
});