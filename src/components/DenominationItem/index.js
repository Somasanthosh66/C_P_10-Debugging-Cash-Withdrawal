// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, withdrawAmount} = props
  const {value} = denominationDetails

  const withdrawBalance = () => {
    withdrawAmount(value)
  }
  return (
    <li className="denomination-list">
      <button className="button" type="button" onClick={withdrawBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
