import { GoogleGenAI } from '@google/genai';

async function runChat(prompt) { 
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyDT6Ov9NRQzCM87QUFhPkTuV-_uIj1qok8",
  });

  const tools = [
    {
      googleSearch: {},
    },
  ];

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };

  const model = 'gemini-2.5-pro';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  for await (const chunk of response) {
    console.log(chunk.text);
    return chunk.text;
  }
}

export default runChat;
