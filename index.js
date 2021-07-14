/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import Router from './src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
