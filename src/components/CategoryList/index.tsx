import React from 'react';
import { Text } from 'react-native';

import {
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
  List,
  CategoryItem
} from './styles';

import data from './data';

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9K</Info>
      </CategoryStatus>
    </CategoryContainer>
  )

  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
