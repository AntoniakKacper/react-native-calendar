import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Agenda } from "react-native-calendars";
import { Button, Card } from "react-native-paper";
import CalendarItem from "./components/CalendarItem";
import CustomModal from "./components/CustomModal";
import AddActivityDialog from "./components/AddActivityDialog";
import { db } from "./firebaseConfig";
import { doc, setDoc, addDoc, collection, getDocs } from 'firebase/firestore';

const Calendar = () => {
  const [items, setItems] = useState({
    '2022-04-07': [{name: 'item 1 - any js object'}],
    '2022-04-08': [{name: 'item 2 - any js object'}],
    '2022-04-09': [],
    '2022-04-10': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
  });

  const [modalVisible, setModalVisible] = useState(false);

  const eventsCollectionRef = collection(db, "events");
  const getData = async () => {
    fetch('http://10.0.2.2:8000/events/addSchedule',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: 'data XDD'
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));

  }
  const handleAdd = async () => {
    // console.log("XD")
    // try {
    //   const docRef = await addDoc(collection(db, "events"), items);
    //
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  }

  const handleOpen = () => {
    setModalVisible(true);
  }

  const renderItem = (item) => {
    return (
      <CalendarItem item={item} items={items}/>
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
      <Button onPress={getData}>get data</Button>
      <Button onPress={handleAdd}>Add cwel</Button>
      <Button onPress={handleOpen}>Add activity</Button>
    </View>
  );
};


export default Calendar;
