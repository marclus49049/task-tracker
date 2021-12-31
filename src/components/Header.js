import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onToggleAddTask, showAddTask }) => {
    return (
        <header className='flex justify-between shrink-1 mb-6'>
            <h1 className='font-semibold text-3xl text-stone-700'>
                {title}
            </h1>
            <Button onClick={onToggleAddTask} text={showAddTask ? 'Close' : 'Add'} bgColor={showAddTask ? 'bg-rose-600 active:bg-rose-800 hover:bg-rose-500' : 'bg-emerald-700 active:bg-emerald-800 hover:bg-emerald-600'} />
        </header>
    )
}

// Default Props
Header.defaultProps = {
    title: 'Task Tracker'
}

// Prop Types
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
