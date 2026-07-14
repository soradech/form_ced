import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Index() {
  const [count, setCount] = useState(0);

  function dec() {
      //let x = count;
      //x--;
      //setCount(x);
      setCount(count-1);
  } 

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 28,}}>Count: {count}</Text>
      <TouchableOpacity style={{backgroundColor: 'green'}} 
          onPress={() => setCount(count+1)}>
        <Text style={{fontSize: 48}}> + </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'blue'}} 
        onPress={dec}>
        <Text style={{fontSize: 48}}> - </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
