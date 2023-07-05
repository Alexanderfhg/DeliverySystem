class MenuManagementRoute {
  constructor (dependencies) {
    this._dependencies = dependencies
    this._utilities = this._dependencies.utilities
    this._console = this._dependencies.console
    this._services = this._dependencies.services

    /* Custom Properties */
    /* this._myPrivateProperty = 'Some value' */

    /* Assigments */
    /* this._newPrivateObject = new SomeObject(this._dependencies) */
    this.EntityService = this._services.MenuService
  }

  /**
 * @swagger
 * /delivery/menu/{queryselector}:
 *   get:
 *     summary: Get an Menu by query selector.
 *     description: Returns the Menu information that matches the query selector an search specified in the route.
 *     tags:
 *       - Menu
 *     parameters:
 *       - in: path
 *         name: queryselector
 *         description: Is the filter available for this query
 *         required: true
 *         schema:
 *           enum:
 *              - id
 *              - PROPERTY
 *       - in: query
 *         name: search
 *         description: Keyword to search for entities.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             examples:
 *               Success:
 *                 value:
 *                   status: 200
 *                   success: true
 *                   message: Operation completed successfully
 *                   result:
 *                     $ref: '#/components/schemas/Menu'
 *       500:
 *         description: Something was wrong while you make this action.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             examples:
 *               Success:
 *                 value:
 *                   status: 500
 *                   success: false
 *                   message: Something was wrong while you make this action
 *                   result: null
 */

  async get ({ params }) {
    try {
      const entityService = new this.EntityService(this._dependencies)
      return entityService.get(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  /**
  *  @swagger
  * /delivery/menu:
  *   post:
  *     summary: Create a new Menu.
  *     description: Creates a new Menu using the provided data.
  *     tags:
  *       - Menu
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Menu'
  *     responses:
  *       200:
  *         description: OK.
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Response'
  *             examples:
  *               Success:
  *                 value:
  *                   status: 200
  *                   success: true
  *                   message: Operation completed successfully
  *                   result:
  *                     $ref: '#/components/schemas/Menu'
  *       500:
  *         description: Something went wrong while performing this action.
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Response'
  *             examples:
  *               Error:
  *                 value:
  *                   status: 500
  *                   success: false
  *                   message: Something went wrong while performing this action
  *                   result: null
  */

  async create ({ params }) {
    try {
      const entityService = new this.EntityService(this._dependencies)
      return entityService.create(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  /**
 * @swagger
 * /delivery/menu:
 *   patch:
 *     summary: Update an existing Menu.
 *     description: Updates an existing Menu with the new data.
 *     tags:
 *       - Menu
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateMenuRequest'
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             examples:
 *               Success:
 *                 value:
 *                   status: 200
 *                   success: true
 *                   message: Operation completed successfully
 *                   result:
 *                     $ref: '#/components/schemas/Menu'
 *       500:
 *         description: Something went wrong while performing this action.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             examples:
 *               Error:
 *                 value:
 *                   status: 500
 *                   success: false
 *                   message: Something went wrong while performing this action
 *                   result: null
 */

  async update ({ params }) {
    try {
      const entityService = new this.EntityService(this._dependencies)
      return entityService.update(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

  /**
 * @swagger
 * /delivery/menu:
 *   delete:
 *     summary: Delete an Menu.
 *     description: Deletes an Menu based on the provided ID.
 *     tags:
 *       - Menu
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeleteMenu'
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             examples:
 *               Success:
 *                 value:
 *                   status: 200
 *                   success: true
 *                   message: Menu successfully deleted
 *                   result: null
 *       500:
 *         description: Something went wrong while performing this action.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *             examples:
 *               Error:
 *                 value:
 *                   status: 500
 *                   success: false
 *                   message: Something went wrong while performing this action
 *                   result: null
 */
  async delete ({ params }) {
    try {
      const entityService = new this.EntityService(this._dependencies)
      return entityService.delete(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }
}

module.exports = MenuManagementRoute
