import {deepMerge} from 'flexio-jshelpers'

export class HyperFlexParams {
  constructor() {
    /**
     *
     * @type {Object<String, String>}
     * @private
     */
    this._attributes = {}/**
     *
     * @type {Object<String, String>}
     * @private
     */
    this._properties = {}
    /**
     *
     * @type {Object<String, String>}
     * @private
     */
    this._styles = {}
    /**
     *
     * @type {String}
     * @private
     */
    this._text = ''
    /**
     *
     * @type {Array<Node>}
     * @private
     */
    this._childNodes = []
    /**
     *
     * @type {Array<String>}
     * @private
     */
    this._classList = []
  }

  /**
   *
   * @return {Object<String, String>}
   */
  get styles() {
    return this._styles
  }

  /**
   *
   * @return {Object<String, String>}
   */
  get attributes() {
    return this._attributes
  }

  /**
   *
   * @return {Object<String, String>}
   */
  get properties() {
    return this._properties
  }

  /**
   *
   * @return {String}
   */
  get text() {
    return this._text
  }

  /**
   *
   * @return {array<Node>}
   */
  get childNodes() {
    return this._childNodes
  }

  /**
   *
   * @return {array<String>}
   */
  get classList() {
    return this._classList
  }

  /**
   * @static
   * @param {array<Node>} childNodes
   * @return {this}
   */
  static withChildNodes(childNodes) {
    return new this().addChildNodes(childNodes)
  }

  /**
   * @static
   * @param {Object<String, String>} attributes
   * @return {HyperFlexParams}
   */
  static withAttributes(attributes) {
    return new this().addAttributes(attributes)
  }

  /**
   * @static
   * @param {Object<String, String>} properties
   * @return {HyperFlexParams}
   */
  static withProperties(properties) {
    return new this().addProperties(properties)
  }

  /**
   * @static
   * @param {Object<String, String>} styles
   * @return {HyperFlexParams}
   */
  static withStyles(styles) {
    return new this().addStyles(styles)
  }

  /**
   * @static
   * @param {string} text
   * @return {HyperFlexParams}
   */
  static withText(text) {
    return new this().addText(text)
  }

  /**
   *
   * @param {array<Node>} childNodes
   * @return {HyperFlexParams}
   */
  addChildNodes(childNodes) {
    this._childNodes = this._childNodes.concat(childNodes)
    return this
  }

  /**
   *
   * @param {Object<String, String>} attributes
   * @return {HyperFlexParams}
   */
  addAttributes(attributes) {
    this._attributes = deepMerge(this._attributes, attributes)
    return this
  }

  /**
   *
   * @param {Object<String, String>} properties
   * @return {HyperFlexParams}
   */
  addProperties(properties) {
    this._properties = deepMerge(this._properties, properties)
    return this
  }

  /**
   *
   * @param {String} text
   * @return {HyperFlexParams}
   */
  addText(text) {
    this._text += text
    return this
  }

  /**
   *
   * @param {Object<String, String>} styles
   * @return {HyperFlexParams}
   */
  addStyles(styles) {
    this._styles = deepMerge(this._styles, styles)
    return this
  }
}
