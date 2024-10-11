public with sharing class UserController {
    // Method to register a new user
    @AuraEnabled
    public static String registerUser(String login, String email, String password) {
        // Input validation
        if (String.isBlank(login) || String.isBlank(email) || String.isBlank(password)) {
            return 'Error: All fields are required.';
        }

        // Check if the login already exists
        if (!Schema.sObjectType.User__c.isAccessible()) {
            return 'Error: Insufficient permissions to query user.';
        }
        List<User__c> existingUsers = [SELECT Id FROM User__c WHERE Login__c = :login LIMIT 1];
        if (!existingUsers.isEmpty()) {
            return 'Error: Login already exists.';
        }

        // Hash the password
        String hashedPassword = hashPassword(password);

        // Create new user record
        User__c newUser = new User__c(
            Login__c = login,
            Email__c = email,
            Password__c = hashedPassword
        );

        String result;

        if (Schema.sObjectType.User__c.isCreateable()) {
            try {
                insert newUser;
                result = 'Success: User registered successfully.';
            } catch (DmlException e) {
                result = 'Error: ' + e.getMessage();
            }
        } else {
            result = 'Error: Insufficient permissions to create user.';
        }

        return result;
    }

    // Method to authenticate a user
    @AuraEnabled
    public static Boolean loginUser(String login, String password) {
        // Input validation
        if (String.isBlank(login) || String.isBlank(password)) {
            System.debug('Input validation failed: login or password is blank.');
            return false;
        }
    
        // Convert login to lowercase
        String loginLower = login.toLowerCase();
        List<User__c> users = [SELECT Id, Password__c FROM User__c WHERE Login__c = :loginLower LIMIT 1];
    
        System.debug('Login attempt for user: ' + loginLower);
    
        // Hash the input password
        String hashedPassword = hashPassword(password);
        System.debug('Hashed Password: ' + hashedPassword);
    
        // Check permissions
        if (!Schema.sObjectType.User__c.isAccessible()) {
            System.debug('Insufficient permissions to access User__c.');
            return false;
        }
        // Query for the user by Login__c, converting to lowercase
        System.debug('Number of users found: ' + users.size());
    
        // Check if user exists
        if (users.isEmpty()) {
            System.debug('No user found with login: ' + loginLower);
            return false;
        }
    
        // Get the user record
        User__c user = users[0];
    
        // Compare the hashed passwords
        if (user.Password__c == hashedPassword) {
            System.debug('Passwords match. Authentication successful.');
            return true;
        } else {
            System.debug('Passwords do not match.');
            return false;
        }
    }

    // Helper method to hash passwords
    public static String hashPassword(String password) {
        Blob passwordBlob = Blob.valueOf(password);
        Blob hashedBlob = Crypto.generateDigest('SHA-256', passwordBlob);
        return EncodingUtil.convertToHex(hashedBlob);
    }
}