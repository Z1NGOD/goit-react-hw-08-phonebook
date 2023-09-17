import React from 'react';
import { FormContainer, Form, Label } from './Login.styled';
import { Btn } from 'ui/Btn.styled';
import { Input } from 'components/PhoneBook/PhoneBookStyles.styled';

function Login() {
  return (
    <FormContainer>
      <Form>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" />
        <Label htmlFor="password">Email:</Label>
        <Input type="password" id="password" name="password" />
        <Btn type="submit">Submit</Btn>
      </Form>
    </FormContainer>
  );
}

export default Login;
