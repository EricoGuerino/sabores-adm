import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8080/';
const URL = path => `${BASE_URL}${path}`;
const HEADERS = {
                    'Access-Control-Allow-Origin':'*',
                    'my-header':'custom-value'
                };

export class FabricanteService {
    static getFabricantes() {
        return axios.get(URL('fabricantes'), {HEADERS}); 
    }

    static getFabriacantePorId(id) {
        return axios.get(URL(`fabricantes/${id}`), {HEADERS});
    }
}