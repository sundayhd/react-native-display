# react-native-display
This module brings "Display: none" (css style) to turn on/off components from render. Using this module will improve your app performance and appearance with the enter/exit animations.

![intro](https://cloud.githubusercontent.com/assets/9949238/22396351/f1452940-e55f-11e6-8e9b-ae26396c2051.gif)

## Installation

`$ npm install react-native-display --save`

## Dependencies
[`react-native-animatable`](https://github.com/oblador/react-native-animatable)

## Usage
```js
import Display from 'react-native-display';
```
### Then, easy as:
```js
<Display enable={this.state.enable}>
  <Text> My custom components </Text>
</Display>
```

## Properties
#### ***`enter/exit`***  props using [react-native-animatable](https://github.com/oblador/react-native-animatable) for animation name.
| Prop | Description | Default |
|---|---|---|
|**`enable`**|`true` to render. `false` to not render. |`true`|
|**`defaultDuration`**|Default duration for enter and exit animations. |`250`|
|**`enterDuration`**|Duration for enter animation. |`250`|
|**`exitDuration`**|Duration for exit animation. |`250`|
|**`enter`**|Animation name to run when render (***enable=true***).<br/>Example: ***enter='fadeIn'*** |None|
|**`exit`**|Animation name to run when not render (***enable=false***).<br/>Example: ***exit='fadeOut'*** |None|
|**`style`**|Same *react-native* style for `View`. |None|
|**`keepAlive`**|When ***enable=false*** <br /> If `true` components will hide only ([`componentWillUnmount()`](https://facebook.github.io/react/docs/react-component.html#componentwillunmount) will not fire). <br />If `false` components will not render at all. Use it on complex components or on modules that required init on everytime that they are mount (for example: [react-native-camera](https://github.com/lwansbrough/react-native-camera)).  |`false`|

### Using inspector to validate that after exit animation component will not render: 

![demo2](https://cloud.githubusercontent.com/assets/9949238/22395957/8bde370e-e555-11e6-8440-38b85c7c284c.gif)

## Full example:
```js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Display from 'react-native-display';

export default class testdisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {enable: true};
  }

  toggleDisplay() {
    let toggle = !this.state.enable;
    this.setState({enable: toggle});
  }

  render() {
    return (
      <View>
        <View style={styles.button}>
          <Button
            onPress={this.toggleDisplay.bind(this)}
            title="Toggle display"
            color="#34495e"
            accessibilityLabel="Toggle display for show/hide circles"
          />
        </View>
        <View style={styles.center}>
          <Display 
            enable={this.state.enable} 
            enterDuration={500} 
            exitDuration={250}
            exit="fadeOutLeft"
            enter="fadeInLeft"
          >
            <View style={[styles.circle, {backgroundColor: '#2ecc71'}]} />
          </Display>
          <Display 
            enable={this.state.enable} 
            enterDuration={500} 
            exitDuration={250}
            exit="fadeOutDown"
            enter="fadeInUp"
          >
            <View style={[styles.circle, {backgroundColor: '#9b59b6'}]} />
          </Display>
          <Display 
            enable={this.state.enable} 
            enterDuration={500} 
            exitDuration={250}
            exit="fadeOutRight"
            enter="fadeInRight"
          >
            <View style={[styles.circle, {backgroundColor: '#3498db'}]} />
          </Display>
        </View>
      </View>
    );
  }
}

const styles = {
  button: {
    padding: 10,
    margin: 15,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    borderRadius: 50,
    height: 100,
    width: 100,
    margin: 15
  },
}

AppRegistry.registerComponent('testdisplay', () => testdisplay);
```

### Result:

![demo](https://cloud.githubusercontent.com/assets/9949238/22395868/50f73278-e553-11e6-8081-f253db9d8e22.gif)

### TODO:
* On start animation done event
* On exit animation done event
