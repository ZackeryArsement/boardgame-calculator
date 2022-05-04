import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    TextInput
} from 'react-native';

const ComboNode = ({ type, countOne, countTwo }) => {
    return (
        <View style={styles.comboResource}>
            <Text style={styles.comboName}>{type}</Text>

            <View style={styles.comboCounts}>
                <Text style={styles.comboCount}>{countOne}</Text>
                <Text style={styles.comboCount}>{countTwo}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    comboResource: {
        backgroundColor: '#fafafa',
        padding: 4,
        width: 95,
        borderRadius: 5,
        marginBottom: 10
      },
      comboName: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      comboCounts: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
      },
      comboCount: {
        fontSize: 30,
        backgroundColor: 'gray',
        borderRadius: 5,
        padding: 2,
        width: 42,
        overflow: 'hidden',
        textAlign: 'center'
      }
});

export default ComboNode