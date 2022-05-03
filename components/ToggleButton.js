import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const ToggleButton = ({activeDisplay, type, toggleDisplay}) => {
    return (
        <TouchableOpacity style={[styles.button, (activeDisplay === type) ? {backgroundColor: 'tan'} : {backgroundColor: 'gray'}]} onPress={() => toggleDisplay(type)}>
          <Text style={styles.title}>
            {type}
          </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        width: '50%'
    },
    title: {
        fontSize: 40,
        textAlign: 'center'
    }
});

export default ToggleButton;