import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('counter-element')
export class CounterElement extends LitElement {
  @property({ type: Number })
  counter = 0;

  private _increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <div class="counter">
        <button @click=${this._increment}>Increment</button>
        <p>Counter: ${this.counter}</p>
      </div>
    `;
  }

  static styles = css`
    .counter {
      text-align: center;
      margin-top: 1em;
    }
    button {
      padding: 0.5em;
      font-size: 1em;
    }
  `;
}