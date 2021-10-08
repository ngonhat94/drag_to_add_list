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
import {DraxProvider, DraxView, DraxList} from 'react-native-drax';
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
      id: 3,
      image:
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
    },
  ];
  const workItems = [
    {
      id: 0,
      name: 'Work Item 1',
      items: [
        'https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg',
        'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Hindu-Shiva-God-Wallpaper-Free-Download.jpg',
        'https://www.santabanta.com/images/wallpapers/spiritual/may-lord-shiva-shower-hes-blessing-on-you-and-your-family-this-mahashivratri_1024-768.jpg',
      ],
    },
    {
      id: 1,
      name: 'Work Item 2',
      items: [
        'https://cdn.cnn.com/cnnnext/dam/assets/181215042152-nasa-juno-01-exlarge-169.jpg',
        'https://www.whatsappimages.in/wp-content/uploads/2021/01/Feeling-Very-Sad-Images-Wallpaper-Free-2.jpg',
        'https://ichef.bbci.co.uk/news/976/cpsprodpb/1572B/production/_88615878_976x1024n0037151.jpg',
      ],
    },
  ];
  const receivedItem = (item, i) => {
    console.log(item);
    return (
      <DraxView
        style={{flex: 1}}
        onReceiveDragDrop={event => {
          console.log('======', event);
          console.log('-------', item);
        }}>
        <Image
          source={{uri: i}}
          style={{
            width: (width - 10) / 4,
            height: (width - 10) / 4,
            borderRadius: 5,
          }}
        />
      </DraxView>
    );
  };
  return (
    // <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    // <TextInput placeholder='tao test' onChangeText={text => setText(text)}/>
    // <TesstText text={text}/>
    // <Tesst/>
    <SafeAreaView style={{flex: 1}}>
      <DraxProvider>
        <View style={styles.container}>
          <View>
            {workItems.map((v, index) => (
              <View>
                <Text>{v.name}</Text>
                <FlatList
                  data={v.items}
                  renderItem={({item}) => receivedItem(v, item)}
                  horizontal
                  style={{marginLeft: 2, marginTop: 2}}
                  ItemSeparatorComponent={() => <View style={{width: 2}} />}
                />
              </View>
            ))}
          </View>
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
            {showItem && (
              <DraxList
                data={images}
                renderItemContent={({item}) => (
                  <Image
                    source={{uri: item.image}}
                    style={{
                      width: (width - 10) / 4,
                      height: (width - 10) / 4,
                      borderRadius: 5,
                    }}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                style={{marginLeft: 2, marginTop: 2}}
                ItemSeparatorComponent={() => <View style={{width: 2}} />}
              />
            )}
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
