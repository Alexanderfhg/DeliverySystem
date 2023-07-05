class ItemDeMenuRoute {
  constructor (dependencies) {
    this._item_de_menu_controller = require('../../../services/itemDeMenu/itemDeMenuController')
    this._dependencies = dependencies
    this._utilities = this._dependencies.utilities
    this._console = this._dependencies.console
  }
/**
 * @swagger
 * /delivery/ItemMenu/{queryselector}:
 *   get:
 *     summary: Get an ItemMenu by query selector.
 *     description: Returns the ItemMenu information that matches the query selector an search specified in the route.
 *     tags:
 *       - ItemMenu
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
 *                     $ref: '#/components/schemas/ItemMenu'
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
      const entityService = new this._item_de_menu_controller(this._dependencies)
      return entityService.get(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

/**
  *  @swagger
  * /delivery/ItemMenu:
  *   post:
  *     summary: Create a new ItemMenu.
  *     description: Creates a new ItemMenu using the provided data.
  *     tags:
  *       - ItemMenu
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/ItemMenu'
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
  *                     $ref: '#/components/schemas/ItemMenu'
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
      const entityService = new this._item_de_menu_controller(this._dependencies)
      return entityService.create(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

/**
 * @swagger
 * /delivery/ItemMenu:
 *   patch:
 *     summary: Update an existing ItemMenu.
 *     description: Updates an existing ItemMenu with the new data.
 *     tags:
 *       - ItemMenu
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemMenu'
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
 *                     $ref: '#/components/schemas/ItemMenu'
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
      const entityService = new this._item_de_menu_controller(this._dependencies)
      return entityService.update(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }

/**
 * @swagger
 * /delivery/ItemMenu:
 *   delete:
 *     summary: Delete an ItemMenu.
 *     description: Deletes an ItemMenu based on the provided ID.
 *     tags:
 *       - ItemMenu
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemMenu'
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
 *                   message: ItemMenu successfully deleted
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
      const entityService = new this._item_de_menu_controller(this._dependencies)
      return entityService.delete(params)
    } catch (error) {
      this._console.error(error)
      return this._utilities.io.response.error()
    }
  }
}

module.exports = ItemDeMenuRoute;