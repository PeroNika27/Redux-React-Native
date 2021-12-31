import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, RemoveTodo} from '../actions/todoAction';

import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Todo = () => {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const todos = data.todos.todos;

  const addTodo = () => {
    if (todos && !todos.includes(todoValue)) {
      dispatch(AddTodo(todoValue));
      setTodoValue('');
    } else {
      alert(`${todoValue} already added in Todo List`);
    }
  };

  const removeTodo = item => {
    const todoIndex = todos.indexOf(item);
    if (todoIndex > -1) {
      dispatch(RemoveTodo(item));
    } else {
      alert(`${todoValue} is not in the Todo List`);
    }
  };
  const renderTodoList = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <View style={styles.todoView}>
              <View style={styles.todoList}>
                <Text>{item}</Text>
              </View>
              <TouchableOpacity
                style={styles.removeTodo}
                onPress={() => removeTodo(item)}>
                <Text> X </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.mainInput}
        onChangeText={setTodoValue}
        placeholder={'Add task todo here'}
        value={todoValue}
      />
      <Button name="increase" title="Add Todo" onPress={addTodo} />
      <Text
        style={{
          alignSelf: 'stretch',
          paddingLeft: 40,
          marginTop: 20,
          marginBottom: 10,
        }}>
        Today's List of Todos :
      </Text>
      {renderTodoList()}
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  main: {alignItems: 'center'},
  mainInput: {
    borderWidth: 1,
    height: 55,
    width: 270,
    padding: 10,
    margin: 20,
    alignItems: 'center',
    borderRadius: 9,
  },
  todoList: {
    backgroundColor: '#90caf9',
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoView: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 5,
  },
  removeTodo: {
    backgroundColor: '#e65100',
    borderRadius: 4,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
