import React from 'react';
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from "react-native-paper";
import DatePicker from "react-native-date-picker";

const CustomModal = ({modalVisible, setModalVisible, children}) => {

  const handleClose = ()  => {
    setModalVisible(false);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {children}
          <Button
            onPress={handleClose}
          >
            <Text>Close</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});



export default CustomModal;
