const axios = require('axios');


/*async generateActivitySuggestions(weather, location) {
  try {
    // Simulate fetching activities from an API or database based on weather and location
    const response = await fetch(`https://api.example.com/activities?weather=${weather}&location=${location}`);
    const data = await response.json();

    // Extract the list of activities from the response
    const activities = data.activities;

    return activities;
  } catch (error) {
    console.error('Error generating activity suggestions:', error.message);
    throw error; // Propagate the error if needed
  }
}*/


const generateActivitySuggestions = async (weather, location) => {
  const apiKey = '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';
  const apiEndpoint = 'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions';
  const prompt = `Quelles sont les activites que je pourrais faire aujourd´hui ? la situation meteo est ${weather.weather[0].description},temp=${weather.main.temp}C,wind speed=${weather.wind.speed},humidity=${weather.main.humidity},localisation=${location}`;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  const data = {
    prompt: prompt,
    max_tokens: 100,
  };

  try {
    //const response = await axios.post(apiEndpoint, data, { headers });
   /* const response =fetch(apiEndpoint, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
})*/
    const response = {"id":"cmpl-8lHhYBY8e6VIuJkTElgOYngHwKKVn","object":"text_completion","created":1706280152,"model":"gpt-3.5-turbo-instruct",
    "choices":[{"text":"\n\n1. Sunny and warm: \n- Have a picnic in the park \n- Go for a hike or bike ride \n- Play a round of mini golf \n- Visit the beach and go swimming \n- Have a barbecue or cookout with friends and family \n- Do outdoor yoga or meditation \n- Go for a scenic drive and explore new areas \n\n2. Cloudy and cool: \n- Go to a museum or art gallery \n- Have a movie marathon at home \n- Go to an","index":0,"logprobs":null,"finish_reason":"length"}],
    "usage":{"prompt_tokens":9,"completion_tokens":100,"total_tokens":109}};

    const generatedText = response.choices[0].text;
    return generatedText;
  } catch (error) {
    throw new Error(`Error calling GPT-3 API: ${error.message}`);
  }
};

export default  generateActivitySuggestions ;
