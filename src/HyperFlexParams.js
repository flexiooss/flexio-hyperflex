export class HyperFlexParams {
  /**
   *
   * @param {Object} attributes
   * @param {Object} style
   * @param {string} text
   * @param {Node[]} children
   * @param {string[]} classList
   */
  constructor(attributes = {}, style = {}, text = '', children = [], classList = []) {
    this._attributes = attributes
    this._style = style
    this._text = text
    this._children = children
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
  get children() {
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
   * @param {Node[]} children
   * @return {HyperFlexParams}
   */
  static withChildren(children) {
    console.log('children')
    console.log(children)
    const p = new this({}, {}, '', children)
    p._children = children
    return p
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
