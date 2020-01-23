import React from 'react'
import {connect} from 'react-redux'
import { fetchActivity } from '../actions'

const Joke = (props) => {
  return (
    <div>
       <p>Jokes Bro</p>
      
       <button onClick={props.fetchActivity}>Get Joke</button>
         {!props.joke && !props.isLoading && (
           <h2>Make yourself Laugh</h2>
         )}

      {props.joke && !props.isLoading && <h2>{props.joke}</h2>}
    </div>
  )
}







const mapStateToProps = state => {
  console.log('this is state', state.joke)
  return {
    isLoading: state.isLoading,
    joke: state.joke,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchActivity }
)(Joke);

