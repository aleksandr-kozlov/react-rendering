import { AppShell, NavLink } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom';
import { Paths } from '@/Router';

function Sidebar() {
    const navigate = useNavigate();

    return (
        <>
            <NavLink onClick={() => navigate(Paths.counters)} label="Счетчики" />
            <NavLink onClick={() => navigate(Paths.timers)} label="Таймер" />
            <NavLink onClick={() => navigate(Paths.state)} label="Изменения стейта" />
            <NavLink onClick={() => navigate(Paths.context)} label="Изменения контекста" />
        </>
    );
}

export function HomePage() {
  return (
    <AppShell padding="md" navbar={{ width: 250 }}>
        <AppShell.Navbar>
            <Sidebar />
        </AppShell.Navbar>
        <AppShell.Main><Outlet /></AppShell.Main>
    </AppShell>
  );
}
