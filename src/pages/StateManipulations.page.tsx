import React from 'react';
import { SimpleGrid, TextInput, Text, MantineColor } from '@mantine/core';

const SoloComponent = () => {
    const [value, setValue] = React.useState('');

    return <TextInput label="Комментарий" value={value} onChange={(e) => setValue(e.target.value)} />;
};

const ExpensiveComponent = () => {
    const now = performance.now();
    while (performance.now() - now < 300) {
        // artificial delay
    }

    return <Text>Expensive calculations</Text>;
};

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

// fix for composite component
const TextWithColorPicker = () => {
    const [color, setColor] = React.useState<MantineColor>('green' as MantineColor);

    return (
        <>
            <TextInput label="Color" value={color} onChange={(e) => setColor(e.target.value)} />
            <Text color={color}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
        </>
    );
};

const CompositeComponentFixed = () => (
    <SimpleGrid col={1}>
        <TextWithColorPicker />
        <ExpensiveComponent />
    </SimpleGrid>
);

// Composite 2
const CompositeComponent2 = () => {
    const [color, setColor] = React.useState<MantineColor>('green' as MantineColor);

    return (
        <SimpleGrid col={1}>
            <TextInput label="Color" value={color} onChange={(e) => setColor(e.target.value)} />
            <Text color={color}>
                <ExpensiveComponent />
            </Text>
        </SimpleGrid>
    );
};

// composite 2 fix
const TextPainter: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [color, setColor] = React.useState<MantineColor>('green' as MantineColor);

    return (
        <>
            <TextInput label="Color" value={color} onChange={(e) => setColor(e.target.value)} />
            <Text color={color}>
                {children}
            </Text>
        </>
    );
};

const CompositeComponent2Fixed = () => (
        <SimpleGrid col={1}>
            <TextPainter>
                <ExpensiveComponent />
            </TextPainter>
        </SimpleGrid>
    );

export const StateManipulations: React.FC = () => <CompositeComponent2Fixed />;
