import React from 'react';
import { Snackbar } from "react-native-paper";

const SnackbarComponent = ({label, setVisible, visible}) => {

  const onDismissSnackBar = () => setVisible(false);
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismissSnackBar}
      action={{
        label: 'Close',
        onPress: () => {
          setVisible(false)
        },
      }}>
      {label}
    </Snackbar>
  );
};


export default SnackbarComponent;
