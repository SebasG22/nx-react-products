import { Entity } from './products.reducer';
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

// export function fetchProducts(): Promise<Entity[]> {
//     return new Promise((res, rej) => {
//         fetch(`${environment.backendUrl}${basePathUrl}`).then((response) => {
//             console.log(response);
//             res(response.json());
//         }).catch((e) => {
//             rej(e);
//         });
//     })
// }
