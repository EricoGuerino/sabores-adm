import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8080/';
const URL = path => `${BASE_URL}${path}`;
const HEADERS = {
                    'Access-Control-Allow-Origin':'*',
                    'my-header':'custom-value'
                };

export class CategoriaService {
    static getCategorias() {
        return axios.get(URL('categorias'), {HEADERS}); 
    }

    static getCategoriaPorId(id) {
        return axios.get(URL(`categorias/${id}`), {HEADERS});
    }

    static novaCategoria(_descricao) {
        console.log("CategoriaService.novaCategoria("+_descricao+")")
        axios.post(URL(`categorias`), {descricao: _descricao}, {HEADERS});
    }
}