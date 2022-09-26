import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
const ListeningResponse = (props: any) => {
  const { connection, method } = props;
  const [methodAnser, setMethodAnswer] = useState<string>('');

  useEffect(() => {
    if (connection?.state === 'Disconnected') {
      connection?.start().then(() => {
        connection.on(method, (message: any) => {
          setMethodAnswer(JSON.stringify(message));
        });
      });
    } else {
      connection?.on(method, (message: any) => {
        setMethodAnswer(JSON.stringify(message));
      });
    }
  }, []);
  return (
    <React.Fragment>
      <TextField
        margin="dense"
        multiline
        fullWidth={true}
        rows={4}
        id="payload"
        // label="payload"
        contentEditable={false}
        value={methodAnser}
      />
    </React.Fragment>
  );
};
export default ListeningResponse;
