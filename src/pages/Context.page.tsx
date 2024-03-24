import React from 'react';
import { SimpleGrid, Text, Button, Card, Badge, Group } from '@mantine/core';

const StateContext = React.createContext<string>('green');
const SetterContext = React.createContext<(newColor: string) => void>(() => {});

const useColorText = () => React.useContext(StateContext);
const useSetColorText = () => React.useContext(SetterContext);

const TextColorProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [color, setColor] = React.useState('green');

    return (
        <SetterContext.Provider value={setColor}>
            <StateContext.Provider value={color}>{children}</StateContext.Provider>
        </SetterContext.Provider>
    );
};

const ContextConsumer = () => {
    const color = useColorText();

    return <Text style={{ color }}>Текущий цвет: {color}</Text>;
};

const ContextSetter = () => {
    const setColor = useSetColorText();

    return (
        <SimpleGrid col={3}>
            <Button onClick={() => setColor('green')}>Green</Button>
            <Button onClick={() => setColor('black')}>black</Button>
            <Button onClick={() => setColor('yellow')}>yellow</Button>
        </SimpleGrid>
    );
};

const Description = () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
        <ContextConsumer />

        <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Компонент с дочерним потребителем</Text>
            <Badge color="pink">On Sale</Badge>
        </Group>

            <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>
    </Card>
    );

const Panel = () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder>

        <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Компонент с дочерним сеттером</Text>
            <Badge color="gray">On Sale</Badge>
        </Group>

        <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
        </Text>
        <ContextSetter />
    </Card>
);

export const ContextPage: React.FC = () => (
        <TextColorProvider>
            <SimpleGrid col={1}>
                <ContextConsumer />
                <Description />

                <ContextSetter />
                <Panel />
            </SimpleGrid>
        </TextColorProvider>
    );
