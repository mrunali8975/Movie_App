import AsyncStorage from "@react-native-async-storage/async-storage";
export const readData = async (key) => {
    try {
      // console.log("mrunali24_45mrunalihellow");
      const value = await AsyncStorage.getItem(key);
   return value!=null ? JSON.parse(value):null
     
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };