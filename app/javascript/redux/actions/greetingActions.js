// app/javascript/redux/actions/greetingActions.js
import axios from 'axios';

export const setGreeting = (greeting) => ({
  type: 'SET_GREETING',
  payload: greeting,
});

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/greetings/random');
    dispatch(setGreeting(response.data.greeting));
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};
