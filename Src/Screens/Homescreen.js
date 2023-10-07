import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity ,FlatList,Dimensions} from 'react-native';
import Homedata from '../Data/Homedata';

const TabBar = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={[styles.tabItem, activeTab === 'Popular' && styles.activeTab]}
        onPress={() => setActiveTab('Popular')}
      >
        <Text style={styles.tabText}>Popular</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabItem, activeTab === 'Latest' && styles.activeTab]}
        onPress={() => setActiveTab('Latest')}
      >
        <Text style={styles.tabText}>Latest</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabItem, activeTab === 'Following' && styles.activeTab]}
        onPress={() => setActiveTab('Following')}
      >
        <Text style={styles.tabText}>Following</Text>
      </TouchableOpacity>
    </View>
  );
};

const Homescreen = () => {
  const [activeTab, setActiveTab] = useState('Popular');

  return (
    <View style={styles.container}>
  <View style={styles.header}>
  <View 
    style={{height: 50, width: 50, borderRadius: 50, borderColor: '#49b2e9', borderWidth: 2, justifyContent: 'center', alignItems: 'center'}}
  >
    <Image source={require('../Assets/Menu.png')} style={styles.icon} />
  </View>
  <Text style={styles.headerTitle}>Activity</Text>
  <View style={styles.iconContainer}>
    <Image source={require('../Assets/search.png')} style={styles.icon} />
    <View style={{position: 'relative'}}>
      <Image source={require('../Assets/notification.png')} style={styles.icon} />
      <View style={{position: 'absolute', backgroundColor: 'red', width: 10, height: 10, borderRadius: 5, top: 0, right: 0}}></View>
    </View>
  </View>
</View>


      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
     
      {activeTab === 'Popular' && (
  <View style={styles.content}>
    <FlatList
    style={{width:'100%'}}
      data={Homedata}
      renderItem={({ item }) => (
       <View style={styles.itemContainer}>
       <View style={styles.innerContainer}>
       </View>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
           <View style={{ borderRadius: 50, overflow: 'hidden', marginRight: 10 }}>
             <Image source={require('../Assets/Location.png')} style={{ width: 30, height: 30 }} />
           </View>
           <Text style={{ fontSize: 15, fontWeight: '300', color: 'white' }}>{item.statename}</Text>
         </View>
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
           <View style={{ height: 23, paddingHorizontal: 10, backgroundColor: 'white' }}>
             <Text>Connect</Text>
           </View>
         </View>
       </View>
       <Text style={{fontSize:18,fontWeight:'500',color:'white',top:10}}>{item.title}</Text>
       <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: 60, width: 60, marginRight: 10, borderRadius: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}></View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: 'white' }}>{item.name}</Text>
              <Text style={{ fontSize: 13, fontWeight: '500', color: 'white' }}>{item.time}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' ,top:10}}>
              <Image source={require('../Assets/Location.png')} style={{ marginBottom: 10 }} />
              <Image source={require('../Assets/send.png')} style={{ marginBottom: 10 }} />
              <Image source={require('../Assets/speech.png')} style={{ marginBottom: 10 }} />
            </View>
          </View>
        </View>
     </View>
     
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()} 
    />
  </View>
)}
      {activeTab === 'Latest' && (
        <View style={styles.content}>
        </View>
      )}
      {activeTab === 'Following' && (
        <View style={styles.content}>
        </View>
      )}
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 17,
    fontWeight: '500',
  },
  itemContainer: {
    height: Dimensions.get('window').width * 1.2, 
    width: Dimensions.get('window').width * 0.9, 
    paddingHorizontal: 10, 
    marginBottom: 10, 
    marginHorizontal: 10, 
    backgroundColor:'#49b2e9',
  },
  innerContainer: {
    height:'60%',
    backgroundColor: 'white', 
    borderRadius: 8, 
    padding: 10, 
    marginVertical:10
  },
  itemText: {
    marginTop: 10, 
    textAlign: 'center', 
  },
});
