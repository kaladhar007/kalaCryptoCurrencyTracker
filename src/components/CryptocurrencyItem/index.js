import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {currencyDetails} = this.props
    const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
    return (
      <li className="li_container">
        <div className="logoAndName">
          <img
            src={currencyLogo}
            alt={currencyName}
            className="currency_logo"
          />
          <p className="currencyName">{currencyName}</p>
        </div>
        <p className="usd_value">{usdValue}</p>
        <p className="euro_value">{euroValue}</p>
      </li>
    )
  }
}

export default CryptocurrencyItem
