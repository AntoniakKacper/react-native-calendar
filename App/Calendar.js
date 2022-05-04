import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Button, Card} from 'react-native-paper';
import CalendarItem from './components/CalendarItem';
import CustomModal from './components/CustomModal';
import AddActivityDialog from './components/AddActivityDialog';
import SnackbarComponent from './components/SnackbarComponent';

const Calendar = () => {
  const [items, setItems] = useState({
    '2022-05-03': [
      {name: 'item 3 - any js object', date: '2022-05-03', id: 1},
      {name: 'any js object', id: 2},
    ],
    '2022-05-04': [
      {name: 'item 3 - any js object', date: '2022-05-04', id: 1},
      {name: 'any js object', date: '2022-05-04', id: 2},
    ],
    '2022-05-05': [
      {name: 'item 3 - any js object', date: '2022-05-05', id: 1},
      {name: 'any js object', date: '2022-05-05', id: 2},
    ],
    '2022-05-06': [{name: 'item 1 - any js object', date: '2022-05-06', id: 1}],
    '2022-05-07': [{name: 'item 2 - any js object', date: '2022-05-07', id: 1}],
    '2022-05-08': [],
    '2022-05-09': [
      {name: 'item 3 - any js object', date: '2022-05-09', id: 1},
      {name: 'any js object', date: '2022-05-09', id: 2},
    ],
    '2022-05-11': [{name: 'item 1 - any js object', date: '2022-05-11', id: 1}],
    '2022-05-12': [{name: 'item 2 - any js object', date: '2022-05-12', id: 1}],
    '2022-05-13': [],
  });

  useEffect(() => {}, [items]);

  const [modalVisible, setModalVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleOpen = () => {
    setModalVisible(true);
  };

  const renderItem = item => {
    return (
      <CalendarItem
        item={item}
        items={items}
        setSnackbarVisible={setSnackbarVisible}
        setItems={setItems}
      />
    );
  };

  const renderEmptyDate = () => {
    return (
      <Card style={{marginRight: 10, marginTop: 17}}>
        <Card.Content style={{alignItems: 'center'}}>
          <Text>Empty date</Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={{flex: 1}}>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <AddActivityDialog
          setItems={setItems}
          items={items}
          setModalVisible={setModalVisible}
        />
      </CustomModal>
      <Agenda
        items={items}
        selected={new Date()}
        minDate={String(new Date())}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
      />
      <SnackbarComponent
        setVisible={setSnackbarVisible}
        visible={snackbarVisible}
        label="Reminder added"
      />
      <Button onPress={handleOpen}>Add activity</Button>
    </View>
  );
};

export default Calendar;
