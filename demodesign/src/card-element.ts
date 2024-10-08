import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('card-element')
export class CardElement extends LitElement {
  render() {
    return html`
      <div class="card">
        <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="body">
          <slot></slot>  <!-- Default slot for body content -->
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }

  static styles = css`
    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 16px;
      max-width: 400px;
      margin: auto;
    }

    .header, .footer {
      background-color: #f9f9f9;
      padding: 8px;
      text-align: center;
      font-weight: bold;
    }

    .body {
      padding: 16px;
      text-align: left;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'card-element': CardElement;
  }
}