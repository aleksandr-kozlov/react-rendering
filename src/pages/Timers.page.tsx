import React from 'react';
import { Grid, Text } from '@mantine/core';

const Timer = () => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        const id = setInterval(() => setCount(prev => prev + 1), 1000);

        return () => clearInterval(id);
    }, []);

    return <Text>{count < 100 ? 'Пока нет' : 'Теперь да'}</Text>;
};

export const TimersPage: React.FC = () => (
    <Grid gutter="md" grow>
        {[...Array(1000)].map((_, index) => (
            <Grid.Col key={index} span={4}><Timer /></Grid.Col>
        ))}
    </Grid>
);
