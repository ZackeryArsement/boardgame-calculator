import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Keyboard
} from 'react-native';

const ResourceNode = (props) => {
    return (
        <View style={styles.row}>
            <Text style={styles.resourceType}>
                {props.resource}
            </Text>
            <Text style={styles.resourceValue}>
                {props.value}
            </Text>
            <Text style={styles.resourcePerTurn}>
                {props.perTurn}/turn
            </Text>
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
    resourceType: {
        fontSize: 54,
        // backgroundColor: 'gray',
        width: 150
    },
    resourceValue: {
        fontSize: 42,
        // backgroundColor: 'green',
        width: 110,
        textAlign: 'center'
    },
    resourcePerTurn: {
        fontSize: 28,
        // backgroundColor: 'blue',
        width: 115,
        textAlign: 'right',
        paddingTop: 20
    }
});

export default ResourceNode;