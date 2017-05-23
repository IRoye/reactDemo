import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'hide': {
    'display': 'none'
  },
  'items li': {
    'listStyleType': 'none',
    'width': [{ 'unit': '%H', 'value': 0.15 }],
    'margin': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'item a': {
    'textDecoration': 'none',
    'color': 'white'
  },
  'star': {
    'color': 'white'
  },
  // 文字和图标对齐， 垂直方向， 把文字用span 包裹一下，然后，svg-icon 的话， 那个也需要把
style 调节一下， 设置一下vertical-align: middle
  'span': {
    'verticalAlign': 'middle'
  }
});
