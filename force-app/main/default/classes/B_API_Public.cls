@RestResource(urlMapping='/api/public/*')
global without sharing class B_API_Public {

    private static void addCorsHeaders() {
        RestResponse res = RestContext.response;
        res.addHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Use your app's origin
        res.addHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
        res.addHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }

    @HttpGet
    global static void doGet() {
        addCorsHeaders();
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        res.addHeader('Content-Type', 'application/json');
        String action = req.requestURI.substring(req.requestURI.lastIndexOf('/') + 1);

        System.debug('Action: ' + action);

        if (action == 'todos') {
            List<To_Do__c> todos = [SELECT Id, Title__c, Completed__c FROM To_Do__c];
            System.debug('Fetched todos: ' + todos);

            res.responseBody = Blob.valueOf(JSON.serialize(todos));
            res.statusCode = 200;
        } else if (action.startsWith('todos/')) {
            String id = action.substring('todos/'.length());
            try {
                To_Do__c todo = [SELECT Id, Title__c, Completed__c FROM To_Do__c WHERE Id = :id LIMIT 1];
                res.responseBody = Blob.valueOf(JSON.serialize(todo));
                res.statusCode = 200;
            } catch (Exception e) {
                res.responseBody = Blob.valueOf(JSON.serialize('Todo not found'));
                res.statusCode = 404;
            }
        } else {
            res.responseBody = Blob.valueOf(JSON.serialize('Invalid endpoint'));
            res.statusCode = 400;
        }
    }

    @HttpPost
    global static void doPost() {
        addCorsHeaders();
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        res.addHeader('Content-Type', 'application/json');
        String action = req.requestURI.substring(req.requestURI.lastIndexOf('/') + 1);

        if (action == 'todos') {
            String body = req.requestBody.toString();
            To_Do__c newTodo = (To_Do__c) JSON.deserialize(body, To_Do__c.class);
            insert newTodo;
            res.responseBody = Blob.valueOf(JSON.serialize(newTodo));
            res.statusCode = 201;
        } else {
            res.responseBody = Blob.valueOf(JSON.serialize('Invalid endpoint'));
            res.statusCode = 400;
        }
    }

    @HttpPatch
    global static void doPatch() {
    addCorsHeaders();
    RestRequest req = RestContext.request;
    RestResponse res = RestContext.response;
    res.addHeader('Content-Type', 'application/json');

    // Parse the request URI to extract the ID
    String[] uriParts = req.requestURI.split('/');
    Integer todosIndex = uriParts.indexOf('todos');

    if (todosIndex != -1 && todosIndex + 1 < uriParts.size()) {
        String id = uriParts[todosIndex + 1];
        System.debug('Updating To-Do with ID: ' + id);

        try {
            String body = req.requestBody.toString();
            To_Do__c updatedTodo = (To_Do__c) JSON.deserialize(body, To_Do__c.class);
            updatedTodo.Id = id;
            update updatedTodo;
            res.responseBody = Blob.valueOf(JSON.serialize(updatedTodo));
            res.statusCode = 200;
        } catch (Exception e) {
            System.debug('Error in doPatch: ' + e.getMessage());
            res.responseBody = Blob.valueOf(JSON.serialize('Error updating to-do: ' + e.getMessage()));
            res.statusCode = 500;
        }
    } else {
        res.responseBody = Blob.valueOf(JSON.serialize('Invalid endpoint'));
        res.statusCode = 400;
        }
    }

    @HttpDelete
    global static void doDelete() {
        addCorsHeaders();
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
    
        // Extract the action from the request URI
        String[] uriParts = req.requestURI.split('/');
        Integer todosIndex = uriParts.indexOf('todos');
    
        if (todosIndex != -1 && todosIndex + 1 < uriParts.size()) {
            String id = uriParts[todosIndex + 1];
            System.debug('Deleting To-Do with ID: ' + id);
    
            try {
                To_Do__c todoToDelete = [SELECT Id FROM To_Do__c WHERE Id = :id LIMIT 1];
                delete todoToDelete;
                res.responseBody = Blob.valueOf(JSON.serialize('Deleted'));
                res.statusCode = 200;
            } catch (Exception e) {
                System.debug('Error in doDelete: ' + e.getMessage());
                res.responseBody = Blob.valueOf(JSON.serialize('Error deleting to-do: ' + e.getMessage()));
                res.statusCode = 500;
            }
        } else {
            res.responseBody = Blob.valueOf(JSON.serialize('Invalid endpoint'));
            res.statusCode = 400;
        }
    }
}