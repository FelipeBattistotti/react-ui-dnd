// @flow
import { invariant } from '../invariant';
import isHtmlElement from './is-type-of-element/is-html-element';

export default (ref: ?mixed) => {
  invariant(
    ref && isHtmlElement(ref),
    `
    provided.innerRef has not been provided with a HTMLElement.
  `,
  );
};
