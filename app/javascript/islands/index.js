// IslandJS Rails - Main entry point
// This file is the webpack entry point for your JavaScript islands

// React component imports
import HelloWorld from './components/HelloWorld.jsx';
import Reactions from './components/Reactions.jsx';
import Combobox from './components/Combobox.jsx';

// Mount components to the global islandjsRails namespace
window.islandjsRails = {
  HelloWorld,
  Reactions,
  Combobox
};