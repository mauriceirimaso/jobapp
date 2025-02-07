
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
import React from 'react'
import styles from '../src/Jobscss';
const pinterest =require('../assets/userphotoes/pinterest.png');
const pin =require('../assets/userphotoes/pin.png');


interface JobpartProps {
  heading: any;
  icon:any;
  description:any;
  amount:any;
}

const Jobpart = (props: JobpartProps) => {
  return (
    <View style={styles.job_view}>
        <View style={styles.upper_cont}>
            <View style={styles.first_emoji}>
               <Image source={props.icon} style={{height:'60%',width:'60%'}}/>
            </View>
            <View style={styles.middledescript}>
                <Text style={{fontSize:23,fontWeight:'900'}}>{props.heading}</Text>
                <Text style={{fontSize:16,fontWeight:'900',color:'rgba(171, 171, 181, 0.95)'}}>California ,USA</Text>
            </View>
            <View style={styles.first_emoji}>
               <Image source={pin} style={{height:'60%',width:'60%'}}/>
            </View>
        </View>
        <View style={styles.upper_cont2}>
              <Text style={{fontSize:23,fontWeight:'600'}}>{props.description}</Text>

        <View style={{display:'flex',flexDirection:'row',marginTop:'0.3%'}}>
                <Text style={{fontSize:16}}>Senior</Text>
                <Text style={{fontWeight:'900',marginLeft:'3%',marginRight:'3%',fontSize:16}}>.</Text>
                <Text  style={{fontSize:16}}>Fulltime</Text>
                <Text style={{fontWeight:'900',marginLeft:'3%',marginRight:'3%',fontSize:16}}>.</Text>
                <Text  style={{fontSize:16}}>Remote</Text>
        </View>
              

        </View>
        <View style={styles.upper_cont3}>
              <TouchableOpacity style={styles.apply}>
                <Text style={{color:'white',fontSize:16,fontWeight:'800'}}>Apply Now</Text>
              </TouchableOpacity>
              <View style={styles.apply2}>
                  <Text style={{fontWeight:'900',fontSize:23}}>{props.amount}/</Text>
                  <Text style={{fontSize:17}}>Month</Text>
              </View>
        </View>
    </View>
    
  )
}
export default Jobpart

