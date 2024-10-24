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
  
      let responseText = await response.text();
  
      // Clean the response text
      responseText = responseText.trim();
      if (responseText.startsWith('"') && responseText.endsWith('"')) {
        responseText = responseText.substring(1, responseText.length - 1);
      }
  
      return responseText;
    } catch (error) {
      throw new Error('Error logging in.');
    }
  };