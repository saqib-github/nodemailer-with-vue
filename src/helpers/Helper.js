import axios from "axios";
export default {
  async Post(url, data) {
    return await axios
      .post(url, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  async GetById(url) {
    return await axios
      .get(url)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  GetAlldata: async (url) => {
    return await axios
      .get(url)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  async deleteById(url) {
    return await axios
      .delete(url)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  async updateById(url, data) {
    return await axios
      .put(url, data)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err.json();
      });
  },
};
