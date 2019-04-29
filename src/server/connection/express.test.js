import Express from './express';

jest.mock('./express'); // Mocks the function that creates the class; replaces it with a function that returns undefined.

const expressMock = jest.fn();
const express = new Express();

// Replace the class-creation method with this mock version.
// Populate the method with a reference to a mock created with jest.fn()
beforeAll (() => {
    Express.mockImplementation(() => {
        return {
            init: expressMock
        };
    });
});

beforeEach (() => {
   Express.mockClear();
   expressMock.mockClear();
});

// console.log(MockedClass()); // logs a jest-created object with a mockedMethod: property, because the mockImplementation has been set now.
it('The Express instance can be created', () => {
    expect(express).toBeTruthy();
});

afterEach (() => {
    express.close();
});



