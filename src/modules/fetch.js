import axios from 'axios';

const getGameResults = async (url) => {
  try {
    const result = await axios.get(`${url}`);
    const Data = result.data;
    console.log(Data);
  } catch (error) {
    console.log(error);
  }
};

const addNewScore = async (url, score) => {
  try {
    const response = await axios.post(`${url}`, score);
    const postData = response.data;
    console.log(postData);
    return postData;
  } catch (errors) {
    console.log(errors);
  }
};
export { getGameResults, addNewScore };
