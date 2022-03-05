var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://random-palette-generator.p.rapidapi.com/palette/10/3",
  headers: {
    "x-rapidapi-host": "random-palette-generator.p.rapidapi.com",
    "x-rapidapi-key": "13c31e2c46mshe091625ebaddd3ep1f6740jsnb6d721c89b72",
  },
};

export const getRandomColor = (setColor) => {
  axios
    .request(options)
    .then(function (response) {
      setColor(response.data.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
