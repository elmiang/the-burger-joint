// Test file for profileController

// Importing libraries and models
const mockingoose = require('mockingoose');

const Profile = require('../models/accountModel');
const Order = require('../models/orderModel');
const OrderLine = require('../models/orderLineModel');

const {
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
    userOrderHistory  
} = require('./profileController');

const {
    mockRequest, mockResponse, mockModel
} = require('../helpers/testHelper');

// Test Case 1: Get User Profile
describe('Profile Service', () => {
    describe('Get User Profile', () => {
        it ('Should return a user profile for a given ID', async () => 
        {
            // Arrange
            const doc = {
                "_id": "633958b6fe630dff5f057751",
                "email": "chuck.norris@domain.com",
                "firstName": "Chuck",
                "lastName": "Norris",
                "residentialAddress": "123 ABC Street",
                "phoneNumber": 12345678
            };

            mockingoose(Profile).toReturn(doc, 'findOne');            

            const req = mockRequest('GET', { id: 'chuck.norris@domain.com' });
            const res = mockResponse();

            // Act
            await getUserProfile(req,res);

            // Assert
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalled();
            
            const data = res.json.mock.calls[0][0];

            expect(data.email).toEqual(doc.email);
            expect(data.firstName).toEqual(doc.firstName);
            expect(data.lastName).toEqual(doc.lastName);
            expect(data.residentialAddress).toEqual(doc.residentialAddress);
            expect(data.phoneNumber).toEqual(doc.phoneNumber);          
            
        });
        it ('Should return 404 when a user profile does not exist', async () => 
        {
            // Arrange
            mockingoose(Profile).toReturn(null, 'findOne');            

            const req = mockRequest('GET', { id: 'i.am.not.here@domain.com' });
            const res = mockResponse();

            // Act
            await getUserProfile(req,res);

            // Assert
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalled();
            
            const data = res.json.mock.calls[0][0];

            expect(data.error).toEqual('No such account exists');
            
        });        
    });
    describe('Update User Profile', () => {
        it ('Should return a user profile for a given ID', async () => 
        {
            // Arrange
            const doc = {
                "_id": "633958b6fe630dff5f057751",
                "email": "chuck.norris@domain.com",
                "firstName": "Chuck",
                "lastName": "Norris",
                "residentialAddress": "123 ABC Street",
                "phoneNumber": 12345678
            };

            mockingoose(Profile).toReturn(doc, 'findOneAndUpdate');            

            const req = mockRequest(
                'PATCH', 
                { id: 'chuck.norris@domain.com' }, 
                { email: "chuck.norris@domain.com", firstName: "Adam", lastName: "Sandler", residentialAddress: "123", phoneNumber:"123" }
            );
            const res = mockResponse();

            // Act
            await updateUserProfile(req,res);

            // Assert
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalled();
            
            const data = res.json.mock.calls[0][0];

console.log(data);            

            expect(data.email).toEqual(doc.email);
            expect(data.firstName).toEqual(doc.firstName);
            expect(data.lastName).toEqual(doc.lastName);
            expect(data.residentialAddress).toEqual(doc.residentialAddress);
            expect(data.phoneNumber).toEqual(doc.phoneNumber);          
            
        });
        it ('Should return 404 when a user profile does not exist', async () => 
        {
            // Arrange
            mockingoose(Profile).toReturn(null, 'findOne');            

            const req = mockRequest('GET', { id: 'i.am.not.here@domain.com' });
            const res = mockResponse();

            // Act
            await getUserProfile(req,res);

            // Assert
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalled();
            
            const data = res.json.mock.calls[0][0];

            expect(data.error).toEqual('No such account exists');
            
        });        
    });    
});