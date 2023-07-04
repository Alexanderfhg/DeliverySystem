class OrderRoute {
  constructor (dependencies) {
    this._orderController = require('../../../controllers/orderController')
    this._dependencies = dependencies
    this._utilities = this._dependencies.utilities
    this._console = this._dependencies.console
  }

  async get ({ params }) {
    try {
      const res = new this._orderController(this._dependencies)
      return res.get(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  async create ({ params }) {
    try {
      const res = new this._orderController(this._dependencies)
      return res.create(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  async update ({ params }) {
    try {
      const res = new this._orderController(this._dependencies)
      return res.update(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }
}

module.exports = OrderRoute;