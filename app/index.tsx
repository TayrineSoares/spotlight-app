// THIS FILE REDIRECTS THE USER TO THE TABS FOLDER
import { Redirect } from "expo-router"


export default function Index() {
  return <Redirect href="/(tabs)" />;
}