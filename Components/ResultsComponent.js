import React, {Component} from 'react';
import {Button, Text, View, FlatList} from 'react-native';
import ResultsGridItem from './ResultGridItem';
import searchService from '../Services/SearchService';
import styles from '../Styles/resultsGridStyle';

class ResultsComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            query : this.props.navigation.getParam('query',[]),
            page: 1,
            data: this.props.navigation.getParam('data',[]),
            loading: false,
            momentumScrolltoEnd: false,
        }

        this.nextClick = this.nextClick.bind(this);
        this.addMoreResults = this.addMoreResults.bind(this);
    }

    nextClick(){
        const newPage = this.state.page + 1
        searchService(this.state.query, newPage)
        .then((results)=>{
            this.setState({
                page: newPage,
                data: results.Search
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    addMoreResults(){
        const newPage = this.state.page + 1
        if(this.state.momentumScrolltoEnd){
            this.setState({momentumScrolltoEnd:false})
            searchService(this.state.query, newPage)
            .then((results)=>{
                const newData = this.state.data.concat(results.Search)
                this.setState({
                    page: newPage,
                    data: newData
                })
            })
        }
    }
    
    render() {
        return (
          <View style={styles.resultsPageContainer}>
            <Text style={styles.resultsTextHeadLine}>Results</Text>
            <View style ={styles.resultsGridContainer}>
            <FlatList 
                data={this.state.data}
                numColumns={2}
                renderItem={({item})=>{
                    return(
                    <ResultsGridItem item={item}></ResultsGridItem>
                    )
                }}
                keyExtractor={item=>item.imdbID}
                onEndReachedThreshold ={.5}
                onEndReached={()=>{
                    this.addMoreResults()
                }}
                onMomentumScrollBegin={()=>{
                    this.setState({
                        momentumScrolltoEnd: true
                    })
                }}
            />
            </View>
            <View style={styles.resultsButtonRow}>
                <Button
                    style={{}}
                    title="Prev"
                    onPress={() => this.props.navigation.navigate('Home')}
                    />
            </View>
          </View>
        );
    }
}

export default ResultsComponent;