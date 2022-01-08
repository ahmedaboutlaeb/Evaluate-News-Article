import { submitHandeler } from '../client/js/formHandler'


describe('Test, the function "submitHandeler()" should exist' , () => {
    test('It should return true', async () => {
        expect(submitHandeler).toBeDefined();
    });
});
describe('Test, the function "submitHandeler()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof submitHandeler).toBe("function");
    });
});
