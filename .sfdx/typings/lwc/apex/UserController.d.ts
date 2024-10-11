declare module "@salesforce/apex/UserController.registerUser" {
  export default function registerUser(param: {login: any, email: any, password: any}): Promise<any>;
}
declare module "@salesforce/apex/UserController.loginUser" {
  export default function loginUser(param: {login: any, password: any}): Promise<any>;
}
