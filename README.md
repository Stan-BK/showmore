# ShowMore
Solution of ‘show more‘. 

# Installation
```
npm install bk-showmore
```
## CommonJS
```
const ShowMore = require('showmore')
```
## ESM
```
import ShowMore from 'showmore'
```
# Usage
```html
<div id="app">
  <!-- this span can deal by showmore solution -->
  <span class="showmore"></span>
</div>
```
```javascript
ShowMore({
  wrap: '#app', // specify a scope, its childNode with class=“showmore” would have custom overflow solution
  callback: callback, // callback when click 'showmore' button
  isMultiline: true, // is Mulitiline situation, default by true
  text: 'showmore', // 'showmore' button's text
  color: 'deepskyblue' // 'showmore' button's color
})
```