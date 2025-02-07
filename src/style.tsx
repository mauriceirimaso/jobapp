import { ImageBackground, StyleSheet } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
const styles=StyleSheet.create({

   grandview:
   {
      
      borderColor:'red',
      width:'100%',
      height:'100%',
   },
   upperview:
   {
    
    borderColor:'blue',
    width:'100%',
    height:'20%',
   },
   upperphoto:
   {
    
    borderColor:'blue',
    width:'100%',
    height:'100%',

   },
   crossview:
   {
    
    borderColor:'blue',
    width:'22%',
    height:'12%',
    borderRadius:50,
    marginLeft:'41%',
    marginTop:'-10%',
    backgroundColor:'white',
   },
   inner:
   {
    borderWidth:1,
    borderColor:'blue',
    width:'90%',
    height:'90%',
    marginLeft:'5%',
    marginTop:'5%',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    
    
    backgroundColor:'white',
   },
   lowerheading:
   {
    
    borderColor:'blue',
    width:'100%',
    height:'3%',
    justifyContent:'center',
    alignItems:'center',
    
   },
   header:
   {
        fontSize:15,
        fontWeight:800,    
   },
   headerp:
   {
       fontWeight:700,
       color:'rgba(94, 89, 89, 0.625)',
   },
   navbar:
   {
     
     borderColor:'red',
     height:'5%',
     marginTop:'4%',
     width:'90%',
     marginLeft:'5%',
     display:'flex',
     flexDirection:'row',
     
   },
   navlink:
   {
     
     borderColor:'red',
     width:'25%',
     height:'100%',
     justifyContent:'center',
     alignItems:'center'
   },
   navlink_active:
   {
     
     borderColor:'black',
     width:'25%',
     height:'100%',
     justifyContent:'center',
     alignItems:'center',
     borderBottomWidth: 3,
   },
   activetext:
   { 
       fontWeight:'800',
   },
   lower_heading:
   {
        
        borderColor:'red',
        marginTop:'3%',
        width:'90%',
        marginLeft:'5%',
        height:'4%',
        justifyContent:'center',
   },
   lower_details:
   {
         
         borderColor:'red', 
         width:'90%',
         marginLeft:'5%',
         marginTop:'2%',
         height:'30%',      
   },
   list:
   { 
         
         borderColor:'red',
         width:'100%',
         height:'33%',
         display:'flex',
         flexDirection:'row', 
   },
   dot:
   {
         
         borderColor:'black',
         backgroundColor:'black',
         marginRight:'3%',
         marginTop:'2%',
         width:'3%',
         height:'14%',
         justifyContent:'center',
         alignItems:'center',
         borderRadius:'50%',
   },
   nexttext:
   {
       
        borderColor:'red',
        flex:1,
   },
   skills:
   {
       
       borderColor:'green', 
       width:'90%',
       height:'8%',
       marginLeft:'5%',
       marginTop:'4%',
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-between',

   },
   lower_skills:
   {
       
       borderColor:'green', 
       width:'80%',
       marginLeft:'5%',
       height:'4%',
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-between'
   },
   applyicon:
   {
        width:'20%',
        height:'100%',
        backgroundColor:'blue',
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',

   },
   apply:
   {
        
        borderColor:'green', 
        width:'70%',
        backgroundColor:'blue',
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center'
   }

})
export default styles