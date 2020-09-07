/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppContainer from './src/ui/app/AppContainer';

AppRegistry.registerComponent(appName, () => AppContainer);
