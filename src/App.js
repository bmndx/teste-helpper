import React from 'react';
import { Container, Content, InputGroup } from './styles';
import { Formik, Field, Form } from 'formik';
import Schema from './schema';

function App() {
    function onSubmit(values, actions) {
      alert('yay submitou');
    }
  
    function onBlurCep(ev, setFieldValue) {
      const { value } = ev.target;
  
      const cep = value?.replace(/[^0-9]/g, '')
  
      if (cep?.length !== 8) {
        return;
      }
  
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          setFieldValue('logradouro', data.logradouro);
          setFieldValue('bairro', data.bairro);
          setFieldValue('cidade', data.localidade);
          setFieldValue('uf', data.uf);
        });
    }
  
    function maskCpf(ev, setFieldValue) {
      const { value } = ev.target;
    
      const cpf = value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
       
      return setFieldValue('cpf', cpf);
    }
  
    function maskCep(ev, setFieldValue) {
      const { value } = ev.target;
    
      const cep = value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      
      return setFieldValue('cep', cep);
    } 
  
    return (
        <Formik
          validationSchema={Schema}
          onSubmit={onSubmit}
          initialValues={{
            name: '',
            email: '',
            cpf: '',
            telefone: '',
            cep: '',
            logradouro: '',
            bairro: '',
            numero: '',
            complemento: '',
            cidade: '',
            uf: '',
            password: '',
            password2: '',
          }}

          render={({ isValid, setFieldValue, errors, touched }) => (        
             <Container>
                 <h1>
                    Faça seu cadastro
                 </h1>
                  <Content>
                    <Form>
                      <InputGroup> 
                        <div>
                          <Field                         
                          name="name" 
                          type="text"
                          placeholder="Digite seu nome *" />
                           {errors.name && touched.name ? (
                            <span>{errors.name}</span>) : null} 
                        </div>                      
  
                        <div>                
                          <Field 
                          name="email" 
                          type="email"     
                          placeholder="Digite seu E-mail *" />
                          {errors.email && touched.email ? (
                            <span>{errors.email}</span>) : null}   
                        </div>
  
                        <div>                                  
                          <Field
                          name="cpf" 
                          type="text"
                          onChange={(ev) => maskCpf(ev, setFieldValue)}
                          maxLength={14}               
                          placeholder="Digite seu CPF *" />
                          {errors.cpf && touched.cpf ? (
                            <span>{errors.cpf}</span>) : null}   
                        </div> 
  
                        <div>
                          <Field 
                          name="telefone"
                          type="text"
                          placeholder="Digite seu telefone *" />
                          {errors.telefone && touched.telefone ? (
                            <span>{errors.telefone}</span>) : null} 
                        </div>
  
                        <div> 
                          <Field
                          name="cep" 
                          type="text" 
                          onChange={(ev) => maskCep(ev, setFieldValue)}
                          onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                          maxLength={9} 
                          placeholder="Digite seu CEP *" />
                          {errors.cep && touched.cep ? (
                            <span>{errors.cep}</span>) : null} 
                        </div>   
  
                        <div>                                          
                          <Field 
                          name="logradouro" 
                          type="text"
                          placeholder="Digite sua rua *" />
                          {errors.logradouro && touched.logradouro ? (
                            <span>{errors.logradouro}</span>) : null} 
                        </div>  
  
                        <div>                                        
                          <Field 
                          name="bairro" 
                          type="text"
                          placeholder="Digite seu bairro *" />
                          {errors.bairro && touched.bairro ? (
                            <span>{errors.bairro}</span>) : null} 
                        </div>
                      
                        <div>
                          <Field 
                          name="numero" 
                          type="text"
                          placeholder="Digite o número da sua casa *" />
                          {errors.numero && touched.numero ? (
                            <span>{errors.numero}</span>) : null} 
                        </div>
  
                        <div> 
                          <Field 
                          name="complemento" 
                          placeholder="Digite um complemento"
                          type="text" />  
                        </div>                    
                        
                        <div>
                          <Field 
                          name="cidade" 
                          type="text"
                          placeholder="Digite sua cidade *" />
                          {errors.cidade && touched.cidade ? (
                            <span>{errors.cidade}</span>) : null}   
                        </div>                 
                      
                        <div>
                          <Field 
                          name="uf" 
                          type="text"
                          placeholder="Digite seu estado *" />
                          {errors.uf && touched.uf ? (
                            <span>{errors.uf}</span>) : null} 
                        </div>
  
                        <div>           
                          <Field 
                          name="password" 
                          type="password"
                          placeholder="Digite sua senha *" />
                          {errors.password && touched.password ? (
                            <span>{errors.password}</span>) : null} 
                        </div>
  
                        <div>                                      
                          <Field 
                          name="password2" 
                          type="password"
                          placeholder="Confirme sua senha *" />
                          {errors.password2 && touched.password2 ? (
                            <span>{errors.password2}</span>) : null} 
                        </div>  
                    
                        <div> 
                          <button type="submit" disabled={!isValid}>Cadastrar</button> 
                        </div> 
                    </InputGroup>
                  </Form>
                </Content>
            </Container>         
          )}
        />
    );
  }

export default App;
