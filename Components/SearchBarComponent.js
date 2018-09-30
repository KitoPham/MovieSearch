import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native'
import styles from '../Styles/searchStyle';
import searchService from '../Services/SearchService';

class SearchBarComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentText : '',
            error: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleTextOnChange(text){
        this.setState({
            currentText : text
        });
    }

    handleClick(){
        searchService(this.state.currentText)
            .then(searchResults => {
                console.log(searchResults);
                if(searchResults.Response){
                    this.props.navigation.push('Results', {query: this.state.currentText, data : searchResults.Search});
                }
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Search for a Movie</Text>
                <View style={styles.searchContainer}>
                    <TextInput style = {styles.searchInput} onChangeText = {(text) => this.handleTextOnChange(text)}></TextInput>
                    <Button title = "SEARCH" underlayColor = "white"
                        onPress={this.handleClick} style = {styles.searchButton}>
                    </Button>
                </View>
            </View>
        );
    }

}

export default SearchBarComponent;