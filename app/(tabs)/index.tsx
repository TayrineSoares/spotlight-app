import { View } from "react-native";
import { styles } from '../../styles/auth.style';

// import link from expo router 
import { Link } from "expo-router";


export default function Index() {
  return (
    <View style={styles.container} >
      <Link href={"/notifications"}>Feed screen in tabs (app homepage) </Link>
     
    </View>
    
  );
}
