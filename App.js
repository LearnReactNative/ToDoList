import { Text, View } from 'react-native'
import React from 'react'
import appStyles from "./Style/AppStyle";
import Header from './Components/header';
import Main from './Components/main';
import Footer from './Components/footer';

export default function App() {
  return (
    <View style={appStyles.container}>
      <Header />
      <Main />
      <Footer />
    </View>
  )
}

