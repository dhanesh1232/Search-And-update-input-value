// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {getGoogleSuggestionList, onClickValue} = props
  const {suggestion} = getGoogleSuggestionList
  const onClickItem = () => {
    onClickValue(suggestion)
  }
  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" onClick={onClickItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
