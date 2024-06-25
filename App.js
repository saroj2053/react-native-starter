import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addTodoHandler = (enteredTodoText) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: enteredTodoText, id: Math.random().toString() },
    ]);
    endAddTodo();
  };

  const deleteTodoHandler = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const startAddTodo = () => {
    setShowModal(true);
  };

  const endAddTodo = () => {
    setShowModal(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new Todo" color="#a065ec" onPress={startAddTodo} />
        <TodoInput
          visible={showModal}
          onAddTodo={addTodoHandler}
          closeAddTodoModal={endAddTodo}
        />
        <View style={styles.todosWrapper}>
          <FlatList
            data={todos}
            renderItem={(itemData) => {
              return (
                <TodoItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteTodoItem={deleteTodoHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },

  todosWrapper: {
    flex: 5,
  },
});
