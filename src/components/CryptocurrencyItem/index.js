import './index.css'

const CryptocurrencyItem = props => {
  const {obj} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = obj
  return (
    <li className="CryptocurrencyItem">
      <div className="imageAndNameContainer">
        <img src={currencyLogo} alt={currencyName} className="imgItem" />
        <p>{currencyName}</p>
      </div>
      <p>{usdValue}</p>
      <p>{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
