import React from 'react';
import Location from './src/component/location/location.js';
import Counter from './src/component/hooks/useState.js';
import {ScrollView, SectionList} from 'react-native';
import Mert from './src/component/alert.js';
import Input from './src/component/input.js';
import SectionListExample from './src/component/sectionList.js';
import ImageSet from './src/component/image.js';
import TakeData from './src/component/takeInput.js';
import UseReducer from './src/component/hooks/useReducer';
// import Redux from './src/component/redux/reduxOne';
import Redux from './src/component/redux/reduxTwo';

// import Drwawer from './src/component/navigation/navigationDrawer.js';
// import Navigation from './src/component/navigation/navigation';
import Animated from './src/component/animation/animated.js';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {List} from './src/component/redux/listing/product';

const App = () => {
  return <List />;
};
export default App;
