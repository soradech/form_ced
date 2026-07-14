import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
export default function Arith() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    function subtract() {
        let c = Number(x) - Number(y);
        setZ(c);
    }

    const reset = () => {
        setX("");
        setY("");
        setZ(0);
    }

    return(
        <View>
            <View>
                <Text>Result:</Text>
                <Text>{z}</Text>
            </View>
            <View>
                <TextInput style={{backgroundColor: '#CCC'}}
                    value={x}
                    onChangeText={(text) => setX(text)}  
                    placeholder="Enter X" />
                <TextInput style={{backgroundColor: 'pink'}}
                    placeholder="Enter Y"
                    value={y}
                    onChangeText={(text)=>setY(text)}
                    />
            </View>
            <View>
                <Button title="ADD" onPress={() => {
                    let a = Number(x);
                    let b = Number(y);
                    let c = a + b;
                    setZ(String(c));
                }} />
                <Button title="SUB" onPress={subtract} />
                <Button title="RESET" onPress={reset} />
            </View>
        </View>
    )
}