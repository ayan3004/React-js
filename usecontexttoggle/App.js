
import { useState } from 'react';
import Themeprovider from './Themeprovider';
import Toggletheme from './Toggletheme';
import Themecomponent from './Themecomponent';
import Themecomp from './Themecomp';
import Themec from './Themeco';

function App() {

  
  return (
    <Themeprovider>
    <Toggletheme/>
    <Themecomponent/>
    <Themecomp />
    <Themec />
  </Themeprovider>
  );
}

export default App;