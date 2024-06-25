import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
const TodoInput = (props) => {
  const [todoText, setTodoText] = useState("");

  const todoInputHandler = (txt) => {
    setTodoText(txt);
  };

  const addTodoHandler = () => {
    props.onAddTodo(todoText);
    setTodoText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.todoInputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/todo.png")}
        />
        <TextInput
          style={styles.todoInput}
          placeholder="Your new todo..."
          onChangeText={todoInputHandler}
          value={todoText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.closeAddTodoModal}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Todo" onPress={addTodoHandler} color="#530acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  todoInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#5A639C",
  },

  todoInput: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    marginVertical: 10,
    padding: 16,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    width: 120,
    marginHorizontal: 12,
    paddingVertical: 10,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default TodoInput;
