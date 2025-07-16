import axios from "axios";

const apiHelper = async () => {
  try {
    const response = await axios();
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
