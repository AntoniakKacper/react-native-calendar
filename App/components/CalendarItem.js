import React, { useState } from 'react';
import { Button, Card } from "react-native-paper";
import { Text, TouchableOpacity, View } from "react-native";
import CustomModal from "./CustomModal";

const CalendarItem = ({item}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log("XD")
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <TouchableOpacity onPress={handleOpen}>
      <Card style={{marginRight: 10, marginTop: 17}}>
        <Card.Content style={{alignItems: 'center'}}>
          <Text>
            {item ? item.name : "Empty date"}
          </Text>
        </Card.Content>
      </Card>
      <CustomModal modalVisible={open} setModalVisible={setOpen}>
        <View>
          <Text>Edit</Text>
          <Text>Delete</Text>
          <Button onPress={handleClose}>Close</Button>
        </View>
      </CustomModal>
    </TouchableOpacity>
  );
};

export default CalendarItem;
