import {deepMerge} from '@flexio-oss/js-type-helpers'

/**
 *
 */
export class HyperFlexParams {
  constructor() {
    /**
     *
     * @params {Object.<String, String>}
     * @private
     */
    this._attributes = {}
    /**
     *
     * @params {Object.<String, String>}
     * @private
     */
    this._properties = {}
    /**
     *
     * @params {Object.<String, String>}
     * @private
     */
    this._styles = {}
    /**
     *
     * @params {String}
     * @private
     */
    this._text = ''
    /**
     *
     * @params {Array.<Node>}
     * @private
     */
    this._childNodes = []
    /**
     *
     * @params {Array.<String>}
     * @private
     */
    this._classList = []
  }

  /**
   *
   * @return {Object.<String, String>}
   */
  styles() {
    return this._styles
  }

  /**
   *
   * @return {Object.<String, String>}
   */
  attributes() {
    return this._attributes
  }

  /**
   *
   * @return {Object.<String, String>}
   */
  properties() {
    return this._properties
  }

  /**
   *
   * @return {String}
   */
  text() {
    return this._text
  }

  /**
   *
   * @return {array.<Node>}
   */
  childNodes() {
    return this._childNodes
  }

  /**
   *
   * @return {array.<String>}
   */
  classList() {
    return this._classList
  }

  /**
   * @static
   * @param {array.<Node>} childNodes
   * @constructor
   * @return {HyperFlexParams}
   */
  static withChildNodes(childNodes) {
    return new this().addChildNodes(childNodes)
  }

  /**
   * @param {Object.<String, String>} attributes
   * @returns {HyperFlexParams}
   */
  static withAttributes(attributes) {
    return new this().addAttributes(attributes)
  }

  /**
   * @static
   * @param {Object.<String, String>} properties
   * @constructor
   * @return {HyperFlexParams}
   */
  static withProperties(properties) {
    return new this().addProperties(properties)
  }

  /**
   * @static
   * @param {Object.<String, String>} styles
   * @return {HyperFlexParams}
   */
  static withStyles(styles) {
    return new this().addStyles(styles)
  }

  /**
   * @static
   * @param {string} text
   * @constructor
   * @return {HyperFlexParams}
   */
  static withText(text) {
    return new this().addText(text)
  }

  /**
   *
   * @param {array.<Node>} childNodes
   * @return {this}
   */
  addChildNodes(childNodes) {
    this._childNodes = this._childNodes.concat(childNodes)
    return this
  }

  /**
   *
   * @param {Object.<String, String>} attributes
   * @return {this}
   */
  addAttributes(attributes) {
    this._attributes = deepMerge(this._attributes, attributes)
    return this
  }

  /**
   *
   * @param {Object.<String, String>} properties
   * @return {this}
   */
  addProperties(properties) {
    this._properties = deepMerge(this._properties, properties)
    return this
  }

  /**
   *
   * @param {String} text
   * @return {this}
   */
  addText(text) {
    this._text += text
    return this
  }

  /**
   *
   * @param {Object.<String, String>} styles
   * @returns {this}
   */
  addStyles(styles) {
    this._styles = deepMerge(this._styles, styles)
    return this
  }

  /**
   *
   * @param {String} className
   * @param { boolean} statement
   * @return {this}
   */
  bindClassName(className, statement) {
    if (statement === true) {
      this.addClassName(className)
    }
    return this
  }

  /**
   *
   * @param {...string} className
   * @return {this}
   */
  addClassName(...className) {
    this._classList.push(...className)
    return this
  }
}
