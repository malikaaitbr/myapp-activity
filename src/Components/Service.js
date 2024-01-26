//const { generateActivitySuggestions } = require('./Gpt3');
import axios from 'axios';

async function handleActivityRequest() {
  try {
    const apiKey = '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';
  const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const prompt = 'Generate activity suggestions based on the current weather:';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  const data = {
    prompt: prompt,
    max_tokens: 100,
  };

  try {
    const response = await axios.post(apiEndpoint, data, { headers });
    const generatedText = response.data.choices[0].text;
    console.log('Activity Suggestions:', generatedText);
    return generatedText;
  } catch (error) {
    throw new Error(`Error calling GPT-3 API: ${error.message}`);
  }
}
catch (error)
{
  throw new Error(`Error calling GPT-3 API: ${error.message}`);
}
}

export default activityService;