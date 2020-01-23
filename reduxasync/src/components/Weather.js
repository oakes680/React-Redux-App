import React from 'react'
import {connect} from 'react-redux'
import { fetchActivity } from '../actions'
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Joke = (props) => {
  const dispatch = useDispatch();

  const bjoke = useSelector(state => state.joke);
  // const isLoading = useSelector(state => state.isLoading);
  // const error = useSelector(state => state.joke);
  console.log('hooks', bjoke)


  return (
    <div>
       <h1 className='title'>Jokes Bro</h1>
      
      <button className='button' onClick={props.fetchActivity}>Get Joke</button>
         {!props.joke && !props.isLoading && (
        <h2 className='subTitle'>Make yourself Laugh</h2>
         )}

      {props.isLoading && (
        <Loader
          type="Watch"
          color="#00B"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}

      {props.joke && !props.isLoading && <h2 className='joke'>{props.joke}</h2>}
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

// export default Joke

