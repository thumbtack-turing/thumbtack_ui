import React, { useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import Switch from 'react-switch';
import { currentThemeVar } from '../client/cache';
import lightBulbOff from '../assets/light-bulb-off.png';
import lightBulbOn from '../assets/light-bulb-on.png';

const LightDarkModeToggle = () => {

  // const handleChange = (checked: boolean) => {
  //   setChecked(checked);
  //   toggleTheme();
  // }

  const { theme: currentTheme } = useReactiveVar(currentThemeVar);
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  const [ checked, setChecked ] = useState(currentTheme === 'dark');

  const toggleTheme = () => {
    currentThemeVar({ theme: newTheme });
    setChecked(!checked);
  }

  return (
    <label className='light-dark-mode-toggle'>
      <span className='light-dark-mode-label'></span>
      <Switch
        onChange={ toggleTheme }
        checked={ checked }
        onColor='#86d3ff'
        onHandleColor='#2693e6'
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        uncheckedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 20
            }}
          >
            <img
              className='toggle-icon'
              src={ lightBulbOn }
              alt='light bulb on icon'
            />
          </div>
        }
        checkedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 20
            }}
          >
            <img
              className='toggle-icon'
              src={ lightBulbOff }
              alt='light bulb off icon'
            />
          </div>
        }
        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
        height={20}
        width={48}
        className='react-switch'
        id='material-switch'
      />
      <span className='light-dark-mode-label'></span>
    </label>
  )
}

export default LightDarkModeToggle;
