import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function Counter() {
    const dispatch=  useDispatch()
    const counter= useSelector(state=>state.counter)
const toggleCounterHandler = () =>{

}
const Increment=()=>{
    dispatch({type:'INCREMENT'})
}
const decrement=()=>{
    dispatch({type:'DECREMENT'}) 
}
    return (
    <div><h1>Counter
        </h1> 
<div>{counter}</div>

<div>
    <button onClick={Increment} >+</button>
    <button onClick={decrement} >-</button>
</div>
<button onClick={toggleCounterHandler} >toggle Counter</button>

    </div>
  )
}

export default Counter