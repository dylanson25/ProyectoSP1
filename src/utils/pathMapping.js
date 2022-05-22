import React from 'react';
import {CardPath, pathData} from '../components';

const pathMapping = navigation =>
  pathData.map(({icon, type, privileges, nav}, key) => (
    <CardPath
      key={key}
      icon={icon}
      type={type}
      privileges={privileges}
      navigation={navigation}
      nav={nav}
    />
  ));

export default pathMapping;
