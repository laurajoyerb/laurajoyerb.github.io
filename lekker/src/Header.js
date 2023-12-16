// @flow

import './root.css';

import React from 'react';

export default function Header(): React$Node {
  return (
    <img
      className="header"
      src="./images/header.png"
      alt="lekker cabinet logo"
    />
  );
}
