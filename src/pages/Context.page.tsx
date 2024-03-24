import React from 'react';
import { SimpleGrid, Text, Button, Card, Badge, Group } from '@mantine/core';

const Context = React.createContext<{ color: string; setColor:(newColor: string) => void }>({ color: 'green', setColor: () => {} });

const ContextConsumer = () => {
    const { color } = React.useContext(Context);

    return <Text style={{ color }}>Текущий цвет: {color}</Text>;
};

const ContextSetter = () => {
    const { setColor } = React.useContext(Context);

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

export const ContextPage: React.FC = () => {
    const [color, setColor] = React.useState('green');

    return (
        <Context.Provider value={{ color, setColor }}>
            <SimpleGrid col={1}>
                <ContextConsumer />
                <Description />

                <ContextSetter />
                <Panel />
            </SimpleGrid>
        </Context.Provider>
    );
};
