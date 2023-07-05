const path = require('path')
const BaseModel = require(path.resolve(path.dirname(require.main.filename), 'src/models/base/base.model'))

/**
 * @swagger
 * components:
 *    schemas:
 *      ItemMenu:
 *        type: object
 *        required:
 *          - name
 *          - price
 *        properties:
 *          id:
 *            type: string
 *            description: Item de Menú id
 *          name:
 *            type: string
 *            description: Item de Menú name
 *          description:
 *            type: string
 *            description: Item de Menú description
 *          price:
 *            type: number
 *            description: Item de Menú price
 *        example:
 *          id: "101"
 *          name: "Margherita Pizza"
 *          description: "Classic pizza topped with tomato sauce, mozzarella cheese, and basil"
 *          price: 10900
 */
class MenuItemModel extends BaseModel {
  constructor (args, dependencies) {
    if (!args || !dependencies) {
      throw new Error('Required args and dependencies to build this entity')
    }

    super(dependencies)

    /* Base Properties */
    this._dependencies = dependencies
    this._utilities = this._dependencies.utilities
    this._dataTypesManager = this._dependencies.DataTypesManager

    /* Custom Properties */
    this._types = this._dataTypesManager.types

    /* Assigments */
    const timestamp = this._utilities.generator.time.timestamp()

    /* Base Properties */
    this.last_modification = { value: timestamp, type: this._types.timestamp }
    this.id = { value: args.id, type: this._types.bigserial, isPK: true }
    this.date_creation = { value: timestamp, type: this._types.timestamp }
    this.last_user_modification = { value: args.user_id, type: this._types.object }
    this.status = { value: args.status || MenuItemModel.statuses.active, type: this._types.object }

    /* Custom fields */
    this.name = { value: args.name, type: this._types.string }
    this.description = { value: args.description, type: this._types.string }
    this.price = { value: args.price, type: this._types.decimal }
  }

  // Return entity sanitized
  get sanitized () {
    return {
      id: this.id.value || this.id.type.default,
      name: this.name.value || this.name.type.default,
      price: this.price.value || this.price.type.default
    }
  }

  get get () {
    return {
      id: this.id.value || this.id.type.default,
      date_creation: this.date_creation.value || this.date_creation.type.default,
      last_modification: this.last_modification.value || this.last_modification.type.default,
      last_user_modification: this.last_user_modification.value || this.last_user_modification.type.default,
      status: this.status.value || this.status.type.default,
      name: this.name.value || this.name.type.default,
      description: this.description.value || this.description.type.default,
      price: this.price.value || this.price.type.default
    }
  }
}

MenuItemModel.statuses = {
  inactive: { id: 1, name: 'inactive', title: 'Inactive' },
  active: { id: 2, name: 'active', title: 'Active' },
  deleted: { id: 999, name: 'deleted', title: 'Deleted' }
}

module.exports = MenuItemModel
