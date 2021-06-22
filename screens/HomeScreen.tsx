import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';

const albumCategory = {
    id: "1",
    title: "Hawali Bisiler",
    albums: [
      {
        id: "1",
        imageUri: "https://img.discogs.com/YqMHiMOsl14ZFPKoi_6IZ0Zx9lI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-7088465-1433440608-7312.jpeg.jpg",
        artistHeadline: "ragga oktay, apaçi selim, fişek murat"
      },
      {
        id: "2",
        imageUri: "https://westernnews.media.clients.ellingtoncms.com/img/photos/2020/12/29/OneRepublic_t715.jpg?529764a1de2bdd0f74a9fb4f856b01a9d617b3e9",
        artistHeadline: "eminem, drake, drink"
      },
      {
        id: "3",
        imageUri: "https://img-s1.onedio.com/id-559740f35b8ea8403528c3bf/rev-0/w-900/h-900/f-jpg/s-68b125bd29b8f6106ea3b0e6693c893748267f95.jpg",
        artistHeadline: "rihanna, lady gaga, sezen aksı"
      },
      {
        id: "4",
        imageUri: "https://www.kcjt.si/Portals/k/adam/nnDoc/QGk43an5Qkqa_BhH20DHxA/Image/album_art.jpg",
        artistHeadline: "aşık veysle, neşet ertas, ibrahim tatlıses"
      }
    ]
};
 
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AlbumCategory title={albumCategory.title} albums={albumCategory.albums} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
