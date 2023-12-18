// @flow

import { css } from '@emotion/css';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

type TabOptions = 'Signature' | 'Others' | 'Non-Alcoholic';

export default function Menu(): React$Node {
  const [tab, setTab] = React.useState('Signature');

  return (
    <Tabs
      value={tab}
      onChange={(_, tab) => setTab(tab)}
      textColor="secondary"
      indicatorColor="secondary">
      {['Signature', 'Others', 'Non-Alcoholic'].map((item) => {
        return <Tab value={item} label={item} />;
      })}
    </Tabs>
  );
}

// Styles

const styles = {
  root: css`
    display: grid;
    grid-template-columns: 20% auto;
    align-items: center;
    font-size: 15px;
    padding: 15px;
  `,
  text: css`
    border-left: 1px solid var(--purple);
    text-align: left;
    padding-left: 10px;
  `,
};
