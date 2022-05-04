import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const AddActivityDialog = ({items, setItems, setModalVisible}) => {
  const [text, onChangeText] = useState('Name of new activity');
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const found = Object.entries(items).find(key => key[0] === formattedDate);
    if (found) {
      const prevId = items[found[0]].length
        ? items[found[0]].slice(-1)[0].id + 1
        : 1;
      items[found[0]] = [
        ...items[found[0]],
        {name: text, date: formattedDate, id: prevId},
      ];
      setItems(items);
      setModalVisible(false);
    } else {
      setItems({...items, [formattedDate]: [{name: text}]});
    }
  };

  return (
    <>
      <Text style={styles.textStyle}>Add new reminder</Text>
      <DatePicker date={date} onDateChange={setDate} mode="date" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button onPress={handleSubmit}>
        <Text>Submit</Text>
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default AddActivityDialog;
