import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    TextInput
} from 'react-native';

import { useState } from 'react';

const TileNode = ({type, updateTileCount, index, tileCount}) => {
    const [count, setCount] = useState(tileCount);
    const [tempCount, setTempCount] = useState();

    const getColor = () => {
        switch (type){
            case 'Grassland':
                return '#ffd98c'
            case 'Forest':
                return '#1d680e'
            case 'Snow':
                return '#dbdbdb'
            case 'Ocean':
                return '#1b6cce'
            case 'Mountain':
                return '#5c5c5c'
            case 'Desert':
                return '#fbce3d'
            case 'Swamp':
                return '#1d680e'
        }
    }

    const tileColor = getColor();

    return (
        <View style={styles.row}>
            <Text style={[styles.tileType, {backgroundColor: tileColor}]}>
                {type}
            </Text>

            <View>
                <TextInput style={styles.input} placeholder={`${tileCount}`} keyboardType="numeric" returnKeyType='done' maxLength={2} onChangeText={(text) => setTempCount(text)} onBlur={() => setTempCount(count)} onSubmitEditing={() => [updateTileCount(tempCount, index), setCount(tempCount)]} value={tempCount}/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        borderRadius: 15,
        padding: 10,
        justifyContent: 'space-between'
    },
    tileType: {
        fontSize: 42,
        paddingHorizontal: 5,
        paddingVertical: 2,
        backgroundColor: 'gray',
        borderRadius: 10,
        overflow: 'hidden',
        width: 250
    },
    resourceValue: {
        fontSize: 42,
        width: 110,
        textAlign: 'center'
    },
    input: {
        fontSize: 42,
        textAlign: 'center',
        width: 100,
        backgroundColor: '#cecece',
        paddingVertical: 2,
        borderRadius: 10,
        overflow: 'hidden'
    },
});

export default TileNode;