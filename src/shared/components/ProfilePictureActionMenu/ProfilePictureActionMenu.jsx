import { Menu } from '@mantine/core';

export function ProfilePictureActionMenu(props) {
  const { children, uploadAction, removeAction } = props;

  const uploadPhoto = () => uploadAction();
  const removePhoto = () => removeAction();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={uploadPhoto}>Upload Profile Photo</Menu.Item>
        <Menu.Item onClick={removePhoto}>Remove Profile Photo</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
