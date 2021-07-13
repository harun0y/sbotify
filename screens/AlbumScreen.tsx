import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";

import SongListItem from "../components/SongListItem";
import albumDetails from "../data/albumDetails";

const AlbumScreen = () => {
    const route = useRoute();

    useEffect ( () => {
        
    }, [])

    return (
        <View>
            <FlatList
                data={albumDetails.songs}
                renderItem={({ item }) => <SongListItem song={item} />}
                keyExtractor={( item ) => item.id }
            />
        </View>
    )
}
export default AlbumScreen;