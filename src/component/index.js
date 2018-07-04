import { Navigation } from 'react-native-navigation';

// Components
import LaunchComponent from './LaunchComponent';

export function registerComponents() {
    Navigation.registerComponent('LaunchComponent', () => LaunchComponent);
  }