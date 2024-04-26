import React from "react";
import Home from "./pages/Home";
import { AppShell } from "@mantine/core";
import Rightpane from "./components/Rightpane";
import Leftpane from "./components/Leftpane";
import Header from "./components/Header"
import Footer from "./components/Footer";

export default function Routing() {

    return (
        <AppShell  withBorder={true} navbar={{ width: 300}} header={{ height: 45 }} aside={{ width: 320 }}>

            <AppShell.Header zIndex='10' style={{backgroundColor:"#f8f9fa"}}>
                <Header/>
            </AppShell.Header>

            <AppShell.Navbar style={{backgroundColor:"#f8f9fa"}}>
                <Leftpane/>
            </AppShell.Navbar>
         
            <AppShell.Main style={{backgroundColor:"#f8f9fa"}}>
                <Home />
            </AppShell.Main>
            <AppShell.Aside style={{backgroundColor:"#f8f9fa"}}>
                <Rightpane/>
            </AppShell.Aside>
            <AppShell.Footer withBorder={false} style={{marginLeft:'380px',backgroundColor:"#f8f9fa"}}>
                <Footer/>
            </AppShell.Footer>

        </AppShell>
    )
}

