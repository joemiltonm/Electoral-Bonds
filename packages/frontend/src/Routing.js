import React from "react";
import Home from "./pages/Home";
import { AppShell } from "@mantine/core";
import Rightpane from "./components/Rightpane";
import Leftpane from "./components/Leftpane";

export default function Routing() {

    return (
        <AppShell withBorder={true} navbar={{ width: 300}} header={{ height: 45 }} aside={{ width: 320 }}>

            <AppShell.Header zIndex='10' >
                Header
            </AppShell.Header>

            <AppShell.Navbar>
                <Leftpane/>
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

