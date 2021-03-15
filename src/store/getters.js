const getters = {
  permission_routes: state => state.permission.routes,
  product_categorys: state => state.product.categorys,
  token: state => state.user.token,
  user_name: state => state.user.name,
}
export default getters
