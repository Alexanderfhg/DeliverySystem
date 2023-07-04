class ItemDeMenuRoute {
  constructor (dependencies) {
    this._item_de_menu_controller = require('../../../controllers/itemDeMenuController')
    this._dependencies = dependencies
    this._utilities = this._dependencies.utilities
    this._console = this._dependencies.console
  }

  async get ({ params }) {
    try {
      const res = new this._item_de_menu_controller(this._dependencies)
      return res.get(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  async create ({ params }) {
    try {
      const res = new this._item_de_menu_controller(this._dependencies)
      return res.create(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  async update ({ params }) {
    try {
      const res = new this._item_de_menu_controller(this._dependencies)
      return res.update(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }
}

module.exports = ItemDeMenuRoute;