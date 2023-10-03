import SlideContext from '../../context'

import './index.css'

const SlideListItem = props => {
  const {details, serialNumber} = props
  const {heading, description} = details

  return (
    <SlideContext.Consumer>
      {value => {
        const {changeActiveTab, activeTab} = value
        const isActive = activeTab === serialNumber - 1
        const activeStyling = isActive ? 'active-styling' : ''

        const onClickSlideTab = () => {
          changeActiveTab(serialNumber - 1)
        }

        return (
          <li
            className={`slide-list-item ${activeStyling}`}
            onClick={onClickSlideTab}
            testid={`slideTab${serialNumber}`}
          >
            <p className="slide-number">{serialNumber}</p>
            <div className="slide-tab">
              <h1 className="tab-heading">{heading}</h1>
              <p className="tab-description">{description}</p>
            </div>
          </li>
        )
      }}
    </SlideContext.Consumer>
  )
}

export default SlideListItem
