import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Agenda } from "react-native-calendars";
import { Button, Card } from "react-native-paper";
import CalendarItem from "./components/CalendarItem";
import CustomModal from "./components/CustomModal";
import AddActivityDialog from "./components/AddActivityDialog";
import SnackbarComponent from "./components/SnackbarComponent";

const Calendar = () => {
  const [items, setItems] = useState({
    '2022-04-10': [{name: 'item 1 - any js object'}],
    '2022-04-11': [{name: 'item 2 - any js object'}],
    '2022-04-12': [],
    '2022-04-13': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleOpen = () => {
    setModalVisible(true);
  }

  const renderItem = (item) => {
    return (
      <CalendarItem item={item} items={items} setSnackbarVisible={setSnackbarVisible}/>
    )
  }

  const renderEmptyDate = () => {
    return (
        <Card style={{marginRight: 10, marginTop: 17}}>
          <Card.Content style={{alignItems: 'center'}}>
            <Text>
              Empty date
            </Text>
          </Card.Content>
        </Card>
    )
  }

  return (
    <View style={{flex: 1}}>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <AddActivityDialog setItems={setItems} items={items} setModalVisible={setModalVisible}/>
      </CustomModal>
      <Agenda
        items={items}
        selected={new Date()}
        minDate={String(new Date())}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
      />
      <SnackbarComponent setVisible={setSnackbarVisible} visible={snackbarVisible} label="Reminder added" />
      <Button onPress={handleOpen}>Add activity</Button>
    </View>
  );
};


export default Calendar;
