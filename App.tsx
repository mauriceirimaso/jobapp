import { StatusBar } from 'expo-status-bar';
import React from "react";

import {
  SafeAreaView,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';

import styles from './src/style';
const upper =require('./assets/userphotoes/upper.png');
const google =require('./assets/userphotoes/google.png');
const message =require('./assets/userphotoes/message.png');

import Icon from 'react-native-vector-icons/Feather';
import { StackNavigationProp } from '@react-navigation/stack';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 

import Jobs from './src/Jobs';

const Stack = createStackNavigator();

type RootStackParamList = {
  Main: undefined;
  
  Jobs: undefined;
  
};

type MainscreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

 

const App = () => {
  return (
    <>
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Main">
         <Stack.Screen name="Main" component={Mainscreen} options={{ headerShown: false }} />
         <Stack.Screen name="Jobs" component={Jobs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
     </>
  )
}
export default App;

   

interface MainscreenProps {
  navigation: MainscreenNavigationProp;
}

   function Mainscreen({ navigation }: MainscreenProps)
    {
      return(
        <>
     <View style={styles.grandview}> 
       <View style={styles.upperview}>
          <Image source={upper} style={styles.upperphoto}/>
       </View>
       <View style={styles.crossview}>
          <View style={styles.inner}>
            <Image source={google} style={{width:'110%',height:'110%',borderRadius:50}}>

            </Image>
          </View>
       </View>
       <View style={styles.lowerheading}>
           <Text style={styles.header}>Product Designer</Text>
       </View>
       <View style={styles.lowerheading}>
           <Text style={styles.headerp}>California,Usa</Text> 
       </View>
       <View style={styles.navbar}>
             <TouchableOpacity style={styles.navlink_active}>
                <Text style={styles.activetext}>description</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.navlink}>
                <Text>Company</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.navlink}>
                <Text>Applicant</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.navlink}>
                  <Text>Salary</Text>
             </TouchableOpacity>
       </View>
       <View style={styles.lower_heading}>
              <Text style={{fontWeight:'900',fontSize:18}}>Job Responsibilities</Text>
       </View>
       <View style={styles.lower_details}>
           <View style={styles.list}>
               <View style={styles.dot}/>
               <View style={styles.nexttext}>
                    <Text style={{ fontSize: 16,margin:0,color:'rgba(94, 89, 89, 0.625)' }}>Deliver well crafted design that follows standard for consistency in quality and experience</Text>
               </View>
           </View>
           <View style={styles.list}>
               <View style={styles.dot}/>
               <View style={styles.nexttext}>
                    <Text style={{ fontSize: 16,margin:0,color:'rgba(94, 89, 89, 0.625)' }}>Design Creative solutions that deliver not only value customer but also solve business objectives </Text>
               </View>
           </View>
           <View style={styles.list}>
               <View style={styles.dot}/>
               <View style={styles.nexttext}>
                    <Text style={{ fontSize: 16,margin:0,color:'rgba(94, 89, 89, 0.625)' }}>You are also required to contribute to the design and critics conceptual discussion and also maintaining consistency of design systems</Text>
               </View>
           </View>

       </View>
       <View style={styles.lower_heading}>
              <Text style={{fontWeight:'900',fontSize:18}}>Skills Needed</Text>
       </View>
       <View style={styles.lower_skills}>
          <Text>Lead</Text> 
            <Text style={{fontWeight:'900'}}>.</Text><Text>UX design </Text>
            <Text style={{fontWeight:'900'}}>.</Text> <Text>problem solving </Text>
            <Text  style={{fontWeight:'900'}}>.</Text> <Text>critical</Text>
       </View>

       <View style={styles.skills}>
            <TouchableOpacity style={styles.apply} onPress={() => navigation.navigate('Jobs')}> 
                <Text style={{color:'white',fontSize:15,fontWeight:900}}>Apply Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyicon}>
                        <Icon name="mail" size={30} color="white" />
            </TouchableOpacity>
       </View>
     </View>
   </>
  );
}



