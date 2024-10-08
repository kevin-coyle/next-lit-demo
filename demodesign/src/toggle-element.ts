import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('toggle-element')
export class ToggleElement extends LitElement {
  @property({ type: Boolean })
  isActive = false;

  private _toggle() {
    this.isActive = !this.isActive;
  }

  render() {
    return html`
      <div class="toggle">
        <button @click=${this._toggle}>
          ${this.isActive ? 'Deactivate' : 'Activate'}
        </button>
        <p>Status: ${this.isActive ? 'Active' : 'Inactive'}</p>
      </div>
    `;
  }

  static styles = css`
    .toggle {
      text-align: center;
      margin-top: 1em;
    }
    button {
      padding: 0.5em;
      font-size: 1em;
    }
  `;
}