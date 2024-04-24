import React from 'react'
import { Tabs, Text } from '@mantine/core'
import Dashboard from '../components/Dashboard'

export default function Home() {

  return (
        <Tabs color="cyan" defaultValue="gallery">
      
            <Tabs.List justify="center">
                <Tabs.Tab value="dashboard">
                    <Text fw={600}> Dashboard </Text>
                </Tabs.Tab>
                <Tabs.Tab value="messages">
                    Filter
                </Tabs.Tab>
                <Tabs.Tab value="settings">
                    Most Pertinent Questions
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="dashboard">
                <Dashboard/>
            </Tabs.Panel>

            <Tabs.Panel value="messages">
                Messages tab content
            </Tabs.Panel>

            <Tabs.Panel value="settings">
                Settings tab content
            </Tabs.Panel>
        </Tabs>
  )

}
