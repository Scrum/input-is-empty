# input-is-empty
> Sets boolean data attribute if field is empty.

[![Travis Build Status](https://img.shields.io/travis/Scrum/input-is-empty/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/input-is-empty)[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/Scrum/input-is-empty/master.svg?style=flat-square&label=windows)](https://ci.appveyor.com/project/Scrum/input-is-empty)[![npm version](https://img.shields.io/npm/v/input-is-empty.svg?style=flat-square)](https://www.npmjs.com/package/input-is-empty)[![Dependency Status](https://david-dm.org/gitscrum/input-is-empty.svg?style=flat-square)](https://david-dm.org/scrum/input-is-empty)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/xojs/xo)

[![npm downloads](https://img.shields.io/npm/dm/input-is-empty.svg?style=flat-square)](https://www.npmjs.com/package/input-is-empty)[![npm](https://img.shields.io/npm/dt/input-is-empty.svg?style=flat-square)](https://www.npmjs.com/package/input-is-empty)


## Why?
Being a [void element](http://www.w3.org/TR/html5/syntax.html#void-elements), an `<input>` element is considered [empty](http://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.1) by the HTML definition of "empty", since the content model of all void elements *is always empty*. So they will always match the `:empty` pseudo-class, whether or not they have a value. This is also why their value is represented by an attribute in the start tag, rather than text content within start and end tags.  

## Install

```bash
$ npm install input-is-empty
```

## Usage
```js
import InputIsEmpty from 'input-is-empty';

const htmlInputElement = document.querySelector('input-selector');
const input = new InputIsEmpty(htmlInputElement, {/* options */});

```

> **Note:** Default is `change` Event

# Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <form accept-charset="utf-8">
        <input type="" name="">
    </form>
    <script type="module">
        import InputIsEmpty from 'input-is-empty';

        const htmlInputElement = document.querySelector('input');
        const input = new InputIsEmpty(htmlInputElement);
    </script>
</body>
</html>
```

## Options

#### `event`

Type: `String`  
Default: `change`  
Description: *Event at which the boolean date attribute value will change*
