import { HubConnection } from '@microsoft/signalr';
import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import webSocketsMethod from 'src/hooks/webSocketsMethod';
export interface SendingSignalRType {
  connection: HubConnection;
}
const SendingSignalR = (props: SendingSignalRType) => {
  const { connection } = props;
  const [method, setMethod] = useState<string>('');
  const [payload, setPayload] = useState<string>('');
  const [webSocketMethodRes, setWebSocketMethodRes] = useState<string>('');

  const oncheckmethodClick = () => {
    setWebSocketMethodRes('');
    let dd = JSON.parse(payload);
    webSocketsMethod({ connection, payload: dd, method })
      .then((res) => {
        setWebSocketMethodRes(`${JSON.stringify(res)}`);
      })
      .catch((err) => {
        setWebSocketMethodRes(`${JSON.stringify(err)}`);
      });
  };
  return (
    <React.Fragment>
      <TextField
        margin="dense"
        fullWidth={true}
        id="method"
        label="Method"
        value={method}
        placeholder="SignalR Method ..."
        // defaultValue="Connection Url ..."
        onChange={(t) => setMethod(t.target.value)}
      />

      <TextField
        margin="dense"
        multiline
        fullWidth={true}
        rows={4}
        id="payload"
        label="payload"
        value={payload}
        placeholder="SignalR Payload ..."
        // defaultValue="Connection Url ..."
        onChange={(t) => setPayload(t.target.value)}
      />
      <Button
        style={{ marginTop: 10 }}
        variant="outlined"
        color="primary"
        onClick={oncheckmethodClick}
      >
        Check Method
      </Button>
      {webSocketMethodRes && (
        <TextField
          margin="dense"
          multiline
          fullWidth={true}
          rows={4}
          id="payload"
          // label="payload"
          contentEditable={false}
          value={webSocketMethodRes}
        />
      )}
    </React.Fragment>
  );
};
export default SendingSignalR;
