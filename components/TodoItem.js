import { StyleSheet, View, Text, Pressable } from "react-native";

const TodoItem = (props) => {
  return (
    <View style={styles.todoItem}>
      <Pressable
        onPress={props.onDeleteTodoItem.bind(this, props.id)}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={{ color: "white", padding: 20 }}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#1acdef",
    margin: 12,
    borderRadius: 8,
  },

  pressedItem: {
    opacity: 0.5,
  },
});

export default TodoItem;
