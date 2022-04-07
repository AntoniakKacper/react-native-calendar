import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Agenda } from "react-native-calendars";
import { Button, Card } from "react-native-paper";
import CalendarItem from "./components/CalendarItem";
import CustomModal from "./components/CustomModal";
import AddActivityDialog from "./components/AddActivityDialog";
// import CustomModal from "./CustomModal";
// import AddActivityDialog from "./AddActivityDialog";
// import CalendarItem from "./CalendarItem";

const Calendar = () => {
  const [items, setItems] = useState({
    '2022-04-07': [{name: 'item 1 - any js object'}],
    '2022-04-08': [{name: 'item 2 - any js object'}],
    '2022-04-09': [],
    '2022-04-10': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
  });
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpen = () => {
    setModalVisible(true);
  }

  const renderItem = (item) => {
    return (
      <CalendarItem item={item} />
    )
  }

  const renderEmptyDate = () => {
    return (
      <CalendarItem />
    )
  }

  return (
    <View style={{flex: 1}}>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <AddActivityDialog setVisibleModal={setModalVisible} setItems={setItems} items={items} setModalVisible={setModalVisible} />
      </CustomModal>
      <Agenda
        items={items}
        //loadItemsForMonth={loadItems}
        selected={new Date()}
        minDate={String(new Date())}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
      />
      <Button onPress={handleOpen}>Add activity</Button>
    </View>
  );
};


export default Calendar;
