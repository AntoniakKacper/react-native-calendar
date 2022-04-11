import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { Button } from "react-native-paper";
import moment from "moment";
import SnackbarComponent from "./SnackbarComponent";


const AddNotificationDialog = ({item, setSnackbarVisible, setOpen}) => {
  const [date, setDate] = useState(new Date());
  //const [visible, setVisible] = useState(false);

  const addNotification = async () => {
    const formattedDate = moment(new Date(date),"DD/MM/YYYY");
    const formattedTime = moment(new Date(date),"HH:mm:ss");
    console.log(item.name)
    const dateObject = {
      name: item.name,
      year: formattedDate.year(),
      month: formattedDate.month(),
      day: formattedDate.date(),
      hour: formattedTime.hour(),
      minute: formattedTime.minute(),
      second: formattedTime.second()
    }
    console.log(dateObject)

    fetch('http://10.0.2.2:8000/events/addSchedule',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: dateObject
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
    setSnackbarVisible(true);
    setOpen(false);
  }

  const handleAddNotification = () => {
    // item = {
    //   ...item,
    //   notifyDate: date
    // }
  }

  return (
    <View>
      <Text>{item.name}</Text>
      <DatePicker date={date} onDateChange={setDate} mode="datetime"/>

      <Text style={styles.deleteText}>Delete</Text>
      {/*<SnackbarComponent label="Test" visible={visible} setVisible={setVisible} />*/}
      <Button onPress={addNotification}>Add notification</Button>
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
