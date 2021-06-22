import * as Yup from "yup";

export default Yup.object().shape({
   name: Yup.string() 
   .required('O nome é obrigatório'),
   email: Yup.string() 
   .email('Informe um email válido') 
   .required('O e-mail é obrigatório'),
   cpf: Yup.string() 
   .required('O CPF é obrigatório'),
   telefone: Yup.string() 
   .required('O telefone é obrigatório'),
   cep: Yup.string() 
   .required('O CEP é obrigatório'),
   logradouro: Yup.string() 
   .required('A rua é obrigatória'),
   bairro: Yup.string() 
   .required('O bairro é obrigatório'),
   cidade: Yup.string() 
   .required('A cidade é obrigatória'),
   uf: Yup.string() 
   .required('O estado é obrigatório'),
   numero: Yup.string() 
   .required('O número é obrigatório'),
   password: Yup.string() 
   .required('A senha é obrigatória') 
   .oneOf([Yup.ref('password2')], 'As senhas devem ser iguais') 
   .min(8, 'No mínimo 8 caracteres')
   .matches(/(?=.*[0-9])/,'A senha deve conter um número'),
   password2: Yup.string() 
   .required('A senha é obrigatório') 
   .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),     

})