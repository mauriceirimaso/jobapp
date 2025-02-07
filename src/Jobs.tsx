

import React from 'react';
import styles from '../src/Jobscss';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
const pinterest1 =require('../assets/userphotoes/pinterest.png');
const google =require('../assets/userphotoes/google.png');
const pin =require('../assets/userphotoes/pin.png');
const facebook=require('../assets/userphotoes/facebook.png');
import Jobpart from './Jobpart';
import {
    SafeAreaView,
    Text,
    Image,
    View,
    ImageBackground,
    Dimensions,
    Button,
    TouchableOpacity,
    TextInput,
    ScrollView,
  } from 'react-native';

 function Jobs() {
  return (
    <>
        <View style={styles.g_view}>
          <View style={styles.upperview}>
            <View style={styles.addressview}>
                <View style={styles.firstview}>
                   <Text style={{color:'white',fontSize:18}}>Hello</Text>
                   <Text style={{color:'white',fontSize:23,fontWeight:'900'}}>Leslie Alexander</Text>
                </View>
                
                <View style={styles.secondview}>
                   <Icon name="bell" size={25} color="white" />
                   <View style={styles.reddot}></View>
                </View>

            </View>
          </View>
          <View style={styles.crossview}>
             <View style={styles.searchicon}>
                    <Icon name="search" size={25} color="black" />
             </View>
             <TextInput style={styles.searchbar}  placeholder="Search Job Company etc..."  placeholderTextColor="gray"/>

            
          </View>
          <View style={styles.topheading}>
              <Text style={{fontWeight:'600',fontSize:22}}>Recommendation</Text>
          </View>
          
          <View style={styles.recommendation}>
          <ScrollView style={{width:'100%',height:'100%'}} horizontal={true}>
             <Jobpart heading="Pinterest , inc" icon={pinterest1} description="Product Designer" amount="$7" />
             <Jobpart heading="Facebook , inc" icon={facebook} description="UI Designer" amount="$10" />
             
          </ScrollView>
                 </View>
          <View style={styles.lower_h}>
               <Text style={{fontSize:19,fontWeight:'800'}}>Recent Job List</Text>
          </View>
             <View style={styles.recentjob}>
                       <View style={styles.upper_cont4}>
                         <View style={styles.first_emoji}>
                            <Image source={google} style={{height:'70%',width:'50%',borderRadius:50}}/>
                         </View>
                         <View style={styles.middledescript}>
                             <Text style={{fontSize:23,fontWeight:'900'}}>Product ,Designer.</Text>
                            <View style={{display:'flex',flexDirection:'row',borderColor:'red',marginTop:'-2%'}}>
                                            <Text style={{fontSize:16}}>Senior</Text>
                                            <Text style={{fontWeight:'900',marginLeft:'3%',marginRight:'3%',fontSize:16}}>.</Text>
                                            <Text  style={{fontSize:16}}>Fulltime</Text>
                                            <Text style={{fontWeight:'900',marginLeft:'3%',marginRight:'3%',fontSize:16}}>.</Text>
                                            <Text  style={{fontSize:16}}>Remote</Text>
                                    </View>
                         </View>
                         <View style={styles.first_emoji}>
                            <Image source={pin} style={{height:'60%',width:'60%'}}/>
                         </View>
               </View>
               <View style={styles.lowerf}>
                     <View style={styles.lowerf1}>
                         <Text style={{fontSize:22,fontWeight:'900'}}>$5/</Text>
                         <Text style={{fontSize:17}}>Month</Text>
                     </View>
                     <View style={styles.lowerf1}>
                             <Text>12 Minutes Ago</Text>
                      </View>
               </View>
          </View>
          <View style={styles.footer}>
              <TouchableOpacity style={styles.part1}>
                    <Icon name="home" size={35} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.part1}>
                    <Icon name="suitcase" size={30} color="grey" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.part1}>
                    <Icon name="heart" size={30} color="grey" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.part1}>
                   <Icon name="user" size={30} color="grey" />
              </TouchableOpacity>
          </View>
        </View>
    </>
  )
}
export default Jobs;
