import React, {PureComponent} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../Styles/resultsGridItemStyle';

class ResultGridItem extends PureComponent {
    render(){
        return(
            <View style={styles.gridItemContainer}>
                <Image source={{uri:this.props.item.Poster}}
                    style={styles.gridItemImage}/>
                    <Text style={styles.gridItemTitle}>{this.props.item.Title}</Text>
                    <Text>{this.props.item.Year}</Text>
            </View>
        )
    }
}

export default ResultGridItem