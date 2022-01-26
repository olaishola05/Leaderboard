import axios from 'axios';

const getGameResults = async (url) => {
  let result = '';
  try {
    const response = await axios.get(`${url}`);
    result = response.data;
  } catch (error) {
    throw error.message;
  }
  return result;
};

const addNewScore = async (url, score) => {
  let postData = '';
  try {
    const response = await axios.post(`${url}`, score);
    postData = response.data;
  } catch (errors) {
    throw errors.message;
  }
  return postData;
};
export { getGameResults, addNewScore };
