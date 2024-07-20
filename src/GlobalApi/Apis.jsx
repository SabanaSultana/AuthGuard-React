//Global URL

const BaseUrl = "https://dummyjson.com";
const userURL = BaseUrl + "/products/";

//get url
export const getUrl = {
    getSingleProduct:userURL+'1'
};
export const postUrl = {
  login: userURL + "login",
};

// export const loginRequest = async (url, body) => {
//   try {
//     const response = await fetch(login, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         //   'Authorization': jwtToken,
//       },
//       body: JSON.stringify(body),
//     });
//   } catch (error) {}
// };


export const fetchedGetRequest = async (url) => {
  // const jwtToken = sessionStorage.getItem('Token')
  try {
    const response = await fetch(url, {
      method: "GET",
      // headers: {
      //   'Authorization': jwtToken,
      // },
    });
    if (!response.ok) {
      return await response.json();
      // throw new Error(`Network response was not ok`);
    }
    return await response.json();
  } catch (e) {
    throw new Error(`Error fetchin data: ${e.message}`);
  }
};
