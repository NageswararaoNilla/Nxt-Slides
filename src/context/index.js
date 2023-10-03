import React from 'react'

const SlideContext = React.createContext({
  slidesList: [],
  activeTab: 0,
  changeActiveTab: () => {},
  addNewSlide: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default SlideContext
