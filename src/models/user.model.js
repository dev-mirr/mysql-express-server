'use strict'

import bcrypt from 'bcrypt'

import {
  uuid
} from '../utils/uuid'
import userCache from '../caches/user.cache'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uuid: {
      allowNull: false,
      unique: true,
      type: 'BINARY(16)',
      defaultValue: () => Buffer(uuid(), 'hex'),
      get: function () {
        return Buffer.from(this.getDataValue('uuid')).toString('hex')
      }
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'users',
    timestamps: true,
  })

  User.associate = function(models) {
    // associations
  }

  // print
  User.prototype.toWeb = function () {
    /* 이거 안됨; */
    //const values = Object.assign({}, this)

    //delete values.dataValues.id
    //delete values.dataValues.password

    return {
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }

  // hooks
  // bcrypt bcrypt 로 단방향 암호화 가능한 암호 생성 로직
  User.beforeSave(async (user, options) => {
    if (user.changed('password')) {
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(user.password, salt)
    }
  })

  User.afterSave((user, options) => userCache.store(user))

  return User
}