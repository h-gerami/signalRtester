import { HubConnection } from '@microsoft/signalr';
import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import webSocketsMethod from 'src/hooks/webSocketsMethod';
import ListeningSignalR from './ListeningSignalR';
import SendingSignalR from './SendingSignalR';
export interface SendReceiveType {
  connection: HubConnection;
}
const SendReceive = (props: SendReceiveType) => {
  const { connection } = props;
  const [isListening, setIsLestening] = useState<boolean>(false);
  const [listeningMethod, setListeningMethod] = useState<string>('');
  useEffect(() => {
    if (listeningMethod) {
      setIsLestening(true);
    } else {
      setIsLestening(false);
    }
  }, [listeningMethod]);
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <ListeningSignalR
          onDoneAddListenMethod={(t) => setListeningMethod(t)}
          connection={connection}
        />
        {isListening && <SendingSignalR connection={connection} />}
      </Grid>
    </Container>
  );
};
export default SendReceive;
{
  /* <Grid item xs={6}>
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
</Grid>
<Grid item xs={6}>
<React.Fragment>
  <TextField
    margin="dense"
    fullWidth={true}
    id="recMethod"
    label="recMethod"
    value={recMethod}
    // defaultValue="Connection Url ..."
    onChange={(t) => setRecMethod(t.target.value)}
  />
  <Button
    style={{ marginTop: 10 }}
    variant="outlined"
    color="primary"
    onClick={oncheckRecivemethodClick}
  >
    Check Receive Method
  </Button>
  {/* {isListening && (
    <TextField
      margin="dense"
      multiline
      fullWidth={true}
      rows={4}
      id="recMethodRes"
      contentEditable={false}
      value={recMethodRes}
    />
  // )} */
}
// {recMethodRes}
// </React.Fragment>
// </Grid> */}
