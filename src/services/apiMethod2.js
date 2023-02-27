import { API_URL } from '../settings/settings';
import axios from 'axios';
import { TOKEN_CYBER,ACCESS_TOKEN } from '../settings/settings';

 let access_Token = ''
 if (localStorage.getItem(ACCESS_TOKEN)) {
    access_Token = localStorage.getItem(ACCESS_TOKEN);
 }

export class APIMethod {
    get = (url) => {
        return axios({
           method: 'GET',
           url: `${API_URL}${url}`,
           maNhom: 'GP01',
           headers: {
              TokenCybersoft: TOKEN_CYBER,
           },
        });
     }

   post = (url,model) => {
      return axios({
         method: 'POST',
         url: `${API_URL}${url}`,
         maNhom: 'GP01',
         data: model,
         headers: {
            Authorization : 'Bearer ' + access_Token,
            TokenCybersoft: TOKEN_CYBER,
         },
      });
   }

   put = (url,model) => {
      return axios({
         method: 'PUT',
         url: `${API_URL}${url}`,
         data: model,
         headers: {
            Authorization : 'Bearer ' + access_Token,
            TokenCybersoft: TOKEN_CYBER,
         },
      });
   }

}
export const apiMethod = new APIMethod();
