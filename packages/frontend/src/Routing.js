import React from "react";
import Home from "./pages/Home";
import { AppShell } from "@mantine/core";
import Rightpane from "./components/Rightpane";

export default function Routing() {

    return (
        <AppShell navbar={{ width: 250}} header={{ height: 45 }} aside={{ width: 400 }}>

            <AppShell.Header zIndex='10'>
                Header
            </AppShell.Header>

            <AppShell.Navbar>
                navbar
            </AppShell.Navbar>
         
            <AppShell.Main >
                <Home/>
            </AppShell.Main>
            <AppShell.Aside>
                <Rightpane/>
            </AppShell.Aside>
        </AppShell>
    )
}

