import { Button } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';

function App() {
  const theme = useMantineTheme();

  console.log(theme)
  return (
    <>
      <Button size="compact-sm" leftSection={<div>joe</div>} rightSection={<a href='https://www.google.com'>google</a>}
        variant="filled" color={theme.colors.teal[9]}>Button</Button>
    </>
  );
}

export default App;
