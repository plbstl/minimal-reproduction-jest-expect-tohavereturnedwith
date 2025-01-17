import * as index from '../src/index'
import * as utils from '../src/utils'

const asyncFuncWithReturnValueSpy = jest.spyOn(utils, 'asyncFuncWithReturnValue')

describe('index', () => {
  it('returns correct value for asyncFuncWithReturnValueSpy()', async () => {
    await index.main('random')

    expect(asyncFuncWithReturnValueSpy).toHaveBeenCalledWith('random')

    expect(asyncFuncWithReturnValueSpy).toHaveReturnedWith(Promise.resolve('random')) // passes
    expect(asyncFuncWithReturnValueSpy).toHaveReturnedWith(Promise.resolve(false)) // also passes, which is wrong
    expect(await asyncFuncWithReturnValueSpy.mock.results[0].value).toBe('random') // passes

    expect(asyncFuncWithReturnValueSpy).toHaveReturnedWith('random') // fails
  })
})
