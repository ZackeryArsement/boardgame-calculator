import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useState  } from 'react';

import data from './data.json'

import ResourceNode from './components/ResourceNode';
import TileNode from './components/TileNode';
import ToggleButton from './components/ToggleButton';

export default function App() {

  const resourceTypes = ['Food', 'Wood', 'Iron', 'Gold', 'Tech'];
  const resourceValues = [150, 30, 0, 7, 11];
  const resourcePerTurn = [45, 10, 0, 1, 3];

  const tileTypes = ['Grassland', 'Forest', 'Snow', 'Ocean', 'Mountain', 'Desert', 'Swamp'];
  const tileValues = [150, 30, 0, 7, 11];

  const [activeDisplay, setActiveDisplay] = useState('Tiles');

  const toggleDisplay = (value) => {
    setActiveDisplay(value);
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.country}>{data.country}</Text>
        <Text style={styles.government}>({data.government})</Text>
      </View>      
      
      <View style={styles.toggleButtons}>
        <ToggleButton type='Resources' activeDisplay={activeDisplay} toggleDisplay={toggleDisplay}/>
        <ToggleButton type='Tiles' activeDisplay={activeDisplay} toggleDisplay={toggleDisplay}/>
      </View>

      {activeDisplay === 'Resources' ? (
        <View style={styles.resourceList}>
          {resourceTypes.map((type, index) => {
            return (<ResourceNode key={index} resource={type} value={resourceValues[index]} perTurn={resourcePerTurn[index]}/>)
          })}
        </View>
      ) : (
        <View style={styles.tileList}>
          {tileTypes.map((type, index) => {
            return (<TileNode key={index} type={type} value={tileValues[index]}/>)
          })}
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    flexDirection: 'row'
  },
  country: {
    marginTop: 80,
    marginLeft: 5,
    marginRight: 10,
    fontSize: 64
  },
  government: {
    marginTop: 105,
    fontSize: 32
  },
  resourceList: {
    backgroundColor: 'tan',
    paddingTop: 10
  },
  tileList: {
    backgroundColor: 'tan',
    paddingTop: 10
  },
  toggleButtons: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  }
});
