// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInputValues = event => {
    this.setState({searchInput: event.target.value})
  }

  clickChange = suggestion => {
    console.log(suggestion)
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="container">
        <div className="inner">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google Logo"
            className="logo"
          />
          <div className="searchPage">
            <div className="inputDisplay">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search"
              />
              <input
                type="search"
                className="input"
                placeholder="Search Google"
                onChange={this.onChangeInputValues}
                value={searchInput}
              />
            </div>
            <ul>
              {searchResult.map(each => (
                <SuggestionItem
                  getGoogleSuggestionList={each}
                  key={each.id}
                  onClickValue={this.clickChange}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
