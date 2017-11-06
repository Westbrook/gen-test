/**
 * `gen-test`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class GenTest extends Polymer.Element {
  /**
   * Element name to be used in the DOM
   * and for template finding
   *
   * @return {string}
   */
  static get is() {
    return 'gen-test';
  }
  /**
   * Properties to be made available
   * and their configurations
   */
  static get properties() {
    return {
      newProp: {
        type: String,
      },
      /**
       * Property that updates on demand in the browser-sync
       */
      anotherProp: {
        type: Boolean,
        value: false,
      },
      getExcited: {
        type: String,
        value: 'very exited!',
      },
    };
  }
  /**
   * My cool method
   * @param {string} property
   *
   * @return {string}
   */
  methodName(property) {
    return `${property} name`;
  }
};

customElements.define(GenTest.is, GenTest);
