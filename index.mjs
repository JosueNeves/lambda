/* global fetch */
import { isValidCPF } from './libs.mjs';

export const handler = async (event) => {
  try {
    let cpf = event.pathParameters.id;
    
    if (isValidCPF(cpf)){

      //const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      //return {
      //  statusCode: 200,
      //  headers: {
      //    'Content-Type': 'application/json'
      //  },
      //  body: res.json()
      //};
      
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([{
          name: 'Josué',
          surname: 'Jr.',
          email: 'josue@fiap.com.br',
          cpf: cpf
          }]),
      };
      
    } else {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([{
          erro: 'O CPF fornecido não é válido!',
          }]),
      };
    }
    
  } catch (err) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([{
        erro: 'Verifique se o parametro fornecido é um CPF correto.',
        }]),
    };
  }
};
