import PropTypes from "prop-types"

export function Button(props) {
    return (
        <>
            <button {...props} style={{color:"black"}}>{props.children}</button>
        </>
    )
}

Button.propTypes = {
    type: PropTypes.string
}