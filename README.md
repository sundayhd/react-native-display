# react-native-display
This module brings "Display: none" (css style) to turn on/off components from render. Using this module will improve your app performance and appearance with the enter/exit animations.

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
|**`keepAlive`**|When ***enable=false*** <br /> If `true` components will hide only ([`componentWillUnmount()`](https://facebook.github.io/react/docs/react-component.html#componentwillunmount) will not fire). <br />If `false` components will not render at all Use it on complex components or on modules that required init on everytime that they are mount (for example: [react-native-camera](https://github.com/lwansbrough/react-native-camera)).  |`false`|

# HAVE FUN :-)
