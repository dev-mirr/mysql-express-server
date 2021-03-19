import Wrapper from './index'

class UserWrapper extends Wrapper {
  toWeb() {
    console.log (`to web UserWrapper`)
    const value = Object.assign({}, this)

    delete values.password

    return values
  }
}

export default UserWrapper