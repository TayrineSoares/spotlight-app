// This is the  first file that is run 

import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (

    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: "black" }}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </SafeAreaProvider>
    )
}
