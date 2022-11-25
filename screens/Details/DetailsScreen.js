import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// import ReadMore from '@fawazahmed/react-native-read-more';
import ReadMore from 'react-native-read-more-text';
import { styles } from './DetailsStyle';
const DetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  React.useEffect(() => {
    // Screen header with title
    navigation.setOptions({
      headerTitle: (props = () => (
        <View
          style={styles.headerTitleView}>
            <Text style={styles.headerTitleText}>
              {item?.title}
            </Text>
        </View>
      )),
    });
  }, [navigation]);
  // Readmore Function
  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.readMoreFooterText} onPress={handlePress}>
        Read more
      </Text>
    );
  };
// Read less function
  _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.readLessFooterText} onPress={handlePress}>
        Show less
      </Text>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Image
        resizeMode="stretch"
        style={{width: '100%', height: '80%', }}
        source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}
      />
      <View
        style={styles.container}>
        <Ionicons
          name="star"
          color="#fff"
          size={20}
          backgroundColor={'red'}
          style={{margin: 3}}
        />
        <Text style={styles.vote_avraText}>{item.vote_average}/10</Text>
        <Entypo
          name="dot-single"
          color={'white'}
          size={20}
          style={{margin: 4}}
        />
        {item.adult === false ? (
          <Text style={styles.uText}>U</Text>
        ) : (
          <Text
            style={styles.aText}>
            A
          </Text>
        )}
        <Entypo
          name="dot-single"
          color={'white'}
          size={20}
          style={{margin: 4}}
        />
        {item.original_language === 'en' ? (
          <Text style={styles.engText}>ENGLISH</Text>
        ) : (
          <Text style={styles.hindiText}>
            HINDI
          </Text>
        )}
        <Entypo
          name="dot-single"
          color={'white'}
          size={20}
          style={{margin: 4}}
        />
        <Text style={styles.date}>
          {moment(item.release_date).format('D MMM, YYYY')}
        </Text>
      </View>
      <ScrollView>
        <ReadMore
        
          numberOfLines={3}
          renderTruncatedFooter={this._renderTruncatedFooter}
          renderRevealedFooter={this._renderRevealedFooter}>
          <Text   style={styles.overviewText}>
          {item.overview}
          </Text>
        </ReadMore>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
