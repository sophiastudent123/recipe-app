import React, { useEffect } from "react";

const Test = () => {
  const search = async () => {
    const url =
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "de1927aaa3msh4d2f36cda4943a8p108c2cjsnaea7cf5d7bae",
        "x-rapidapi-host": "tasty.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    search(), [];
  });
  return <div>Test</div>;
};

export default Test;
