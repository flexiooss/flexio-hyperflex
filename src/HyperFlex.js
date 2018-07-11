import {
  assert,
  isString,
  isNumber,
  isNode,
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
    this._querySelector = querySelector
    this._hyperFlexParams = hyperFlexParams
    this._element = null
  }

  /**
   * @static
   * @param {string} querySelector
   * @param {HyperFlexParams} params
   * @return {Node}
   */
  static html(querySelector, hyperFlexParams) {
    return new HyperFlex(querySelector, hyperFlexParams).createHtmlElement()
  }

  /**
   * Shortcut for document.createElement
   * @param {String} querySelector : tag#myId.class1.class2
   * @param {Object | String | Number | NodeElement} Attributes & styles |text | childNodes
   *    - {Object} Attributes & styles { attribute: value,  ...,  style:{ rule: value, ... }}
   *    - {String | Number} Text for append TextNode
   *    - {NodeElement} NodeElement for append
   * @returns {Node}
   */
  createHtmlElement() {
    const {
      tag,
      id,
      classList
    } = this._parseQuerySelector(this._querySelector)

    this._element = document.createElement(tag)
    this._setId(id)
    this._setClassList(classList)
    this._setParams()
    return this._element
  }

  /**
   *
   * @param {string} querySelector : tag#myId.class1.class2...
   * @returns {Object} { tag, id, classList }
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
   * @private
   */
  _setId(id) {
    if (id) {
      this._element.id = id
    }
  }

  /**
   * @private
   */
  _setParams() {
    this._setAttributes(this._hyperFlexParams.attributes())
    this._setClassList(this._hyperFlexParams.classList())
    this._setStyles(this._hyperFlexParams.style())
    this._setText(this._hyperFlexParams.text())
    this._setChildNodes(this._hyperFlexParams.childNodes())
  }

  /**
   * @private
   * @param {Object} styles
   * @returns {void}
   */

  _setStyles(styles) {
    assert(isObject(styles),
      'flexio-hyperflex:setStyles: `styles` argument assert be an Object `%s` given',
      typeof styles
    )

    for (let key in styles) {
      this._element.style[key] = styles[key]
    }
  }

  /**
   * @private
   * @param {Object} attributes
   * @returns {void}
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
  }

  /**
   *
   * @param {string[]} classList
   * @private
   */
  _setClassList(classList) {
    if (classList.length) {
      this._element.classList.add(...classList)
    }
  }

  /**
   * @private
   * @param {string} text
   * @return {void}
   */
  _setText(text) {
    if (text !== '') {
      this._element.appendChild(document.createTextNode(text))
    }
  }

  /**
   *
   * @param {Node[]} childNodes
   * @private
   */
  _setChildNodes(childNodes) {
    const countOfChildren = childNodes.length
    for (let i = 0; i < countOfChildren; i++) {
      this._element.appendChild(childNodes[i])
    }
  }
}

export {
  HyperFlex
}

export const html = HyperFlex.html
