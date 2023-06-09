import React from 'react'
import PropTypes from 'prop-types'

class Counter2 extends React.Component {
    render() {
        return (
            <div>
                Current Count: {this.props.count}
                <button onClick = {() => this.props.onAdd()}>Count Up</button>
            </div>
        )
    }
}

Counter2.propTypes = {
    count: PropTypes.number,
    onAdd: PropTypes.func,
}

export default Counter2

