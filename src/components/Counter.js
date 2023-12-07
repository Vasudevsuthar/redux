import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.Counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementHandler2 = () => {
    dispatch(counterActions.incrementby2());
  };

  const decrementHandler2 = () => {
    dispatch(counterActions.decrementby2());
  };
  const incrementHandler5 = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler5 = () => {
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementHandler2}>Increment 2</button>
        <button onClick={decrementHandler2}>Decrement 2</button>
      </div>
      <div>
        <button onClick={incrementHandler5}>Increment 5</button>
        <button onClick={decrementHandler5}>Decrement 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler2() {
//     this.props.incrementby2();
//   }

//   decrementHandler2() {
//     this.props.decrementby2();
//   }

//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler2.bind(this)}>Increment 2</button>
//           <button onClick={this.decrementHandler2.bind(this)}>Decrement 2</button>
//         </div>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return{
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return{
//     incrementby2: () => dispatch({type: "incrementby2"}),
//     decrementby2: () => dispatch({type: "decrementby2"})
//   }
// }

export default Counter;
// (mapStateToProps, mapDispatchToProps)(Counter);
