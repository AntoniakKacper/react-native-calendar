import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from "react-native-date-picker";

const AddNotificationDialog = ({item}) => {
  const [date, setDate] = useState(new Date());
  return (
    <View>
      <Text>{item.name}</Text>
      <DatePicker date={date} onDateChange={setDate} mode="datetime"/>

      <Text style={styles.deleteText}>Delete</Text>
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
