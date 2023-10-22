import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  async getCDI(): Promise<any>{   
    const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.4391/dados?formato=json`;
    return await fetch(url)
    .then((response) => {         
     return response.json()
    })
    .then((json)=> { 
      return json.slice(-13).reverse()  
    })      
    .catch((e) => { throw new HttpException({'error': e.error}, HttpStatus.BAD_REQUEST) } );
  }
}
