// THIS FILE REDIRECTS THE USER TO THE FEED 
import { Redirect } from "expo-router"


export default function Index() {
  return <Redirect href="/(tabs)" />;
}