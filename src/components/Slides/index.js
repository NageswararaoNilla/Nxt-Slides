import SlideListItem from '../SlideListItem'

import CurrentSlide from '../CurrentSlide'

import SlideContext from '../../context'

import './index.css'

const Slides = () => (
  <SlideContext.Consumer>
    {value => {
      const {slidesList} = value
      return (
        <div className="slides-container">
          <ol className="slides-list">
            {slidesList.map((eachSlide, index) => (
              <SlideListItem
                details={eachSlide}
                key={eachSlide.id}
                serialNumber={index + 1}
              />
            ))}
          </ol>
          <CurrentSlide />
        </div>
      )
    }}
  </SlideContext.Consumer>
)

export default Slides
