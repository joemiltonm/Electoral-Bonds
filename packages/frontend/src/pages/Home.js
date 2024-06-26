import React from 'react'
import { Tabs, Text } from '@mantine/core'
import Dashboard from '../components/Dashboard'

export default function Home() {

  return (
        <Tabs color="cyan" defaultValue="dashboard">
      
            <Tabs.List justify="center">
                <Tabs.Tab value="dashboard">
                    <Text fw={600}> Dashboard </Text>
                </Tabs.Tab>
              <Tabs.Tab value="messages">
                  <Text fw={600}> Filter </Text>
                    
                </Tabs.Tab>
              <Tabs.Tab value="settings">
                  <Text fw={600}> Most Pertinent Questions </Text>
                    
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="dashboard">
                <Dashboard/>
            </Tabs.Panel>

          <Tabs.Panel value="messages">
                
            </Tabs.Panel>

            <Tabs.Panel value="settings">
                Settings tab content
            </Tabs.Panel>
        </Tabs>
  )

}
