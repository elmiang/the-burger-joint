// Helper Script for mocking requests and responses
const mockRequest = (method, params, body) => {
    return {
        method: method,
        params: params,
        body: body
    };
};

const mockResponse = () => {
    const res = {};
    res.status = jest.fn( () => res);
    res.json = jest.fn( () => res);
    return res;
};

module.exports = { 
    mockRequest, 
    mockResponse
};