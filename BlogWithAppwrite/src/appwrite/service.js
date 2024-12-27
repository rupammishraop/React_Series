import { Client, ID, Databases, Storage, Query } from "appwrite";
import config from "../config/config";

export class Service {

    client = new Client();
    database;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl) // Your API Endpoint
            .setProject(config.appwriteProjectId) // Your project ID

        this.database = new Databases(this.client);
        this.storage = new Storage(this.storage);
    }

    async createPost({ Title, Content, FeaturedImg, UserId, Status, slug }) {
        try {
            return this.database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    Title,
                    Content,
                    FeaturedImg,
                    UserId,
                    Status
                }
            )
        } catch (error) {
            console.log(`Error creating post: ${error}`);
        }
    }

    async updatePost(slug, { Title, Content, FeaturedImg, Status }) {
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    Title,
                    Content,
                    FeaturedImg,
                    Status
                }
            )
        } catch (error) {
            console.log("Error updating post: ", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Error deleting post: ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug);

        } catch (error) {
            console.log("Error getting post: ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("Status", ["active"])]) {
        try {
            return await this.database.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Error getting posts: ", error);
            return false
        }
    }

    // FILE HANDLING IN STORAGE
    
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Upload Error: ", error);
        }
    }

    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                config.appwriteBucketId, 
                fileId
            )
            
        } catch (error) {
            console.log("Delete File Error: ", error);
            return false
        }
    }
   
    async getFilePreview(fileId){
        try {
            return await this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Delete FilePreview Error: ", error)
        }
    }

    
}

const service = new Service()
export default service;