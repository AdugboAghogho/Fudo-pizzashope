import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

export default (params) => {
 const [opened, { open, close }] = useDisclosure(false);

  return (
    <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        hxhjgjhkl
      </Modal>

    //   <Button onClick={open}>Open modal</Button>
  )
}
