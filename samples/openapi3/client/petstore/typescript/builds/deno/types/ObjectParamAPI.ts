import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration, ConfigurationOptions } from '../configuration.ts'
import type { Middleware } from '../middleware.ts';

import { ApiResponse } from '../models/ApiResponse.ts';
import { Category } from '../models/Category.ts';
import { Order } from '../models/Order.ts';
import { Pet } from '../models/Pet.ts';
import { Tag } from '../models/Tag.ts';
import { User } from '../models/User.ts';

import { ObservablePetApi } from "./ObservableAPI.ts";
import { PetApiRequestFactory, PetApiResponseProcessor} from "../apis/PetApi.ts";

export interface PetApiAddPetRequest {
    /**
     * Pet object that needs to be added to the store
     * @type Pet
     * @memberof PetApiaddPet
     */
    pet: Pet
}

export interface PetApiDeletePetRequest {
    /**
     * Pet id to delete
     * Defaults to: undefined
     * @type number
     * @memberof PetApideletePet
     */
    petId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PetApideletePet
     */
    apiKey?: string
}

export interface PetApiFindPetsByStatusRequest {
    /**
     * Status values that need to be considered for filter
     * Defaults to: undefined
     * @type Array&lt;&#39;available&#39; | &#39;pending&#39; | &#39;sold&#39;&gt;
     * @memberof PetApifindPetsByStatus
     */
    status: Array<'available' | 'pending' | 'sold'>
}

export interface PetApiFindPetsByTagsRequest {
    /**
     * Tags to filter by
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PetApifindPetsByTags
     */
    tags: Array<string>
}

export interface PetApiGetPetByIdRequest {
    /**
     * ID of pet to return
     * Defaults to: undefined
     * @type number
     * @memberof PetApigetPetById
     */
    petId: number
}

export interface PetApiUpdatePetRequest {
    /**
     * Pet object that needs to be added to the store
     * @type Pet
     * @memberof PetApiupdatePet
     */
    pet: Pet
}

export interface PetApiUpdatePetWithFormRequest {
    /**
     * ID of pet that needs to be updated
     * Defaults to: undefined
     * @type number
     * @memberof PetApiupdatePetWithForm
     */
    petId: number
    /**
     * Updated name of the pet
     * Defaults to: undefined
     * @type string
     * @memberof PetApiupdatePetWithForm
     */
    name?: string
    /**
     * Updated status of the pet
     * Defaults to: undefined
     * @type string
     * @memberof PetApiupdatePetWithForm
     */
    status?: string
}

export interface PetApiUploadFileRequest {
    /**
     * ID of pet to update
     * Defaults to: undefined
     * @type number
     * @memberof PetApiuploadFile
     */
    petId: number
    /**
     * Additional data to pass to server
     * Defaults to: undefined
     * @type string
     * @memberof PetApiuploadFile
     */
    additionalMetadata?: string
    /**
     * file to upload
     * Defaults to: undefined
     * @type HttpFile
     * @memberof PetApiuploadFile
     */
    file?: HttpFile
}

export class ObjectPetApi {
    private api: ObservablePetApi

    public constructor(configuration: Configuration, requestFactory?: PetApiRequestFactory, responseProcessor?: PetApiResponseProcessor) {
        this.api = new ObservablePetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 
     * Add a new pet to the store
     * @param param the request object
     */
    public addPetWithHttpInfo(param: PetApiAddPetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Pet>> {
        return this.api.addPetWithHttpInfo(param.pet,  options).toPromise();
    }

    /**
     * 
     * Add a new pet to the store
     * @param param the request object
     */
    public addPet(param: PetApiAddPetRequest, options?: ConfigurationOptions): Promise<Pet> {
        return this.api.addPet(param.pet,  options).toPromise();
    }

    /**
     * 
     * Deletes a pet
     * @param param the request object
     */
    public deletePetWithHttpInfo(param: PetApiDeletePetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deletePetWithHttpInfo(param.petId, param.apiKey,  options).toPromise();
    }

    /**
     * 
     * Deletes a pet
     * @param param the request object
     */
    public deletePet(param: PetApiDeletePetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deletePet(param.petId, param.apiKey,  options).toPromise();
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * Finds Pets by status
     * @param param the request object
     */
    public findPetsByStatusWithHttpInfo(param: PetApiFindPetsByStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<Pet>>> {
        return this.api.findPetsByStatusWithHttpInfo(param.status,  options).toPromise();
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * Finds Pets by status
     * @param param the request object
     */
    public findPetsByStatus(param: PetApiFindPetsByStatusRequest, options?: ConfigurationOptions): Promise<Array<Pet>> {
        return this.api.findPetsByStatus(param.status,  options).toPromise();
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * Finds Pets by tags
     * @param param the request object
     */
    public findPetsByTagsWithHttpInfo(param: PetApiFindPetsByTagsRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<Pet>>> {
        return this.api.findPetsByTagsWithHttpInfo(param.tags,  options).toPromise();
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * Finds Pets by tags
     * @param param the request object
     */
    public findPetsByTags(param: PetApiFindPetsByTagsRequest, options?: ConfigurationOptions): Promise<Array<Pet>> {
        return this.api.findPetsByTags(param.tags,  options).toPromise();
    }

    /**
     * Returns a single pet
     * Find pet by ID
     * @param param the request object
     */
    public getPetByIdWithHttpInfo(param: PetApiGetPetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Pet>> {
        return this.api.getPetByIdWithHttpInfo(param.petId,  options).toPromise();
    }

    /**
     * Returns a single pet
     * Find pet by ID
     * @param param the request object
     */
    public getPetById(param: PetApiGetPetByIdRequest, options?: ConfigurationOptions): Promise<Pet> {
        return this.api.getPetById(param.petId,  options).toPromise();
    }

    /**
     * 
     * Update an existing pet
     * @param param the request object
     */
    public updatePetWithHttpInfo(param: PetApiUpdatePetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Pet>> {
        return this.api.updatePetWithHttpInfo(param.pet,  options).toPromise();
    }

    /**
     * 
     * Update an existing pet
     * @param param the request object
     */
    public updatePet(param: PetApiUpdatePetRequest, options?: ConfigurationOptions): Promise<Pet> {
        return this.api.updatePet(param.pet,  options).toPromise();
    }

    /**
     * 
     * Updates a pet in the store with form data
     * @param param the request object
     */
    public updatePetWithFormWithHttpInfo(param: PetApiUpdatePetWithFormRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updatePetWithFormWithHttpInfo(param.petId, param.name, param.status,  options).toPromise();
    }

    /**
     * 
     * Updates a pet in the store with form data
     * @param param the request object
     */
    public updatePetWithForm(param: PetApiUpdatePetWithFormRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updatePetWithForm(param.petId, param.name, param.status,  options).toPromise();
    }

    /**
     * 
     * uploads an image
     * @param param the request object
     */
    public uploadFileWithHttpInfo(param: PetApiUploadFileRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiResponse>> {
        return this.api.uploadFileWithHttpInfo(param.petId, param.additionalMetadata, param.file,  options).toPromise();
    }

    /**
     * 
     * uploads an image
     * @param param the request object
     */
    public uploadFile(param: PetApiUploadFileRequest, options?: ConfigurationOptions): Promise<ApiResponse> {
        return this.api.uploadFile(param.petId, param.additionalMetadata, param.file,  options).toPromise();
    }

}

import { ObservableStoreApi } from "./ObservableAPI.ts";
import { StoreApiRequestFactory, StoreApiResponseProcessor} from "../apis/StoreApi.ts";

export interface StoreApiDeleteOrderRequest {
    /**
     * ID of the order that needs to be deleted
     * Defaults to: undefined
     * @type string
     * @memberof StoreApideleteOrder
     */
    orderId: string
}

export interface StoreApiGetInventoryRequest {
}

export interface StoreApiGetOrderByIdRequest {
    /**
     * ID of pet that needs to be fetched
     * Minimum: 1
     * Maximum: 5
     * Defaults to: undefined
     * @type number
     * @memberof StoreApigetOrderById
     */
    orderId: number
}

export interface StoreApiPlaceOrderRequest {
    /**
     * order placed for purchasing the pet
     * @type Order
     * @memberof StoreApiplaceOrder
     */
    order: Order
}

export class ObjectStoreApi {
    private api: ObservableStoreApi

    public constructor(configuration: Configuration, requestFactory?: StoreApiRequestFactory, responseProcessor?: StoreApiResponseProcessor) {
        this.api = new ObservableStoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * Delete purchase order by ID
     * @param param the request object
     */
    public deleteOrderWithHttpInfo(param: StoreApiDeleteOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteOrderWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * Delete purchase order by ID
     * @param param the request object
     */
    public deleteOrder(param: StoreApiDeleteOrderRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteOrder(param.orderId,  options).toPromise();
    }

    /**
     * Returns a map of status codes to quantities
     * Returns pet inventories by status
     * @param param the request object
     */
    public getInventoryWithHttpInfo(param: StoreApiGetInventoryRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<{ [key: string]: number; }>> {
        return this.api.getInventoryWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a map of status codes to quantities
     * Returns pet inventories by status
     * @param param the request object
     */
    public getInventory(param: StoreApiGetInventoryRequest = {}, options?: ConfigurationOptions): Promise<{ [key: string]: number; }> {
        return this.api.getInventory( options).toPromise();
    }

    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions
     * Find purchase order by ID
     * @param param the request object
     */
    public getOrderByIdWithHttpInfo(param: StoreApiGetOrderByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Order>> {
        return this.api.getOrderByIdWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions
     * Find purchase order by ID
     * @param param the request object
     */
    public getOrderById(param: StoreApiGetOrderByIdRequest, options?: ConfigurationOptions): Promise<Order> {
        return this.api.getOrderById(param.orderId,  options).toPromise();
    }

    /**
     * 
     * Place an order for a pet
     * @param param the request object
     */
    public placeOrderWithHttpInfo(param: StoreApiPlaceOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<Order>> {
        return this.api.placeOrderWithHttpInfo(param.order,  options).toPromise();
    }

    /**
     * 
     * Place an order for a pet
     * @param param the request object
     */
    public placeOrder(param: StoreApiPlaceOrderRequest, options?: ConfigurationOptions): Promise<Order> {
        return this.api.placeOrder(param.order,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI.ts";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi.ts";

export interface UserApiCreateUserRequest {
    /**
     * Created user object
     * @type User
     * @memberof UserApicreateUser
     */
    user: User
}

export interface UserApiCreateUsersWithArrayInputRequest {
    /**
     * List of user object
     * @type Array&lt;User&gt;
     * @memberof UserApicreateUsersWithArrayInput
     */
    user: Array<User>
}

export interface UserApiCreateUsersWithListInputRequest {
    /**
     * List of user object
     * @type Array&lt;User&gt;
     * @memberof UserApicreateUsersWithListInput
     */
    user: Array<User>
}

export interface UserApiDeleteUserRequest {
    /**
     * The name that needs to be deleted
     * Defaults to: undefined
     * @type string
     * @memberof UserApideleteUser
     */
    username: string
}

export interface UserApiGetUserByNameRequest {
    /**
     * The name that needs to be fetched. Use user1 for testing.
     * Defaults to: undefined
     * @type string
     * @memberof UserApigetUserByName
     */
    username: string
}

export interface UserApiLoginUserRequest {
    /**
     * The user name for login
     * Defaults to: undefined
     * @type string
     * @memberof UserApiloginUser
     */
    username: string
    /**
     * The password for login in clear text
     * Defaults to: undefined
     * @type string
     * @memberof UserApiloginUser
     */
    password: string
}

export interface UserApiLogoutUserRequest {
}

export interface UserApiUpdateUserRequest {
    /**
     * name that need to be deleted
     * Defaults to: undefined
     * @type string
     * @memberof UserApiupdateUser
     */
    username: string
    /**
     * Updated user object
     * @type User
     * @memberof UserApiupdateUser
     */
    user: User
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param param the request object
     */
    public createUserWithHttpInfo(param: UserApiCreateUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createUserWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     * @param param the request object
     */
    public createUser(param: UserApiCreateUserRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createUser(param.user,  options).toPromise();
    }

    /**
     * 
     * Creates list of users with given input array
     * @param param the request object
     */
    public createUsersWithArrayInputWithHttpInfo(param: UserApiCreateUsersWithArrayInputRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createUsersWithArrayInputWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * 
     * Creates list of users with given input array
     * @param param the request object
     */
    public createUsersWithArrayInput(param: UserApiCreateUsersWithArrayInputRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createUsersWithArrayInput(param.user,  options).toPromise();
    }

    /**
     * 
     * Creates list of users with given input array
     * @param param the request object
     */
    public createUsersWithListInputWithHttpInfo(param: UserApiCreateUsersWithListInputRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.createUsersWithListInputWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * 
     * Creates list of users with given input array
     * @param param the request object
     */
    public createUsersWithListInput(param: UserApiCreateUsersWithListInputRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.createUsersWithListInput(param.user,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param param the request object
     */
    public deleteUserWithHttpInfo(param: UserApiDeleteUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteUserWithHttpInfo(param.username,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     * @param param the request object
     */
    public deleteUser(param: UserApiDeleteUserRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteUser(param.username,  options).toPromise();
    }

    /**
     * 
     * Get user by user name
     * @param param the request object
     */
    public getUserByNameWithHttpInfo(param: UserApiGetUserByNameRequest, options?: ConfigurationOptions): Promise<HttpInfo<User>> {
        return this.api.getUserByNameWithHttpInfo(param.username,  options).toPromise();
    }

    /**
     * 
     * Get user by user name
     * @param param the request object
     */
    public getUserByName(param: UserApiGetUserByNameRequest, options?: ConfigurationOptions): Promise<User> {
        return this.api.getUserByName(param.username,  options).toPromise();
    }

    /**
     * 
     * Logs user into the system
     * @param param the request object
     */
    public loginUserWithHttpInfo(param: UserApiLoginUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.loginUserWithHttpInfo(param.username, param.password,  options).toPromise();
    }

    /**
     * 
     * Logs user into the system
     * @param param the request object
     */
    public loginUser(param: UserApiLoginUserRequest, options?: ConfigurationOptions): Promise<string> {
        return this.api.loginUser(param.username, param.password,  options).toPromise();
    }

    /**
     * 
     * Logs out current logged in user session
     * @param param the request object
     */
    public logoutUserWithHttpInfo(param: UserApiLogoutUserRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.logoutUserWithHttpInfo( options).toPromise();
    }

    /**
     * 
     * Logs out current logged in user session
     * @param param the request object
     */
    public logoutUser(param: UserApiLogoutUserRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.logoutUser( options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param param the request object
     */
    public updateUserWithHttpInfo(param: UserApiUpdateUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateUserWithHttpInfo(param.username, param.user,  options).toPromise();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     * @param param the request object
     */
    public updateUser(param: UserApiUpdateUserRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateUser(param.username, param.user,  options).toPromise();
    }

}
