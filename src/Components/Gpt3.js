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
  const prompt = `Quelles sont les activites que je pourrais faire aujourd´hui ? la situation meteo est ${weather.weather[0].description},temp=${weather.main.temp}C,wind speed=${weather.wind.speed},humidity=${weather.main.humidity},localisation=`+JSON.stringify(location);
  var activities=[];


  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  const data = {
    prompt: prompt,
    max_tokens: 100,
  };

  try {
   //const responseGpt = await axios.post(apiEndpoint, data, { headers });

    /*const res= await fetch(apiEndpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
    });

    activities= await res.json().then(data=>data.choices[0].text);
    */
    const response = {
      "id": "cmpl-8ldK8U7jHXbx26U836KXjPSgAX6Do",
      "object": "text_completion",
      "created": 1706363268,
      "model": "gpt-3.5-turbo-instruct",
      "choices": [
        {
          "text": "\n\n1. Faire une randonnée en nature\n2. Aller faire du vélo\n3. Organiser un pique-nique\n4. Faire un tour en canoë ou en kayak\n5. Faire du camping\n6. Faire une promenade en bateau\n7. Faire du jardinage\n8. Faire du parapente ou du deltaplane\n9. Faire une partie de golf\n10. Organiser un barbecue",
          "index": 0,
          "logprobs": null,
          "finish_reason": "length"
        }
      ],
      "usage": {
        "prompt_tokens": 60,
        "completion_tokens": 100,
        "total_tokens": 160
      }
    };

    activities= response.choices[0].text.trim().replace(/[0-9]+\./g,'').split('\n'); 

    return activities;
  } catch (error) {
    throw new Error(`Error calling GPT-3 API: ${error.message}`);
  }
};

export default  generateActivitySuggestions ;
