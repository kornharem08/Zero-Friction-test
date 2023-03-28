import http from "./http";

class ProductService {
    getProduct(params?: object) {
        return http.get('/products', params)
    }
}

export default new ProductService();
