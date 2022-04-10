import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { Button } from "react-native-paper";

const AddNotificationDialog = ({item}) => {
  const [date, setDate] = useState(new Date());

  const handleAddNotification = () => {
    item = {
      ...item,
      notifyDate: date
    }
  }

  return (
    <View>
      <Text>{item.name}</Text>
      <DatePicker date={date} onDateChange={setDate} mode="datetime"/>

      <Text style={styles.deleteText}>Delete</Text>
      <Button onPress={handleAddNotification}>Add notification</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  deleteText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",

  }
});

export default AddNotificationDialog;
