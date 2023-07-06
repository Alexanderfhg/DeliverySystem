class MenuItemRoute {
  constructor (dependencies) {
    this._dependencies = dependencies
    this._utilities = this._dependencies.utilities
    this._console = this._dependencies.console
    this._services = this._dependencies.services

    /* Custom Properties */
    /* this._myPrivateProperty = 'Some value' */

    /* Assigments */
    /* this._newPrivateObject = new SomeObject(this._dependencies) */
    this.EntityService = this._services.MenuItemService
  }
  /**
 * @swagger
 * /menu/menu-item/{queryselector}:
 *   get:
 *     summary: Get a menu item by query selector.
 *     description: Returns the menu item information that matches the query selector an search specified in the route.
 *     tags:
 *       - MenuItem
 *     parameters:
 *       - in: path
 *         name: queryselector
 *         description: Is the filter available for this query
 *         required: true
 *         schema:
 *           enum:
 *              - id
 *              - name
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
 *                     $ref: '#/components/schemas/MenuItem'
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
  * /menu/menu-item:
  *    post:
  *       summary: Create a new menu item.
  *       description: Creates a new menu item using the provided data.
  *       tags:
  *         - MenuItem
  *       requestBody:
  *         required: true
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/MenuItem'
  *       responses:
  *         200:
  *           description: OK.
  *           content:
  *             application/json:
  *               schema:
  *                 $ref: '#/components/schemas/Response'
  *               examples:
  *                 Success:
  *                   value:
  *                     status: 200
  *                     success: true
  *                     message: Operation completed successfully
  *                     result:
  *                       $ref: '#/components/schemas/MenuItem'
  *         500:
  *           description: Something went wrong while performing this action.
  *           content:
  *             application/json:
  *               schema:
  *                 $ref: '#/components/schemas/Response'
  *               examples:
  *                 Error:
  *                   value:
  *                     status: 500
  *                     success: false
  *                     message: Something went wrong while performing this action
  *                     result: null
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
 * /menu/menu-item:
 *   patch:
 *     summary: Update an existing menu item.
 *     description: Updates an existing menu item with the new data.
 *     tags:
 *       - MenuItem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MenuItem'
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
 *                     $ref: '#/components/schemas/MenuItem'
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
 * /menu/menu-item:
 *   delete:
 *     summary: Delete a menu item by its id.
 *     description: Deletes a menu item based on the provided ID.
 *     tags:
 *       - MenuItem
 *     parameters:
 *       - in: query
 *         name: id
 *         description: Id of the item to delete
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
 *                   message: Menu item successfully deleted
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

module.exports = MenuItemRoute
