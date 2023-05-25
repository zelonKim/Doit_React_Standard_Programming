import React from 'react';
import PropTypes from 'prop-types'

function SFC(props, context) {
    const { somePropValue } = props; // 클래스형 컴포넌트의 this.props값과 동일함.
    const { someContextValue } = context; // 클래스형 컴포넌트의 this.context값과 동일함.
    return <h1>Hello, {somePropValue}</h1>
}

SFC.propTypes = {somePropValue: PropTypes.any}
SFC.defaultProps = { somePropValue: 'default value'}

export default SFC;
