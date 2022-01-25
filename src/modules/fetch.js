import axios from 'axios';

const getGameResults = async (url) => {
  let result = '';
  try {
    const response = await axios.get(`${url}`);
    result = response.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  return result;
};

const addNewScore = async (url, score) => {
  let postData = '';
  try {
    const response = await axios.post(`${url}`, score);
    postData = response.data;
  } catch (errors) {
    console.log(errors);
  }
  return postData;
};
export { getGameResults, addNewScore };
