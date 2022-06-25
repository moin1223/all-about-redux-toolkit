import { useSelector,useDispatch} from "react-redux";
import { increment, decrement,incrementByAmount  } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
  
    return (
        <div>
            <button className='button' aria-label='Increment value'
      onClick={()=>{dispatch(increment())}} >
        <span className='value'> + </span>
     </button>
     <span className='value'>Count: {count}</span>
     <button className='button' aria-label='Decrement value'
      onClick={()=>{dispatch(decrement())}} >
        <span className='value'> - </span>
     </button> 
     <button className='button'
      onClick={()=>{dispatch(incrementByAmount(10))}} >
        <span className='value'> Increment by 10 </span>
     </button>

        </div>
    );
};

export default Counter;