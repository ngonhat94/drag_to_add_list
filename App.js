import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {DraxProvider, DraxView} from 'react-native-drax';
const Tesst = () =>
  React.useMemo(() => {
    {
      console.log('render lai Tesst');
      return (
        <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
      );
    }
  }, []);
const TesstText = ({text}) => {
  console.log('render lai', text);
  return (
    <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
      <Text>{text}</Text>
    </View>
  );
};
const App = () => {
  const {width} = Dimensions.get('window');
  const [showItem, setShowItem] = React.useState(true);
  const images = [
    {
      id: 0,
      image:
        'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
    },
    {
      id: 1,
      image:
        'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/originals/7d/74/4a/7d744a684fe03ebc7e8de545f97739dd.jpg',
    },
    {
      id: 2,
      image:
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
    },
  ];
  return (
    // <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    // <TextInput placeholder='tao test' onChangeText={text => setText(text)}/>
    // <TesstText text={text}/>
    // <Tesst/>
    <SafeAreaView style={{flex: 1}}>
      <DraxProvider>
        <View style={styles.container}>
          <DraxView
            style={styles.draggable}
            onDragStart={() => {
              console.log('start drag');
            }}
            payload="world"
          />
          <DraxView
            style={styles.receiver}
            onReceiveDragEnter={({dragged: {payload}}) => {
              console.log(`hello ${payload}`);
            }}
            onReceiveDragExit={({dragged: {payload}}) => {
              console.log(`goodbye ${payload}`);
            }}
            onReceiveDragDrop={({dragged: {payload}}) => {
              console.log(`received ${payload}`);
            }}
          />
          <View style={styles.dragable}>
            <TouchableOpacity
              style={styles.header}
              onPress={() => setShowItem(!showItem)}>
              <Image
                source={
                  showItem
                    ? require('./assets/up-arrow.png')
                    : require('./assets/down-arrow.png')
                }
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
            <FlatList
              data={images}
              renderItem={({item}) => (
                <Image
                  source={{uri: item.image}}
                  style={{width: (width - 10) / 4, height: 50}}
                />
              )}
              horizontal
            />
          </View>
        </View>
      </DraxProvider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  draggable: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  receiver: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  dragable: {},
  header: {
    backgroundColor: '#94A2AB',
    height: 40,
    justifyContent: 'center',
  },
});
export default App;
