type RuntimeConfig = {
  resendApiKey: string;
};

export const getConfig = (): RuntimeConfig => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not defined');
  }

  return {
    resendApiKey: process.env.RESEND_API_KEY,
  };
}; 
