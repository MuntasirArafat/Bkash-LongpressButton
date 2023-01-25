import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Hearder = () => {
  return (
    <View style={styles.card}>
       <Ionicons name="close-outline" size={32} color="#ed2c7f" style={styles.close} />
      <Text style={styles.title}><Text style={styles.bold}>সেন্ড মানি</Text> নিশ্চিত করুন</Text>
    
     <View style={styles.contact}> 
     <Ionicons name="person-circle-outline" size={50} color="#e6e6e6" />
    <View>
     <Text style={styles.numberbold}>01760494905</Text>
     <Text style={styles.numberbold1}>01760494905</Text>
   </View>
     </View>
    
    <View style={styles.line}></View>
    
    <View style={styles.amount}>
     <View>
        <Text style={{marginTop:10, color:'#a6a6a6',}}>সর্বমোট</Text>
        <Text style={{fontWeight:'bold', color:"#666666"}}>৳100</Text>
        <Text style={{ color:'#a6a6a6',}}>+ চার্জ প্রযোজ্য নয়</Text>

     </View>
        <View style={styles.line1}></View>
        <View style={{marginLeft:20,}}>
        <Text style={{marginTop:10, color:'#a6a6a6',}}>নতুন ব্যালেন্স</Text>
        <Text style={{fontWeight:'bold',color:"#666666",}}>৳100</Text>
      
       
     </View>

    </View>
    <View style={styles.line}></View>
    
    <View style={styles.amount}>
     <View>
        <Text style={{marginTop:10, color:'#a6a6a6', width:105,}}>রেফারেন্স
</Text>
        

     </View>
        <View style={styles.line1}></View>
    </View>
    
    <View style={styles.line}></View>


    </View>

    
  )
}

export default Hearder

const styles = StyleSheet.create({

    card:{
        backgroundColor:"#fff",
        width:'90%',
        paddingTop:15,
    },

    close:{
       left:270,
       top:-15,
    },

    title:{
      fontSize:20,
      color:'#ed2c7f',
      fontWeight:'400',
    },

    numberbold:{
        fontWeight:"bold",
        marginHorizontal:3,
        color:"#737373",
        
    },


    bold:{
        fontWeight:"bold",
        marginHorizontal:3,
        color:"#ed2c7f",
        
    },
    numberbold1:{
        fontWeight:"400",
        marginHorizontal:3,
        fontSize:12,
        color:"#737373",
        
    },

    contact:{
        marginTop:20,
        width:"70%",
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
    },

    line:{
        height:1,
        backgroundColor:'#e6e6e6',
        marginTop:0,
        width:"90%",
        
    
    },

    amount:{
     flexDirection:"row",
    },

    line1:{
       width:1,
       backgroundColor:'#e6e6e6',
       margin:0,
       height:90,
       marginLeft:10,
    }
})