import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyDataList: [], isLoading: true}

  componentDidMount() {
    this.getAllCurrencyData()
  }

  getAllCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    console.log(formattedData)
    this.setState({currencyDataList: formattedData, isLoading: false})
  }

  render() {
    const {currencyDataList, isLoading} = this.state
    return (
      <div className="currenciesList">
        <h1 className="main_heading">CryptocurrencyTracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="main_img"
        />
        <div className="headingParas">
          <p>CoinType</p>
          <p>USD</p>
          <p>EURO</p>
        </div>
        <ul>
          {isLoading ? (
            <h2 className="rings" data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </h2>
          ) : (
            currencyDataList.map(each => (
              <CryptocurrencyItem obj={each} key={each.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
