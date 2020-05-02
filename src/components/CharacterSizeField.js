import React from 'react';

import LogDialogTextField from './LogDialogTextField';

export default function CharacterSizeField() {
  return <LogDialogTextField
    id="character_size"
    label="Character Size"
    type="number"
    default_value={8}
  />;
};