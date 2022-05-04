import React, {useState} from 'react';
import {Button, Card} from 'react-native-paper';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomModal from './CustomModal';
import AddNotificationDialog from './AddNotificationDialog';

const CalendarItem = ({item, setSnackbarVisible, setItems, items}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    const found = Object.entries(items).find(key => key[0] === item.date);
    if (found) {
      items[found[0]] = items[found[0]].filter(
        matchItem => matchItem.id !== item.id,
      );
      setItems({
        ...items,
        ...items[found[0]],
      });
      setOpen(false);
    }
  };

  return (
    <TouchableOpacity onPress={handleOpen}>
      <Card style={{marginRight: 10, marginTop: 17}}>
        <Card.Content style={{alignItems: 'center'}}>
          <Text>{item.name}</Text>
        </Card.Content>
      </Card>
      <CustomModal modalVisible={open} setModalVisible={setOpen}>
        <AddNotificationDialog
          item={item}
          setSnackbarVisible={setSnackbarVisible}
          setOpen={setOpen}
        />
        <Button onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </Button>
      </CustomModal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CalendarItem;
