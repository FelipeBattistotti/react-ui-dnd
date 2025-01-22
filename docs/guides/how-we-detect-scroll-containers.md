# How we detect scroll containers

> Generally you will not need to read this guide 😊. Detection of scroll containers "should just work". However, if you are having issues with it you can dig more deeply into this guide 🕵️‍

`react-ui-dnd` will automatically detect the scroll containers for your application when a drag is starting. It does this by looking at the _computed_ `overflowX` and `overflowY` values of an element.

If `react-ui-dnd` finds an element that has a _computed_ `overflowX` or `overflowY` set to `scroll` or `auto` then that element is marked as a scroll container.

## Background information about `overflow`

The css property `overflow` (and `overflow-x`, `overflow-y`) controls what happens when the content of an element is bigger than the elements size.

> For more information about `overflow` you can check out the [CSS-Tricks overflow guide](https://css-tricks.com/almanac/properties/o/overflow/) or the [MDN overflow guide](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)

### `overflow` values

- `visible`: _(default)_ content will grow beyond boundary of any containing box without any clipping or scroll bars
- `scroll`: clip overflow and always show a scroll bar, even if there is no content being overflowed
- `auto`: clip overflow and only show scroll bar if there is any content in the overflow

### Shorthand

Setting `overflow: $value` is the same as setting `overflow-x: $value` and `overflow-y: $value`

### _Computed_ values

If only one axis has `overflow-[x|y]: hidden` and the other is `visible` _(the default value)_ then it will be _computed_ as `auto`.

> Computed value: as specified, except with visible/clip computing to auto/hidden (respectively) if one of overflow-x or overflow-y is neither visible nor clip
>
> - https://www.w3.org/TR/css-overflow-3/#overflow-properties

## `<body>`

`document.body` (`<body>`) is different from `document.documentElement` (the `<html>` element). Any scroll on the `html` element is considered a `window` scroll. Most of the time any scroll bar that would have appeared on the `body` will be merged with the `html` scroll bar. However, there are situations where they can have different scrollable areas.

⚠️ We have not been able to find a reliable cross browser mechanism for detecting if a `body` has an independent scroll bar to the `html` element.

The `body` element _can_ be a scroll container if:

1. the `body` element has `overflow-[x|y]` set to `auto` or `scroll` AND
2. the `html` element has `overflow-x` or `overflow-y` set to anything other than `visible` (the default)

There seems to also be an additional requirement that we have not been able to accurately quantify regarding the relationship of the sizes of the `html` and `body` elements.

[← Back to documentation](/README.md#documentation-)
