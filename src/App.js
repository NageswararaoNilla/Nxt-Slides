import {Component} from 'react'

import Header from './components/Header'
import NewButton from './components/NewButton'
import Slides from './components/Slides'

import SlideContext from './context'

import './App.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    slidesList: initialSlidesList,
    activeTab: 0,
  }

  changeActiveTab = index => {
    this.setState({activeTab: index})
  }

  addNewSlide = item => {
    const {activeTab} = this.state
    this.setState(prevState => {
      const {slidesList} = prevState
      const newList = slidesList.splice(activeTab + 1, 0, item)
      return {slidesList: [...newList]}
    })
  }

  changeHeading = value => {
    const {activeTab} = this.state
    this.setState(prevState => {
      const {slidesList} = prevState
      const newList = slidesList.map((eachItem, index) => {
        if (activeTab === index) {
          return {...eachItem, heading: value}
        }
        return eachItem
      })
      return {slidesList: newList}
    })
  }

  changeDescription = value => {
    const {activeTab} = this.state
    this.setState(prevState => {
      const {slidesList} = prevState
      const newList = slidesList.map((eachItem, index) => {
        if (activeTab === index) {
          return {...eachItem, description: value}
        }
        return eachItem
      })
      return {slidesList: newList}
    })
  }

  render() {
    const {slidesList, activeTab} = this.state
    // console.log(activeTab, slidesList)
    return (
      <div>
        <Header />
        <SlideContext.Provider
          value={{
            slidesList,
            activeTab,
            changeActiveTab: this.changeActiveTab,
            addNewSlide: this.addNewSlide,
            changeHeading: this.changeHeading,
            changeDescription: this.changeDescription,
          }}
        >
          <>
            <NewButton />
            <Slides />
          </>
        </SlideContext.Provider>
      </div>
    )
  }
}

export default App
