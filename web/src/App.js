import React from 'react'
import TodoTemplate from "./Components/TodoTemplate";
import TodoInsert from "./Components/TodoInsert";
import TodoList from "./Components/TodoList";
// import LifeCycleSample from "./Test/LifeCycleSample";
// import ErrorBoundary from "./Test/ErrorBoundary";
// import Counter2 from "./Test/Counter2";


const App = () => {
    return <TodoTemplate>
        <TodoInsert />
        <TodoList />
    </TodoTemplate>;
};


{/*
class App extends Component {
    render(){
        return (<Counter2 />);
    }

};


function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


class App extends Component {
  state={
    color: '#000000'
  }

  handleClick= () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render(){
    // const {color} = this.props;
    // console.log('App.jsx : render');

    return (
        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <ErrorBoundary>
            <LifeCycleSample color={this.state.color} />
          </ErrorBoundary>
        </div>
    );
  }
}
*/}
export default App;

