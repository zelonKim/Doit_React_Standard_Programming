import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
    render() {
        return <div>{this.props.children}</div> // ChildProperty 컴포넌트의 자식노드를 반환함.
    }
}

ChildProperty.propTypes = {
    children: PropTypes.node
}

export default ChildProperty;