import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const TakeData = () => {
  const [enterText, setEnter] = useState('');
  const [courseGoals, setList] = useState([]);
  function changeData(enteredText) {
    setEnter(enterText);
  }
  function addText() {
    setList(data => [...data, enterText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.txt}>Note Book</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="your current task!"
          onChangeText={changeData}
        />

        <Button title="Add Task" onPress={addText} />
      </View>
      <View style={styles.taskContainer}>
        {courseGoals.map((d)=> 
          <Text style={styles.txt}>{d}</Text>
        )}
      </View>
    </View>
  );
};

export default TakeData;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  taskContainer: {
    flex: 5,
  },
  txt: {
    marginBottom: 20,
    color: '#0362fc',
    fontSize: 24,
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
