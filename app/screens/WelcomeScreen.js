import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from "react-native";

function WelcomeScreen({ navigation }) {
  const [is, setIs] = useState(false);
  const [bucket, setBucket] = useState(1);

  return (
    <SafeAreaView>
      <ScrollView style={styles.horizontalContainer} horizontal={true}>
        <Text style={styles.horItem} onPress={() => setBucket(1)}>
          A
        </Text>
        <Text style={styles.horItem} onPress={() => setBucket(2)}>
          B
        </Text>
        <Text
          style={styles.horItem}
          onPress={() => navigation.navigate("ViewImage")}
        >
          C
        </Text>
        <Text style={styles.horItem} onPress={() => setBucket(1)}>
          D
        </Text>
      </ScrollView>
      {is && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={is}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <Text>ABCCCCC!!!!!</Text>
            <TouchableHighlight
              onPress={() => {
                setIs(!is);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      )}
      <ScrollView style={styles.scrollView}>
        {bucket === 1 ? (
          <>
            <View style={styles.scrollItem}>
              <Text>A</Text>
            </View>
            <View style={styles.scrollItem}>
              <Text>B</Text>
            </View>
            <View style={styles.scrollItem}>
              <Text>C</Text>
            </View>
            <TouchableOpacity style={styles.scrollItem}>
              <Text>D</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.scrollItem}>
              <Text>E</Text>
            </View>
            <View style={styles.scrollItem}>
              <Text>F</Text>
            </View>
            <View style={styles.scrollItem}>
              <Text>G</Text>
            </View>
            <TouchableOpacity style={styles.scrollItem}>
              <Text>H</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  horizontalContainer: {
    marginHorizontal: 10,
  },
  horItem: {
    flex: 1,
    width: 100,
    height: 40,
    backgroundColor: "red",
    padding: 10,
    marginHorizontal: 10,
  },
  scrollView: {
    top: 10,
  },
  scrollItem: {
    backgroundColor: "gray",
    marginHorizontal: 20,
    margin: 10,
    height: 200,
    padding: 10,
  },
});

export default WelcomeScreen;
