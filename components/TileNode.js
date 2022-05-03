import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    TextInput
} from 'react-native';

const TileNode = (props) => {
    return (
        <View style={styles.row}>
            <Text style={styles.tileType}>
                {props.type}
            </Text>

            <KeyboardAvoidingView >
                <TextInput style={styles.input} placeholder={'0'} keyboardType="numeric" maxLength={2}/>

            </KeyboardAvoidingView>
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
        padding: 10
    },
    tileType: {
        fontSize: 54,
        backgroundColor: 'gray',
        width: 250
    },
    resourceValue: {
        fontSize: 42,
        // backgroundColor: 'green',
        width: 110,
        textAlign: 'center'
    },
    input: {
        fontSize: 42,
        paddingTop: 15,
        textAlign: 'center',
        width: 125
    }
});

export default TileNode;