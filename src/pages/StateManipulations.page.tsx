import React from 'react';
import { SimpleGrid, TextInput, Text, MantineColor, Fieldset } from '@mantine/core';

const SoloComponent = () => {
    const [value, setValue] = React.useState('');

    return <TextInput label="Комментарий" value={value} onChange={(e) => setValue(e.target.value)} />;
};

const ExpensiveComponent = () => <Text>Component with expensive render cost</Text>;

const CompositeComponent = () => {
    const [color, setColor] = React.useState<MantineColor>('green' as MantineColor);

    return (
        <SimpleGrid col={1}>
            <TextInput label="Color" value={color} onChange={(e) => setColor(e.target.value)} />
            <Text color={color}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
            <ExpensiveComponent />
        </SimpleGrid>
    );
};

export const StateManipulations: React.FC = () => (
        <>
            <Fieldset legend="Child Free компонент">
                <SoloComponent />
            </Fieldset>
            <Fieldset legend="Компонент с детьми">
                <CompositeComponent />
            </Fieldset>
        </>
    );
