import React, {Component} from 'react';
import {Button, Text, View, FlatList, ActivityIndicator} from 'react-native';
import ResultsGridItem from './ResultGridItem';
import searchService from '../Services/SearchService';
import styles from '../Styles/resultsGridStyle';
import {performSearch, PERFORM_SEARCH, ADD_SEARCH} from '../Redux/Reducer';
import { connect } from 'react-redux';

const mapDispatchToProps = {
    performSearch
};

const mapStateToProps = state => {
    if(state.searchResults){
        let results = state.searchResults.map(item => ({key: item.imdbID, ...item }));
        return {
            searchResults: results,
            loading: state.loading
        };
    }
  };

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

        //this.nextClick = this.nextClick.bind(this);
        this.addMoreResults = this.addMoreResults.bind(this);
    }

    componentDidMount() {
        this.props.performSearch(this.state.query, 1, PERFORM_SEARCH);
    }
    
    /*
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
    }*/

    addMoreResults(){
        if(this.state.momentumScrolltoEnd){
            const newPage = this.state.page + 1;
            this.props.performSearch(this.state.query, newPage, ADD_SEARCH);
            this.setState({
                page: newPage, 
                momentumScrolltoEnd: false
            });
        }
        /*if(this.state.momentumScrolltoEnd){
            this.setState({momentumScrolltoEnd:false})
            searchService(this.state.query, newPage)
            .then((results)=>{
                const newData = this.state.data.concat(results.Search)
                this.setState({
                    page: newPage,
                    data: newData
                })
            })
        }*/
    }
    
    render() {
        const {searchResults} = this.props
        return (
          <View style={styles.resultsPageContainer}>
            <Text style={styles.resultsTextHeadLine}>Results</Text>
            <View style ={styles.resultsGridContainer}>
            <FlatList 
                data={searchResults}
                numColumns={2}
                renderItem={({item})=>{
                    return(
                    <ResultsGridItem item={item}></ResultsGridItem>
                    )
                }}
                keyExtractor={item=>item.key}
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
            <ActivityIndicator size="large" color="#0000ff" animating={this.props.loading}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultsComponent);