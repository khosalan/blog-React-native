import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import BlogContext from "../context/BlogContext";

const indexScreen = ({ navigation }) => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.Title}
        renderItem={({ item }) => {
          return <Text>{item.Title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default indexScreen;
