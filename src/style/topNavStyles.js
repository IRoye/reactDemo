import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'list li': {
    'float': 'left',
    'listStyleType': 'none',
    // 把li 元素设置为  relative ， 为 隐藏ul 元素的定位提供了定位上下文
    'position': 'relative'
  },
  'list ul': {
    'float': 'left'
  },
  'list a': {
    'display': 'block',
    'textDecoration': 'none'
  },
  'app-topnav': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'app-topnav li:hover': {
    'backgroundColor': '#BDBDBD'
  },
  'app-topnav li': {
    'transition': '1s'
  },
  // 临时隐藏低级菜单
  'list li ul': {
    'display': 'none',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    // 这样可以设置顶部与菜单栏的底部相对齐
    'top': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'em', 'value': 9 }],
    'backgroundColor': 'black'
  },
  'list li li': {
    // 二级菜单恢复上下堆叠
    // 元素浮动后， 该元素的display值是： block
    'float': 'none'
  },
  'list li li a': {
    'height': [{ 'unit': 'em', 'value': 2 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 2 }],
    'color': 'white'
  },
  // 父元素悬停的时候显示
  'list li:hover > ul': {
    'display': 'block'
  },
  'toDown': {
    'borderColor': 'black transparent transparent transparent'
  },
  'toUp': {
    'borderColor': 'black transparent transparent transparent',
    'transform': 'rotate(180deg)'
  }
});
