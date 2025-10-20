// src/data/index.js

// 1. Import ALL five lists
import mesopotamianNames from './mesopotamian.json'; 
import greekNames from './greek.json'; 
import romanNames from './roman.json';
import egyptianNames from './egyptian.json';
import chineseNames from './chinese.json'; // <--- NEW IMPORT!

// 2. Put ALL lists into the one big exported box (allNames)
const allNames = {
  mesopotamian: mesopotamianNames,
  greek: greekNames, 
  roman: romanNames,
  egyptian: egyptianNames,
  chinese: chineseNames, // <--- NEW ENTRY!
};

// 3. Export the entire box
export default allNames;