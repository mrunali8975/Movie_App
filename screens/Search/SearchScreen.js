import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {SearchfetchData} from '../../utils/api/ApiIntegration';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import {Rating, AirbnbRating} from 'react-native-ratings';
import { styles } from './SearchScreenStyle';
const SearchScreen = ({navigation}) => {
  const [input, setInput] = useState('');
  const [searchTimer, setSearchTimer] = useState(null);
  const [results, setResults] = useState([]);
  const [erro, setError] = useState('Search the movies')
  const [loading,setIsLoading]=useState(false)
  React.useEffect(() => {
    // Searchbar in header
    navigation.setOptions({
      headerTitle: (props = () => (
        <Searchbar
          placeholder="Search Movie.."
          placeholderTextColor={'white'}
          style={styles.searchStyle}
          inputStyle={{color:'white'}}
          iconColor={'white'}
          onChangeText={text => {
            if (searchTimer) {
              clearTimeout(searchTimer);
            }
            setInput(text);
            setIsLoading(true)
            setSearchTimer(
              setTimeout(() => {
                // Search Api called
                SearchfetchData(text)
                  .then(item => {
                    setResults(item);
                    if (item.length === 0)
                    {
                      setError('No result Found')
                      }
                  })
                  .catch(er => {
                    setError('No result Found')
                    console.log('error', er);
                  });
              }, 500),
            );
          }}
          value={input}
        />
      )),
    });
  }, [navigation, input,erro]);
  return (
    // Main container
    <View style={styles.container}>
      {
        loading && results.length!=0 ?
        <FlatList
        data={results}
        renderItem={({item}) => {
          return (
            <View
              style={styles.searchContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailsScreen',{item:item})}>
                <View
                  style={styles.imageTitleView}>
                  <View>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                      }}
                      style={styles.image}
                    />
                  </View>
                  <View>
                    <Text
                      style={styles.titleText}
                      numberOfLines={2}>
                      {item.title}
                    </Text>
                    <Text
                      style={styles.overViewText}
                      numberOfLines={2}>
                      {item.overview}
                    </Text>
                              <Rating
                                  type='custom'
                                  ratingCount={10}
                                  unSelectedColor='#0E5E6F'
                                  imageSize={13}
                                  readonly={true}
                                  ratingBackgroundColor='#D6E4E5'
                                  startingValue={item.vote_average}
                                  style={styles.rating}
                                  tintColor='black'
                      />
                     
                    
                  </View>
                </View>
                
              </TouchableOpacity>
            </View>
          );
        }}
          /> :
          <Text style={styles.errorText}>{ erro}</Text>
      }

    </View>
  );
};
export default SearchScreen;
