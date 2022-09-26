import { CardHeader, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useWebSokets } from 'src/hooks/useWebSokets';
import SendReceive from './SendReceive';

const SignalRContent = (props: { url: string; token?: string }) => {
  const { url, token } = props;
  const connection = useWebSokets({ url, token });
  const [connectionStatus, setConnectionStatus] = useState<string>('');

  useEffect(() => {
    if (connection?.state === 'Disconnected') {
      setConnectionStatus('Disconnected');
      connection
        ?.start()
        .then((res) => {
          setConnectionStatus('Connected');
        })
        .catch((err) => {
          console.log(err, 'errr');
          setConnectionStatus('Disconnected');
        });
    } else {
      setConnectionStatus('Connected');
    }
    setConnectionStatus(connection?.state);
  }, [connection, url]);

  return (
    <React.Fragment>
      <CardHeader
        style={{ padding: 0 }}
        title={
          connectionStatus === 'Connecting' ? 'Connected' : connectionStatus
        }
      />
      <Box style={{ marginTop: 20 }} sx={{ width: '100%' }}>
        <SendReceive connection={connection} />
      </Box>
    </React.Fragment>
  );
};
export default SignalRContent;
// JSON.stringify(connection.state)
