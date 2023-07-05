const router = {
  system: [
    { httpRoute: '/health', route: '/routes/api/health/health.route', handler: 'get', method: 'GET', protected: false },
    { httpRoute: '/api-manager/uri', route: '/routes/api/api-manager/api-manager.route', handler: 'getApiManagerUri', method: 'GET', protected: false }
  ],
  file: [
    // Upload files
    { httpRoute: '/upload/single', route: '/routes/api/upload/upload.route', handler: 'upload', method: 'POST', protected: false, isUpload: true },
    { httpRoute: '/upload/bulk', route: '/routes/api/upload/upload.route', handler: 'bulk', method: 'POST', protected: false, isUpload: true }
  ],
  security: [
    // Auth
    { httpRoute: '/login', route: '/routes/api/auth/auth.route', handler: 'login', method: 'POST', protected: false },
    { httpRoute: '/logout', route: '/routes/api/auth/auth.route', handler: 'logout', method: 'POST', protected: false },
    { httpRoute: '/validate-email/', route: '/routes/api/auth/auth.route', handler: 'validateEmail', method: 'POST', protected: false },
    { httpRoute: '/validate-account-chatbot', route: '/routes/api/auth/auth.route', handler: 'validateAccountChatbot', method: 'POST', protected: false }
  ],
  communication: [
    // Notification
    { httpRoute: '/notification/:queryselector', route: '/routes/api/notification/notification.route', handler: 'get', method: 'GET', protected: false },
    { httpRoute: '/notification/', route: '/routes/api/notification/notification.route', handler: 'create', method: 'POST', protected: false },
    { httpRoute: '/notification/', route: '/routes/api/notification/notification.route', handler: 'update', method: 'PATCH', protected: false }
  ],
  identity: [
    // Device
    { httpRoute: '/device/:queryselector', route: '/routes/api/device/device.route', handler: 'get', method: 'GET', protected: false },
    { httpRoute: '/device/', route: '/routes/api/device/device.route', handler: 'create', method: 'POST', protected: false },
    { httpRoute: '/device/', route: '/routes/api/device/device.route', handler: 'update', method: 'PATCH', protected: false },
    // User
    { httpRoute: '/user/:queryselector', route: '/routes/api/user/user.route', handler: 'get', method: 'GET', protected: false },
    { httpRoute: '/user/', route: '/routes/api/user/user.route', handler: 'create', method: 'POST', protected: false },
    { httpRoute: '/user/', route: '/routes/api/user/user.route', handler: 'update', method: 'PATCH', protected: false }
  ],
  example: [
    // Template
    { httpRoute: '/template/:queryselector', route: '/routes/api/_template/_template.route', handler: 'get', method: 'GET', protected: false },
    { httpRoute: '/template/', route: '/routes/api/_template/_template.route', handler: 'create', method: 'POST', protected: false },
    { httpRoute: '/template/', route: '/routes/api/_template/_template.route', handler: 'update', method: 'PATCH', protected: false }
  ],
  menu: [
    // Menu
    { httpRoute: '/menu/:queryselector', route: '/routes/api/menu/menu-management/menu-management.route', handler: 'get', method: 'GET', protected: false },
    { httpRoute: '/menu/', route: '/routes/api/menu/menu-management/menu-management.route', handler: 'create', method: 'POST', protected: false },
    { httpRoute: '/menu/', route: '/routes/api/menu/menu-management/menu-management.route', handler: 'update', method: 'PATCH', protected: false },
    { httpRoute: '/menu/', route: '/routes/api/menu/menu-management/menu-management.route', handler: 'delete', method: 'DELETE', protected: false },
    // MenuItem
    { httpRoute: '/menu-item/:queryselector', route: '/routes/api/menu/menu-item/menu-item.route', handler: 'get', method: 'GET', protected: false },
    { httpRoute: '/menu-item/', route: '/routes/api/menu/menu-item/menu-item.route', handler: 'create', method: 'POST', protected: false },
    { httpRoute: '/menu-item/', route: '/routes/api/menu/menu-item/menu-item.route', handler: 'update', method: 'PATCH', protected: false },
    { httpRoute: '/menu-item/', route: '/routes/api/menu/menu-item/menu-item.route', handler: 'delete', method: 'DELETE', protected: false }
  ],
  delivery: [
    // Order
    { httpRoute: '/order/:queryselector', route: '/routes/api/order/order-management/order-management.route', handler: 'get', method: 'GET', protected: false },
    { httpRoute: '/order/', route: '/routes/api/order/order-management/order-management.route', handler: 'create', method: 'POST', protected: false },
    { httpRoute: '/order/', route: '/routes/api/order/order-management/order-management.route', handler: 'update', method: 'PATCH', protected: false },
    { httpRoute: '/order/', route: '/routes/api/order/order-management/order-management.route', handler: 'delete', method: 'DELETE', protected: false }
  ]
}
// require('./api/order/order-management/order-management.route')

module.exports = router
