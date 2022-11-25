/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {Logout} from '../../src/action';
import {userData} from '../../src/action';
import {useSelector} from 'react-redux';
import {styles} from './HomescreeenStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  AllMovies,
  SearchfetchData,
  TrendingMovies,
} from '../../utils/api/ApiIntegration';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import CustomCard from '../../components/CustomCard';
import moment from 'moment'
import { color } from '../../utils/Colors';
const HomeScreen = ({navigation}) => {
  const data = useSelector(state => state.Reducers.data);
  const token = useSelector(state => state.Reducers.authToken);
  const [trendingData, setTrendingData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading,setLoading]=useState(true)
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: props => (
        <View>
          <FontAwesome5
            name="search"
            color={'white'}
            size={25}
            onPress={() => navigation.navigate('Search')}
          />
        </View>
      ),
      headerTitle: (props = () => (
        <View
          style={styles.headerTitleView}>
            {data ? (
              <Text style={styles.headerTitleText}>
                Hello {data?.username}
              </Text>
            ) : (
              <Text style={styles.headerTitleText}>
                Hello
              </Text>
            )}
        </View>
      )),
    });
  }, [navigation, data]);
  const dispatch = useDispatch();
  useEffect(() => {
    token ? dispatch(userData()) : null;
    TrendingMovies()
      .then(item => {
        setTrendingData(item);
      })
      .catch(error => {
        console.log('Error in treding data', error);
      });
    AllMovies()
      .then(item => {
        setAllData(item);
        console.log(allData.length);
        setLoading(false)
      })
      .catch(error => {
        console.log('error all', error);
      });
  }, [token]);
  return (
    <View style={styles.upperContainer}>
      {
        !loading ? (
          <View>
          <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>Trending Movies</Text>
          <FlatList
            horizontal
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            data={trendingData}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DetailsScreen', {item: item})
                  }>
                  <View
                    style={styles.trendingImageView}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                      }}
                      resizeMode={'cover'}
                      style={styles.trendingImage}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <Text style={styles.titleText}>Movies</Text>
          {allData.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity onPress={()=>navigation.navigate('DetailsScreen',{item:item})}>
                <CustomCard>
                  <Image
                    resizeMode="cover"
                    style={styles.cardImage}
                    source={{
                      uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                    }}
                  />
                  <View
                    style={styles.titleRatingView}>
                      <View style={styles.titleTextView}>
                      <Text
                        numberOfLines={2}
                      style={styles.cardTitleText}
                      key={index}>
                      {item.title}
                    </Text>
                      </View>
                    <View
                      style={styles.ratingView}>
                      <Text
                        style={styles.voteAverageText}>
                        {item.vote_average}
                      </Text>
                      <Ionicons
                        name="star"
                        color="white"
                        size={13}
                        backgroundColor={'red'}
                        style={{margin: 5}}
                      />
                    </View>
                  </View>
                  <View style={styles.uaTextView}>
                    {item.adult === false ? (
                      <Text style={styles.uAtext}>
                        U/A
                      </Text>
                    ) : (
                      <Text
                        style={styles.aText}>
                        A
                      </Text>
                    )}
                    {item.original_language === 'en' ? (
                      <Text style={styles.languageText}>
                        ENGLISH
                      </Text>
                    ) : (
                      <Text
                        style={styles.languageText}>
                        HINDI
                      </Text>
                    )}
                    <Text style={styles.languageText}> { moment(item.release_date).format('yyyy')} </Text>
                  </View>
                </CustomCard>
                </TouchableOpacity>
               
              </View>
            );
          })}

        </View>
      </ScrollView>
      <View
        style={styles.footerView}>
        {token !== null ? (
          <FontAwesome5
            name="user-circle"
            color={'white'}
            size={35}
            onPress={() => navigation.navigate('Profile',{user:data})}
          />
        ) : (
          <MaterialCommunityIcons
            name="login"
            color={'white'}
            size={35}
            onPress={() => navigation.navigate('Login')}
          />
        )}
      </View>
          </View>
        )
        :
          <ActivityIndicator size={45}  color={'#fff'} />
      }
   
    </View>
  );
};
export default HomeScreen;
