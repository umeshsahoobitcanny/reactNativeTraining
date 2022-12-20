import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
const TakeData = props => {
  const [enterValue, setValue] = useState('');

  const handleAddTask = value => {
    props.addTask(value);
    setValue(null);
  };

  return (
    <View style={styles.appContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <View style={styles.header}>
          <Text style={styles.txt}>Note Book</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="your current task!"
            onChangeText={text => setValue(text)}
          />

          <Button
            style={styles.btn}
            title="Add Task"
            onPress={() => handleAddTask(enterValue)}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default TakeData;

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 20,
    paddingTop: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textInput: {
    borderWidth: 1,
    borderBottomColor: '#fff',
    borderColor: '#edeef2',
    width: '70%',
    backgroundColor: '#fff',
    marginRight: 8,
    padding: 8,
    borderRadius: 10,
  },
  writeTaskWrapper: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    marginBottom: 20,
    color: '#edeef2',
    fontSize: 24,
    fontWeight: '700',
    borderBottomWidth: 1,
  },
});
