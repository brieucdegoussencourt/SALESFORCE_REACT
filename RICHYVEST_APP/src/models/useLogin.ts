// src/models/UseLogin.ts

export interface LoginData {
    login: string;
    password: string;
  }
  
  export const loginUser = async (loginData: LoginData): Promise<string> => {
    const payload = {
      action: 'login',
      login: loginData.login,
      password: loginData.password,
    };
    console.log('Payload:', payload);
  
    try {
      const response = await fetch(
        'https://easyvest-dev-ed.develop.my.salesforce-sites.com/services/apexrest/api/public/User',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );
      console.log('Fetch response received');
  
      let responseText = await response.text();
      console.log('API Response:', responseText);
  
      // Clean the response text
      responseText = responseText.trim();
      if (responseText.startsWith('"') && responseText.endsWith('"')) {
        responseText = responseText.substring(1, responseText.length - 1);
      }
      console.log('Cleaned API Response:', responseText);
  
      return responseText;
    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error('Error logging in.');
    }
  };