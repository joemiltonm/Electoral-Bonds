import { Button } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';

function App() {
  const theme = useMantineTheme();

  console.log(theme)
  return (
    <>
        <Button variant="filled">Button</Button>
    </>
  );
}

export default App;
