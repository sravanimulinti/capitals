import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activateCapital: countryAndCapitalsList[0].id}

  selectOption = e => {
    this.setState({activateCapital: e.target.value})
  }

  capitalSelect = () => {
    const {activateCapital} = this.state
    const activeSelect = countryAndCapitalsList.find(
      each => each.id === activateCapital,
    )

    return activeSelect.country
  }

  render() {
    // eslint-disable-next-line
    const {activateCapital} = this.state
    const country = this.capitalSelect(activateCapital)
    return (
      <div className="bg">
        <div className="box">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="container">
            <select
              className=""
              onChange={this.selectOption}
              key={activateCapital}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option className="para1" key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">Is capital of which country?</p>
          </div>
          <p className="heading">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
