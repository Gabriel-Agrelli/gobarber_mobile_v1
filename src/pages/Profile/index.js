import React, {useRef, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {updateProfileRequest} from '~/store/modules/user/actions';
import {signOut} from '~/store/modules/auth/actions';

import {
  Container,
  Title,
  Form,
  FormInput,
  Separator,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      }),
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>

        <Form>
          <FormInput
            icon="person-outline"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            blurOnSubmit={false}
            autoCorrent={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            blurOnSubmit={false}
            ref={emailRef}
            autoCorrent={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha atual"
            returnKeyType="send"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={oldPasswordRef}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua nova senha"
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
            returnKeyType="done"
            ref={confirmPasswordRef}
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
