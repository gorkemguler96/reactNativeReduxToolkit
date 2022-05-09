import React from 'react';
import {View,Text,Button} from "react-native";
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement} from "../../redux/counter/counterSlice";

function Counter(props) {

    const countValue = useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();

    return (
        <View>
            <Text>
                {countValue}
            </Text>
            <Button
                onPress={()=>dispatch(increment(countValue+1))}
                title="arttır"
            />
            <Button
                onPress={()=>dispatch(decrement(countValue-1))}
                title="azalt"
            />

        </View>
    );
}

export default Counter;
