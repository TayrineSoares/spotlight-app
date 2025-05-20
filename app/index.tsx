import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from '../styles/auth.style';

export default function Index() {
  return (
    <View style={styles.container} >

      <Text style={styles.title}> Hello </Text>

      {/* Pressable text */}
      <TouchableOpacity onPress={() => alert("you touched")}> 
        <Text>PRESS ME AAA</Text>
      </TouchableOpacity>

      {/* Image from local storage */}
      <Image 
        source={require("../assets/images/icon.png")}
        style={{ 
          width: 100, 
          height: 100
        }}
      />

      {/* Image from external font */}
      <Image 
        source={{
          uri: "https://img.freepik.com/free-vector/pink-bloom-retro-nostalgic_24877-82517.jpg"
          
        }}
        style={{ 
          width: 100, 
          height: 100, 
          resizeMode:"cover"
        }}
      />

     
    </View>
    
  );
}
