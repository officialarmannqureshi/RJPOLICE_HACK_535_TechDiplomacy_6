import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddNewDevice = () => {
  const [deviceId, setDeviceId] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [cameraIp, setCameraIp] = useState('');
  const [cameraName, setCameraName] = useState('');
  const handleSubmit = () => {
    // Handle the form submission here
    console.log('Device Id: ', deviceId);
    console.log('ownerId: ', ownerId);
    console.log('ownerName: ', ownerName);
    console.log('contactEmail: ', contactEmail);
    console.log('latitude: ', latitude);
    console.log('longitude: ', longitude);
    console.log('cameraIp: ', cameraIp);
    console.log('cameraName: ', cameraName);
  };

  return (
    <View style={styles.container}>
  <TextInput
        style={styles.input}
        placeholder="device ID"
        value={deviceId}
        onChangeText={(text) => setDeviceId(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="owner ID"
        value={ownerId}
        onChangeText={setOwnerId}
      />
      <TextInput
        style={styles.input}
        placeholder="Ownwer name "
        value={ownerName}
        onChangeText={setOwnerName}
      />
      <TextInput
        style={styles.input}
        placeholder="contact email"
        value={contactEmail}
        onChangeText={setContactEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="latitude"
        value={latitude}
        onChangeText={setLatitude}
      />
      <TextInput
        style={styles.input}
        placeholder="longitude"
        value={longitude}
        onChangeText={setLongitude}
      />
      <TextInput
        style={styles.input}
        placeholder="camera Ip"
        value={cameraIp}
        onChangeText={setCameraIp}
      />
      <TextInput
        style={styles.input}
        placeholder="camera name"
        value={cameraName}
        onChangeText={setCameraName}
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