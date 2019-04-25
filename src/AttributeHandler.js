'use strict'
import {assert, isNode} from 'flexio-jshelpers'

/**
 * key of private flexio properties in Node
 * @params {symbol}
 * @export
 */
export const KEY_ROOT = Symbol('__flexio__')

/**
 * @class
 * @export
 */
export class AttributeHandler {
  /**
   *
   * @param {Node} element
   * @return {AttributeHandler}
   */
  constructor(element) {
    assert(
      isNode(element),
      'flexio-hyperflex:AttributeHandler:constructor: `element` argument assert be a ElementDescription, `%s` given',
      typeof element)
    this.element = element
    this._initRootAttribute()
    /**
     * @params {Object}
     */
    this.privateAttribute = this.element[KEY_ROOT]
  }

  /**
   * @static
   * @param {Node} element
   * @return {AttributeHandler}
   */
  static select(element) {
    return new AttributeHandler(element)
  }

  /**
   *
   * @private
   */
  _initRootAttribute() {
    if (!this._hasRootAttribute()) {
      this.element[KEY_ROOT] = {}
    }
  }

  /**
   *
   * @return {boolean}
   * @private
   */
  _hasRootAttribute() {
    return KEY_ROOT in this.element
  }

  /**
   *
   * @param {string} key
   * @param {*} value
   */
  setAttribute(key, value) {
    this.privateAttribute[key] = value
  }

  /**
   *
   * @return {Object}
   */
  getAttributes() {
    return this.privateAttribute
  }

  /**
   *
   * @param {Object} attributes
   */
  replaceAttributes(attributes) {
    this.element[KEY_ROOT] = attributes
  }
}
