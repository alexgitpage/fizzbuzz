var should = chai.should()

describe('Test fizzBuzz function', function () {
  it('should return Fizz when number can be divided by 3', function () {
    let result = fizzBuzz(9)
    let results = 'Fizz'
    result.should.be.deep.equal(results)
  })

  it('num % 5 === 0', function () {
    let result = fizzBuzz(10)
    let results = 'Buzz'
    result.should.be.deep.equal(results)
  })

  it('num % 5 === 0 & num % 3 === 0', function () {
    let result = fizzBuzz(15)
    let results = 'FizzBuzz'
    result.should.be.deep.equal(results)
  })

  it('num % 5 !== 0 & num % 3 !== 0', function () {
    let result = fizzBuzz(7)
    let results = 7
    result.should.be.deep.equal(results)
  })

})

