import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  const headers = {
    "X-CMC_PRO_API_KEY": process.env.VITE_API_KEY,
  };

  if (!process.env.VITE_API_URL || !process.env.VITE_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: `Envs not found!`,
      }),
    };
  } else {
    const response = await fetch(process.env.VITE_API_URL, { headers });
    const data: any = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  }
};
