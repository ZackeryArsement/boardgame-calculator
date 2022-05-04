import { TouchableOpacity, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useState, useEffect } from 'react';

import data from './data.json'

import ResourceNode from './components/ResourceNode';
import TileNode from './components/TileNode';
import ComboNode from './components/ComboNode';
import ToggleButton from './components/ToggleButton';

export default function App() {

  const resourceTypes = ['Food', 'Wood', 'Iron', 'Gold', 'Tech'];
  const [resourceValues, setResourceValues] = useState([0, 0, 0, 0, 0]);
  const [resourcesPerTurn, setResourcesPerTurn] = useState([0, 0, 0, 0, 0]);

  const tileTypes = ['Grassland', 'Forest', 'Snow', 'Mountain', 'Desert', 'Ocean', 'Swamp'];
  const [tileValues, setTileValues] = useState([0, 0, 0, 0, 0, 0, 0]);

  // [Mountain Iron, Mountain Gold, Desert Gold, Desert Tech, Ocean Tech, Ocean Food, Swamp Food, Swamp Wood]
  const comboTypes = ['Mountain', 'Desert', 'Ocean', 'Swamp']
  const [comboTileValues, setComboTileValues] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const [activeDisplay, setActiveDisplay] = useState('Tiles');

  const updateTileCount = async (newValue, index) => {
    let tempTileValues = tileValues;
    if(parseInt(newValue) > 0){
      tempTileValues[index] = parseInt(newValue);
    } else {
      tempTileValues[index] = 0;
    }

    await setTileValues(tempTileValues);
    await updateResourcesPerTurn()
  }

  const updateResourcesPerTurn = async () => {
    const [ grassland, forest, snow ] = tileValues;
    const [ mountainIron, mountainGold, desertGold, desertTech, oceanTech, oceanFood, swampFood, swampWood ] = comboTileValues;

    // Base resources, before country and government buffs
    let food = grassland*5;
    let wood = forest*5;
    let iron = 10;
    let gold = 10;
    let tech = snow;

    setResourcesPerTurn([food, wood, iron, gold, tech])
  }

  const updateResources = async () => {
    let tempResources = [...resourceValues];

    await tempResources.map((value, index) => {
      value = value + resourcesPerTurn[index];
      tempResources[index] = value;
    return tempResources;
    })

    setResourceValues(tempResources)
  }

  const toggleDisplay = (value) => {
    setActiveDisplay(value);
  }

  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => updateResources()}><Text style={styles.country}>{data.country}</Text></TouchableOpacity>
          <Text style={styles.government}>({data.government})</Text>
        </View>      
        
        <View style={styles.toggleButtons}>
          <ToggleButton type='Resources' activeDisplay={activeDisplay} toggleDisplay={toggleDisplay}/>
          <ToggleButton type='Tiles' activeDisplay={activeDisplay} toggleDisplay={toggleDisplay}/>
        </View>

        {activeDisplay === 'Resources' ? (
          <View style={styles.resourceList}>
            {resourceTypes.map((type, index) => {
              return (<ResourceNode key={index} resource={type} value={resourceValues} perTurn={resourcesPerTurn[index]} index={index}/>)
            })}
            
            {/* Combo Tiles */}
            <View style={styles.comboTiles}>
              {comboTypes.map((type, index) => (
                <ComboNode type={type} countOne={comboTileValues[index*2]} countTwo={comboTileValues[index*2+1]}/>
              ))}
            </View>
          </View>
        ) : (
          <KeyboardAvoidingView style={styles.tileList}>
            {tileTypes.map((type, index) => {
              return (<TileNode key={index} type={type} value={tileValues[index]} updateTileCount={updateTileCount} index={index} tileCount={tileValues[index]}/>)
            })}
          </KeyboardAvoidingView>
        )}
    </ScrollView>
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
    paddingTop: 10,
    marginBottom: 300
  },
  toggleButtons: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  comboTiles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
