// @flow
import { invariant } from '../invariant';
import isHtmlElement from './is-type-of-element/is-html-element';

export default function checkIsValidInnerRef(el: ?HTMLElement) {
  invariant(
    el && isHtmlElement(el),
    `
    provided.innerRef has not been provided with a HTMLElement.
  `,
  );
}
