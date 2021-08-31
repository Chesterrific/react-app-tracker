import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, showAddTask, toggleAdd}) => {
  

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color= {`${showAddTask ? 'red': 'green'}`}
        text={`${showAddTask ? 'Close' : 'Add'} `}
        onClick={toggleAdd}
      ></Button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Default Task Name'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
