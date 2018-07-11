export class HyperFlexParams {
  /**
   *
   * @param {Object} attributes
   * @param {Object} style
   * @param {string} text
   * @param {Node[]} childNodes
   * @param {string[]} classList
   */
  constructor(attributes = {}, style = {}, text = '', childNodes = [], classList = []) {
    this._attributes = attributes
    this._style = style
    this._text = text
    this._childNodes = childNodes
    this._classList = classList
  }

  /**
   *
   * @return {Object}
   */
  get style() {
    return this._style
  }

  /**
   *
   * @return {Object}
   */
  get attributes() {
    return this._attributes
  }

  /**
   *
   * @return {string}
   */
  get text() {
    return this._text
  }

  /**
   *
   * @return {Node[]}
   */
  get childNodes() {
    return this._children
  }

  /**
   *
   * @return {string[]}
   */
  get classList() {
    return this._classList
  }

  /**
   * @static
   * @param {Node[]} childNodes
   * @return {HyperFlexParams}
   */
  static withChildNodes(childNodes) {
    return new this({}, {}, '', childNodes)
  }

  /**
   * @static
   * @param {Object} attributes
   * @return {HyperFlexParams}
   */
  static withAttributes(attributes) {
    return new this(attributes)
  }

  /**
   * @static
   * @param {Object} style
   * @return {HyperFlexParams}
   */
  static withStyle(style) {
    return new this({}, style)
  }

  /**
   * @static
   * @param {string} text
   * @return {HyperFlexParams}
   */
  static withText(text) {
    return new this({}, {}, text, [])
  }
}
