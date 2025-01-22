import axios from "axios";

const fetchAccounts = async (query) => {
  try {
    const response = await axios.get(`http://localhost:5000/Accounts `, {
      params: { name_like: query },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching accounts:", error);
  }
};

fetchAccounts("Michael"); // Example search