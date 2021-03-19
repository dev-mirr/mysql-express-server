import Wrapper from './index'

class UserWrapper extends Wrapper {
  toWeb() {
    const value = Object.assign({}, this)

    delete value.password

    return values
  }
}

export default UserWrapper