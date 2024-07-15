import * as index from '../src/index'
import * as utils from '../src/utils'

const asyncFuncWithReturnValueSpy = jest.spyOn(utils, 'asyncFuncWithReturnValue')

describe('index', () => {
  it('returns correct value for asyncFuncWithReturnValueSpy()', async () => {
    await index.main('random')

    expect(asyncFuncWithReturnValueSpy).toHaveBeenCalledWith('random')

    expect(await asyncFuncWithReturnValueSpy.mock.results[0].value).toBe('random') // passes
    expect(asyncFuncWithReturnValueSpy).toHaveReturnedWith('random') // fails
  })
})
