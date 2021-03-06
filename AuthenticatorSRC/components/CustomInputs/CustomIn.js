import react from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const CustomIn = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput
            value={value}
            onChangeText={setValue}
            placeholder = {placeholder}
            styles={styles.input}
            secureTextEntry={secureTextEntry}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f0f0',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        height: '7.5%',
    },
    input:{

    },
});
export default CustomIn