import brancheServices from './BrancheServices'
import CategoryService from './CategoryService'
import ProductService from './ProductService'
import RegisterService from './Register'
import CartService from './Cart'
import PagesService from './pages'
import ProfileService from './Profile'
import OrderService from './Order'
import CommonService from './Common'
// import Events from './events'

const services = {
    Category: CategoryService,
    Products: ProductService,
    Branches: brancheServices,
    Register: RegisterService,
    Cart: CartService,
    pages: PagesService,
    profile: ProfileService,
    orders: OrderService,
  common: CommonService,
    //  events:Events
}

export const ServiceFactory = {
    get: name => services[name],
}
