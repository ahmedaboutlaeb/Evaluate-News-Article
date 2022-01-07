import { checkUrl } from '../client/js/urlChecker'


describe('Test, the function "handleSubmit()" should exist' , () => {
    test('It should return true',  () => {
        expect(checkUrl).toBeDefined();
    });
});
describe('Test, the function "handleSubmit()" should be a function' , () => {
    test('It should be a function',  () => {
        expect(typeof checkUrl).toBe("function");
    });
});