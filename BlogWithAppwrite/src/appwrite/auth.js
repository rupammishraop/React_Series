import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService {
  
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl) // Your API Endpoint
        .setProject(config.appwriteProjectId) // Your project ID
        this.account = new Account();
    }

    //Create User Accout
    async createAccount({email, password, name}){
        try {
            let userAccount= await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                //login 
                this.login({email, password});
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite CreateAccount error" , error)
        }
    }

    //Create Email Session
    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log("Appwrite Login error", error);
        }
    }
    
    // Delete Session 
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(' Appwrite Logout Error', error);
        }
    }

    // Get current user for "user login hai ya nhi hai"
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite getCurrentUser error", error)   
        }
    }


}
 
const authService = new AuthService();
export default authService