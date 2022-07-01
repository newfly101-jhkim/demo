import {Component} from "react";
import {LifeCycleSample} from "./LifeCycleSample";
import {BrowserRouter as Router, Link} from "react-router-dom";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0 // state 의 초기값 세팅
        }
    }
    render() {
        const {number} = this.state;
        return (
            <Router>
          <div>
              <h1>{number}</h1>
              <button onClick={() => {
                  this.setState({number: number + 1});
              }} >+1 </button>
              <button onClick={() => {
                  this.setState({number: 0});
              }} > reset</button>
              <Link to="/lifeCycleSample">LifeCycleSample</Link>
          </div>
            </Router>

        );
    }
}

export default Counter;