// @flow

import React from 'react';
import './colorConstants.css';
import MobileRoot from './mobile/MobileRoot.tsx';
import DesktopRoot from './desktop/DesktopRoot.tsx';

export default function App() {
  return window.innerWidth < 500 ? <MobileRoot /> : <DesktopRoot />;
}
