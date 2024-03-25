import axios from "axios";
export const getMessage = async (messages) => {
  try {
    const res = await axios.post(
      "https://chat-api-production-652b.up.railway.app/openai/chat",
      {
        messages,
      }
    );

    return res.data.result.message;
  } catch (err) {
    console.log(err);
  }
};
export const getImage = async (prompt) => {
  try {
    const res = await axios.post(
      "https://chat-api-production-652b.up.railway.app/openai/image",
      {
        prompt,
      }
    );

    return res;
  } catch (err) {
    console.log(err);
  }
};
