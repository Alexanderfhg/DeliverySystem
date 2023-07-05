class OrderManagementService {
  constructor (dependencies) {
    this._dependencies = dependencies
    this._db = dependencies.db
    this._models = dependencies.models
    this._utilities = dependencies.utilities
    this._console = this._dependencies.console
    this._services = this._dependencies.services
    this._tableName = 'orders'
  }

  async create (data) {
    try {
      if (!data) {
        return this._utilities.io.response.error('Please provide PROPERTY')
      }

      data.id = this._utilities.generator.id({ length: 15, prefix: 'order-' })

      const entity = new this._models.Order(data, this._dependencies)

      const transactionResponse = await this._db.transaction.create({
        tableName: this._tableName,
        entity: entity.get
      })

      if (!transactionResponse) {
        this._console.error(transactionResponse)
        return this._utilities.io.response.error()
      }

      return this._utilities.io.response.success(entity.sanitized)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  async update (data) {
    try {
      if (!data || !data.id) {
        return this._utilities.io.response.error('Please provide an id')
      }

      const transactionResponse = await this._db.transaction.update({
        tableName: this._tableName,
        entity: data
      })

      if (!transactionResponse) {
        this._console.error(transactionResponse)
        return this._utilities.io.response.error()
      }

      return this._utilities.io.response.success(data)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  async get (data) {
    try {
      if (!data || !data.queryselector) {
        return this._utilities.io.response.error('Please provide a queryselector')
      }

      let response = {}

      switch (data.queryselector) {
        case 'id':
          response = await this.#getById(data)
          break
        case 'PROPERTY':
          response = await this.#getByPROPERTY(data)
          break
        default:
          response = this._utilities.io.response.error('Provide a valid slug to query')
          break
      }

      return response
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  async delete (data) {
    try {
      if (!data || !data.id) {
        return this._utilities.io.response.error('Please provide an id')
      }

      const updatedEntity = {
        id: data.id,
        status: this._models.Order.statuses.deleted
      }

      const transactionResponse = await this._db.transaction.update({
        tableName: this._tableName,
        entity: updatedEntity
      })

      if (!transactionResponse) {
        this._console.error(transactionResponse)
        return this._utilities.io.response.error()
      }

      return this._utilities.io.response.success(updatedEntity)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  async #getById (data) {
    try {
      if (!data || !data.search) {
        return this._utilities.io.response.error('Please provide query to search')
      }

      return this.#getByFilters({
        filters: [
          { key: 'id', operator: '==', value: data.search }
        ]
      })
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  async #getByPROPERTY (data) {
    try {
      if (!data || !data.search) {
        return this._utilities.io.response.error('Please provide query to search')
      }

      const dataPropertys = Object.keys(data)
      return this.#getByFilters({
        filters: [
          { key: dataPropertys[1], operator: '==', value: data[dataPropertys[1]] }
        ]
      })
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  async #getByFilters (data) {
    try {
      if (!data || !data.filters) {
        return this._utilities.io.response.error('Please provide at least one filter')
      }

      const transactionResponse = await this._db.transaction.getByFilters({
        tableName: this._tableName,
        filters: data.filters
      })

      return this._utilities.io.response.success(transactionResponse)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  get status () {
    return this._models.Order.statuses
  }
}

module.exports = OrderManagementService
