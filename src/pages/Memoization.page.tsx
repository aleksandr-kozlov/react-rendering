import React, { ReducerState, useReducer } from 'react';
import { Fieldset, TextInput } from '@mantine/core';

type SetName = {
    type: 'set_name',
    payload: string
};

type SetSurname = {
    type: 'set_surname',
    payload: string
};

type SetEmail = {
    type: 'set_email',
    payload: string
};

type Actions = SetName | SetSurname | SetEmail;

type FormState = { name: string, surname: string, email: string };

const initialState: FormState = { name: '', surname: '', email: '' };

const reducer = (state: FormState, action: Actions): FormState => {
    switch (action.type) {
        case 'set_name':
            return { ...state, name: action.payload };
        case 'set_surname':
            return { ...state, surname: action.payload };
        case 'set_email':
            return { ...state, email: action.payload };
        default:
            return state;
    }
};

const useEditor = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState as ReducerState<FormState>);

    const setName = React.useCallback((name: string) => dispatch({ type: 'set_name', payload: name }), [dispatch]);
    const setSurname = React.useCallback((surname: string) => dispatch({ type: 'set_surname', payload: surname }), [dispatch]);
    const setEmail = React.useCallback((email: string) => dispatch({ type: 'set_email', payload: email }), [dispatch]);

    return {
        state,
        actions: {
            setName,
            setSurname,
            setEmail,
        },
    };
};

const NameField: React.FC<{ name: string, onChange: (value: string) => void; }> = React.memo(({ name, onChange }) => <TextInput label="Имя" value={name} onChange={(e) => onChange(e.target.value)} />);

const SurnameField: React.FC<{ surname: string, onChange: (value: string) => void; }> = React.memo(({ surname, onChange }) => <TextInput label="Фамилия" value={surname} onChange={(e) => onChange(e.target.value)} />);

const EmailField: React.FC<{ email: string, onChange: (value: string) => void; }> = React.memo(({ email, onChange }) => <TextInput label="Email" value={email} onChange={(e) => onChange(e.target.value)} />);

export const MemoizationPage = () => {
    const { state, actions } = useEditor();

    const handleChangeName = React.useCallback((value) => actions.setName(value), [actions.setName]);
    const handleChangeSurname = React.useCallback((value) => actions.setSurname(value), [actions.setSurname]);
    const handleChangeEmail = React.useCallback((value) => actions.setEmail(value), [actions.setEmail]);

    return (
        <Fieldset legend="Анкета">
            <NameField name={state.name} onChange={handleChangeName} />
            <SurnameField surname={state.surname} onChange={handleChangeSurname} />
            <EmailField email={state.email} onChange={handleChangeEmail} />
        </Fieldset>
    );
};
