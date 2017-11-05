/**
 * `gen-test`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class GenTest extends Polymer.Element {
  static get is() { return 'gen-test'; }
  static get properties() {
    return {
      newProp: {
        type: String
      },
      /**
       * Property that updates on demand in the browser-sync
       */
      anotherProp: {
        type: Boolean,
        value: false
      }
    };
  }
};

customElements.define(GenTest.is, GenTest);
