import PropTypes from 'prop-types'

const Button = ({
    bgColor, text, textColor, onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`${bgColor} ${textColor} font-normal text-base px-4 py-2 rounded active:scale-95`}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    bgColor: 'bg-emerald-700 active:bg-emerald-800 hover:bg-emerald-600',
    text: 'Add',
    textColor: 'text-white',
}

Button.propTypes = {
    bgColor: PropTypes.string,
    text: PropTypes.string,
    textColor: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button
