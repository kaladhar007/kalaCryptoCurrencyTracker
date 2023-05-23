import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

const appLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenyDetails()
  }

  getCurrenyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const currencyDetails = await response.json()
    const convertedDetails = currencyDetails.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    console.log(convertedDetails)
    this.setState({currencyList: convertedDetails, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="currencyItem_container">
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="CryptocurrenciesList">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img src={appLogoUrl} alt="cryptocurrency" className="app_logo" />
            <ul className="ul_container">
              <div className="table_heading_container">
                <p className="coinType">Coin Type</p>
                <p className="usd">USD</p>
                <p className="euro">EURO</p>
              </div>
              {currencyList.map(eachObject => (
                <CryptocurrencyItem
                  currencyDetails={eachObject}
                  key={eachObject.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
