import {Component} from "react";
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                hi my name is {name} <br />
                my children is {children} <br />
                my favorite number is {favoriteNumber} <br />
            </div>
        );
    }
}

MyComponent.defaultProps={
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};



export default MyComponent
