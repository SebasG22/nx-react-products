import { environment } from '../../../environments/environment';

export const basePathUrl = 'products';

export const fetchProducts = () => {
    return new Promise((res, rej) => {
        fetch(`${environment.backendUrl}${basePathUrl}`).then((response) => {
            res(response.json());
        }).catch((e) => {
            rej(e);
        });
    })
}
