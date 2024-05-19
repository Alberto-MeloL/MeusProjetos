import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {


  constructor() { }

  validarCampos(dados: unknown): { sucesso: boolean; menssagem?: string }{
    // validando tipos
    if (typeof dados !== 'object' || dados === null) {
return {sucesso: false, menssagem: 'Dados inválidos'}
    }

    // desestruturar os dados caso seja válido
    const {nome, email, senha} = dados as {nome: string, email: string, senha: string};

    if (nome === null || nome.length < 2 || /\d/.test(nome)) {
return {sucesso: false, menssagem: 'O campo não pode ser vázio, no mínimo dois caracteres, não deve conter números.'}
    }

    if (!this.validarEmail(email)) {
return {sucesso: false, menssagem: 'Email inválido\ncomo deve se parecer.Ex: user123.a@gmail.com'}
    }

    if (!this.validarSenha(senha)) {
return {sucesso: false, menssagem: 'Senha inválida'}
    }

    return {sucesso: true}
  }


private validarEmail(email: string): boolean{

  const regexEmail = /^[\w.-]+@gmail\.com$/;
  return regexEmail.test(email);

}

private validarSenha(senha: string): boolean{

  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Aa-z\d@$!%*?&]{8,}$/;
  return regexSenha.test(senha);

}
}

