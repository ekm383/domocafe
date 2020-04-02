import React, { Component } from "react"

export default class Integration extends Component {
  componentDidMount() {
    function addScript(src) {
      var s = document.createElement("script")
      s.setAttribute("src", src)
      document.body.appendChild(s)
    }
    addScript("//web5.zuppler.com/common.js")
    addScript("//web5.zuppler.com/order.js")
  }
  render() {
    return (
      <div
        id="zuppler-menu"
        data-channel-url="http://api.zuppler.com/v3/channels/domocafe.json"
        data-integration="domocafedowntown"
        data-restaurant-id="7877"
        data-locale="en"
        data-item="simple"
        data-cart="simple"
        data-colors-background="#ffffff"
        data-colors-highContrast="#000000"
        data-colors-midContrast="#333333"
        data-colors-lowContrast="#999999"
        data-colors-brand="#c59d5f"
        data-colors-heroBackground="#9e5375"
        data-colors-heroContrast="#FFFFFF"
        data-fonts-heading="Oswald, helvetica, sans-serif"
        data-fonts-body="Open Sans, helvetica, sans-serif"
        data-fonts-deco="Open Sans, helvetica, sans-serif"
      >
        ><div id="zloading">Please wait. Loading menu...</div>
      </div>
    )
  }
}
