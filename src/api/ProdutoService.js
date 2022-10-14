import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8180/';
const URL = path => `${BASE_URL}${path}`;
const HEADERS = {
                    'Access-Control-Allow-Origin':'*',
                    'my-header':'custom-value'
                };

export class ProdutoService {
    static getProdutos() {
        
        return axios.get(URL('produtos'), {HEADERS}); 
        //axios(URL('produtos'));
    }

    static getProdutoPorId(id) {
        return axios.get(URL(`produtos/${id}`), {HEADERS});
    }
}