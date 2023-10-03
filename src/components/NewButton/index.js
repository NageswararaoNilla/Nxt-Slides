import {v4 as uuidv4} from 'uuid'

import SlideContext from '../../context'

import './index.css'

const NewButton = () => (
  <SlideContext.Consumer>
    {value => {
      const {addNewSlide, activeTab, changeActiveTab} = value

      const onClickAddButton = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewSlide(item)
        changeActiveTab(activeTab + 1)
      }

      const onDoubleClickBtn = () => {
        console.log('DoubleClicked')
      }

      return (
        <div className="button-container">
          <button
            type="button"
            className="new-button"
            onClick={onClickAddButton}
            onDoubleClick={onDoubleClickBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            New
          </button>
        </div>
      )
    }}
  </SlideContext.Consumer>
)

export default NewButton
