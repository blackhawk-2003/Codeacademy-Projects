var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns the factorial of the number 5 as 120',()=>{
      const expectedResult=120;
      const result=Calculate.factorial(5);

      assert.strictEqual(result,expectedResult);
    })
    it('returns the factorial of the number 6 as 720',()=>{
      const expectedResult=720;
      const result=Calculate.factorial(6);

      assert.strictEqual(result,expectedResult);
    })
    it('returns the factorial of the number 0 as 0',()=>{
      const expectedResult=0;
      const result=Calculate.factorial(0);

      assert.strictEqual(result,expectedResult);
    })
  });
});