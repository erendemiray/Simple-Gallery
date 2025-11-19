import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  FlatList, 
  TouchableOpacity,
  StatusBar 
} from 'react-native';


const GALLERY_DATA = [
  { id: '1', caption: 'Misty Mountains', url: 'https://picsum.photos/id/10/400/400' },
  { id: '2', caption: 'Ocean Waves', url: 'https://picsum.photos/id/1015/400/400' },
  { id: '3', caption: 'Forest Path', url: 'https://picsum.photos/id/1043/400/400' },
  { id: '4', caption: 'City Night', url: 'https://picsum.photos/id/1077/400/400' },
  { id: '5', caption: 'Desert Road', url: 'https://picsum.photos/id/1080/400/400' },
  { id: '6', caption: 'Northern Lights', url: 'https://picsum.photos/id/200/400/400' },
];


const GalleryItem = ({ item, onSelect }) => (
  <TouchableOpacity onPress={() => onSelect(item)} style={styles.thumbnailContainer}>
    <Image 
      source={{ uri: item.url }} 
      style={styles.thumbnailImage} 

      resizeMode="cover" 
    />
  </TouchableOpacity>
);


const App = () => {
 
  const [selectedImage, setSelectedImage] = useState(null);

  const renderViewer = () => {
 
    if (!selectedImage) {
      return (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Tap an image to view it</Text>
        </View>
      );
    }

  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image 
          source={{ uri: selectedImage.url }} 
          style={styles.mainImage} 

          resizeMode="contain"
        />
        <Text style={styles.captionText}>{selectedImage.caption}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {}
      <Text style={styles.title}>SimpleGallery</Text>

      {}
      <View style={styles.viewerContainer}>
        {renderViewer()}
      </View>

      {}
      <View style={styles.gridContainer}>
        {}
        <FlatList
          data={GALLERY_DATA}
          keyExtractor={(item) => item.id}

          numColumns={3} 
          renderItem={({ item }) => (

            <GalleryItem item={item} onSelect={setSelectedImage} />
          )}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1, 
    backgroundColor: '#f5f5f5',

    paddingTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    color: '#333',
  },
 
  viewerContainer: {
    flex: 2, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },

  mainImage: {
    width: '90%',
    height: '80%',
    borderRadius: 6,
  },
  captionText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 5,
  },

  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
  },

  gridContainer: {
    flex: 1, 
    padding: 5,
  },

  thumbnailContainer: {
    flex: 1, 
    margin: 5,
    aspectRatio: 1, 
    borderRadius: 8,
    overflow: 'hidden', 
  },
  // Thumbnail Resmi
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
});

export default App;