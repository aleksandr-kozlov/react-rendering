import React, { ReducerState } from 'react';
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

    const setName = (name: string) => dispatch({ type: 'set_name', payload: name });
    const setSurname = (surname: string) => dispatch({ type: 'set_surname', payload: surname });
    const setEmail = (email: string) => dispatch({ type: 'set_email', payload: email });

    return {
        state,
        actions: {
            setName,
            setSurname,
            setEmail,
        },
    };
};

const NameField: React.FC<{ name: string, onChange: (value: string) => void; }> = ({ name, onChange }) => <TextInput label="Имя" value={name} onChange={(e) => onChange(e.target.value)} />;

const SurnameField: React.FC<{ surname: string, onChange: (value: string) => void; }> = ({ surname, onChange }) => <TextInput label="Фамилия" value={surname} onChange={(e) => onChange(e.target.value)} />;

const EmailField: React.FC<{ email: string, onChange: (value: string) => void; }> = ({ email, onChange }) => <TextInput label="Email" value={email} onChange={(e) => onChange(e.target.value)} />;

export const MemoizationPage = () => {
    const { state, actions } = useEditor();

    const handleChangeName = (value) => actions.setName(value);
    const handleChangeSurname = (value) => actions.setSurname(value);
    const handleChangeEmail = (value) => actions.setEmail(value);

    return (
        <Fieldset legend="Анкета">
            <NameField name={state.name} onChange={handleChangeName} />
            <SurnameField surname={state.surname} onChange={handleChangeSurname} />
            <EmailField email={state.email} onChange={handleChangeEmail} />
        </Fieldset>
    );
};
