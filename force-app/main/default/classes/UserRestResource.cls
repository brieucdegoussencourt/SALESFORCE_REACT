@RestResource(urlMapping='/api/public/User/*')
global without sharing class UserRestResource {

    // Handle HTTP POST request

    @HttpPost
    global static String handleRequest() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;

        // Parse the request body
        String requestBody = req.requestBody.toString();
        System.debug('Request Body: ' + requestBody);

        if (String.isBlank(requestBody)) {
            res.statusCode = 400;
            return 'Error: Request body is empty.';
        }

        // Extract parameters from the request body

        Map<String, Object> params;

        try {
            params = (Map<String, Object>) JSON.deserializeUntyped(requestBody);
        } catch (JSONException e) {
            res.statusCode = 400;
            return 'Error: Invalid JSON format. ' + e.getMessage();
        }

        System.debug('Parsed Parameters: ' + params);

        //Validate the Action Parameter:

        String action = (String) params.get('action');
        if (String.isBlank(action)) {
            res.statusCode = 400;
            return 'Error: Action parameter is required.';
        }

        // Handling Register & Login actions

        if (action == 'register') {
            String login = (String) params.get('login');
            String email = (String) params.get('email');
            String password = (String) params.get('password');
            String result = UserController.registerUser(login, email, password);
            return result;
        } else if (action == 'login') {
            String login = (String) params.get('login');
            String password = (String) params.get('password');
            Boolean success = UserController.loginUser(login, password);
            return success ? 'Success: Login successful.' : 'Error: Invalid credentials.';
        } else {
            res.statusCode = 400;
            return 'Error: Invalid action.';
        }
    }
}