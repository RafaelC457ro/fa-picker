import assert from 'assert'
import {buildListicons} from '../../src/utils'

describe('buildListicons function', () => {
  it('should create a html list of icons', () => {
    const icons = ['fa-glass', 'fa-music']
    const style = {
      miniBoxIcon: 'mini-box'
    }
    const actual = buildListicons(icons, style)
    const expected = '<div class=mini-box><i class="fa fa-glass" data=fa-glass></i></div><div class=mini-box><i class="fa fa-music" data=fa-music></i></div>'
    assert.strictEqual(actual, expected)
  })
})
