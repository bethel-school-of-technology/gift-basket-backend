# gift-basket-backend

1. Create Order
     1. Backend
     2. server.js
     3. create order modal
     4. get /api/orders
     5. post /api/orders
     6. delete /api/orders/:id
     7. Frontend
     8. create types
     9. types.js
     10. CLEAR_ORDER, CLEAR_CART, CREATE_ORDER
     11. create actions
     12. actions/orderActions.js
     13. createOrder(order)
     14. clearOrder()
     15. create reducers
     16. reducers/orderReducers.js
     17. case CREATE_ORDER
     18. case CLEAR_ORDER
     19. Update Cart Component
     20. components/Cart.js
     21. connect order, createOrder, clearOrder
     22. form onSubmit={this.createOrder}
     23. createOrder() this.props.createOrder(order)
     24. closeModal() this.props.clearOrder()
     25. render()

