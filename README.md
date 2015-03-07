# ShrinkToFit.js
A very light jQuery plugin (only 604 bytes minified) that shrinks text to fit the parent container.

This is very handy when dealing with long headings. People speaking nordic languages may know exactly what I am talking about.

See this awfully long word in Finnish: **Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas** and try to keep that from breaking your layout.

## Basic Usage
```javascript
$('h1').ShrinkToFit();
```

## Options

```javascript
$('h1').ShrinkToFit({
  min: '10px', /* Default: 0px */
  wrap: false /* Default: true (white space cause the text to wrap to a new line) */
});
```

## Dependencies
jQuery 1.2.3

## Browsers compatibility
- IE8+
- Chrome
- Firefox
- Safari
- Opera
- iOS
- Android
