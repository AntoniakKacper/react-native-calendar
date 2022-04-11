import React, { useState } from 'react';
import { Card } from "react-native-paper";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomModal from "./CustomModal";
import AddNotificationDialog from "./AddNotificationDialog";

const CalendarItem = ({item, setSnackbarVisible}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <TouchableOpacity onPress={handleOpen}>
      <Card style={{marginRight: 10, marginTop: 17}}>
        <Card.Content style={{alignItems: 'center'}}>
          <Text>
            {item.name}
          </Text>
        </Card.Content>
      </Card>
      <CustomModal modalVisible={open} setModalVisible={setOpen}>
        <AddNotificationDialog item={item} setSnackbarVisible={setSnackbarVisible} setOpen={setOpen}/>
      </CustomModal>
    </TouchableOpacity>
  );
};



export default CalendarItem;
