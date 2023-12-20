import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddNewDevice = () => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceLocation, setDeviceLocation] = useState('');

  const handleSubmit = () => {
    // Handle the form submission here
    console.log('Device Name: ', deviceName);
    console.log('Device Location: ', deviceLocation);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Device Name"
        value={deviceName}
        onChangeText={setDeviceName}
      />
      <TextInput
        style={styles.input}
        placeholder="Hardware ID"
        value={deviceLocation}
        onChangeText={setDeviceLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Lattitude"
        value={deviceLocation}
        onChangeText={setDeviceLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        value={deviceName}
        onChangeText={setDeviceName}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default AddNewDevice;