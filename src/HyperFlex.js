import {
  assert,
  isString,
  isObject
} from 'flexio-jshelpers'
import {HyperFlexParams} from './HyperFlexParams'

class HyperFlex {
  /**
   *
   * @param {string} querySelector
   * @param {HyperFlexParams} hyperFlexParams
   * @return {HyperFlex}
   */
  constructor(querySelector, hyperFlexParams) {
    assert(isString(querySelector),
      'flexio-hyperflex:constructor: `querySelector` argument assert be a String `%s` given',
      typeof querySelector
    )
    assert(hyperFlexParams instanceof HyperFlexParams,
      'flexio-hyperflex:constructor: `hyperFlexParams` property should be an instanceof `HyperFlexParams`, `%s` given',
      typeof hyperFlexParams
    )
    /**
     *
     * @type {string}
     * @private
     */
    this._querySelector = querySelector
    /**
     *
     * @type {HyperFlexParams}
     * @private
     */
    this._params = hyperFlexParams
    /**
     *
     * @type {Node}
     * @private
     */
    this._element = null
  }

  /**
   * @static
   * @param {string} querySelector
   * @param {HyperFlexParams} params
   * @return {Node}
   */
  static html(querySelector, hyperFlexParams) {
    return new HyperFlex(querySelector, hyperFlexParams).createHtmlElement()._element
  }

  /**
   * Create Html Element and set `_element` property
   * @return {HyperFlex}
   */
  createHtmlElement() {
    const {
      tag,
      id,
      classList
    } = this._parseQuerySelector(this._querySelector)

    this._element = document.createElement(tag)

    return this._setId(id)
      ._setClassList(classList)
      ._setParams()
  }

  /**
   *
   * @return {Node}
   */
  get element() {
    return this._element
  }

  /**
   *
   * @param {string} querySelector : tag#myId.class1.class2...
   * @returns {Object} { tag: String, id: String, classList: Array<String> }
   *
   */
  _parseQuerySelector(querySelector) {
    const matches = new RegExp('^([\\w-]*)([#\\w\\d-_]*)?([.\\w\\d-_]*)?$', 'gi').exec(querySelector)
    const tag = matches[1]
    assert(!!tag,
      'flexio-hyperflex:parseQuerySelector: `tag` argument assert not be empty'
    )
    const id = (matches[2]) ? matches[2].substr(1) : ''
    const classList = (matches[3]) ? matches[3].substr(1).split('.') : []
    return {
      tag,
      id,
      classList
    }
  }

  /**
   *
   * @param {string} id
   * @return {HyperFlex}
   * @private
   */
  _setId(id) {
    if (id) {
      this._element.id = id
    }
    return this
  }

  /**
   * @private
   * @return {HyperFlex}
   */
  _setParams() {
    return this._setAttributes(this._params.attributes)
      ._setProperties(this._params.properties)
      ._setClassList(this._params.classList)
      ._setStyles(this._params.styles)
      ._setText(this._params.text)
      ._setChildNodes(this._params.childNodes)
  }

  /**
   * @private
   * @param {Object} styles
   * @return {HyperFlex}
   */

  _setStyles(styles) {
    assert(isObject(styles),
      'flexio-hyperflex:setStyles: `styles` argument assert be an Object `%s` given',
      typeof styles
    )

    for (let key in styles) {
      this._element.style[key] = styles[key]
    }
    return this
  }

  /**
   * @private
   * @param {Object} attributes
   * @return {HyperFlex}
   */
  _setAttributes(attributes) {
    assert(isObject(attributes),
      'flexio-hyperflex:setAttributes: `attributes` argument assert be an Object `%s` given',
      typeof attributes
    )

    for (let key in attributes) {
      if (attributes[key] !== null) {
        this._element.setAttribute(key, attributes[key])
      }
    }
    return this
  }

  /**
   * @private
   * @param {Object} properties
   * @return {HyperFlex}
   */
  _setProperties(properties) {
    assert(isObject(properties),
      'flexio-hyperflex:_setProperties: `properties` argument assert be an Object `%s` given',
      typeof properties
    )

    for (let key in properties) {
      if (properties[key] !== null) {
        this._element[key] = properties[key]
      }
    }
    return this
  }

  /**
   *
   * @param {Array<String>} classList
   * @private
   * @return {HyperFlex}
   */
  _setClassList(classList) {
    if (classList.length) {
      this._element.classList.add(...classList)
    }
    return this
  }

  /**
   * @private
   * @param {string} text
   * @return {HyperFlex}
   */
  _setText(text) {
    if (text !== '') {
      this._element.appendChild(document.createTextNode(text))
    }
    return this
  }

  /**
   *
   * @param {Array<Node>} childNodes
   * @private
   * @return {HyperFlex}
   */
  _setChildNodes(childNodes) {
    const countOfChildren = childNodes.length
    for (let i = 0; i < countOfChildren; i++) {
      this._element.appendChild(childNodes[i])
    }
    return this
  }
}

export {HyperFlex}
export const html = HyperFlex.html
