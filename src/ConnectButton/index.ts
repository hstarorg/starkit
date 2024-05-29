import { connect, disconnect } from 'get-starknet';
// import {
//   getStarknet
//   disconnect,
//   enable,
//   getAvailableWallets,
//   getDiscoveryWallets,
//   getLastConnectedWallet,
//   getPreAuthorizedWallets,
// } from 'get-starknet-core';

import { html, css, LitElement } from 'lit';

export class ConnectButton extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static properties = {
    name: { type: String },
  };

  test() {
    const a = connect();
    console.log(a);
  }

  render() {
    return html`<button @click=${this.test}>Hello</button>`;
  }
}

customElements.define('sk-connect-button', ConnectButton);
