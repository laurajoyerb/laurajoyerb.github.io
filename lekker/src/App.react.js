// @flow

import React from 'react';
import './colorConstants.css';
import MobileRoot from './mobile/MobileRoot.react';
import DesktopRoot from './desktop/DesktopRoot.react';

export default function App(): React$Node {
  return window.innerWidth < 500 ? <MobileRoot /> : <DesktopRoot />;
}
