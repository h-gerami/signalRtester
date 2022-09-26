import { HubConnection } from '@microsoft/signalr';
import { TextField, Button } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import ListeningResponse from './ListeningResponse';
export interface ListeningSignalRType {
  connection: HubConnection;
  onDoneAddListenMethod?: (value: string) => void;
}
const ListeningSignalR = (props: ListeningSignalRType) => {
  const { connection, onDoneAddListenMethod } = props;
  const [method, setMethod] = useState<string>('');
  const [isListening, setIsLestening] = useState<boolean>(false);
  const oncheckmethodClick = () => {
    if (!method) return alert('set url first');
    setIsLestening(false);
    setTimeout(() => {
      setIsLestening(true);
      onDoneAddListenMethod(method);
    }, 500);
  };

  return (
    <React.Fragment>
      <div className="listen-wrapper">
        <TextField
          margin="dense"
          fullWidth={true}
          id="method"
          label="Listening Method"
          value={method}
          placeholder="Listening Method ..."
          // defaultValue="Connection Url ..."
          onChange={(t) => {
            setMethod(t.target.value);
            setIsLestening(false);
          }}
        />
        <Button
          style={{ marginLeft: 10 }}
          variant="outlined"
          color="primary"
          onClick={oncheckmethodClick}
        >
          Done
        </Button>
      </div>
      {isListening && (
        <ListeningResponse connection={connection} method={method} />
      )}
    </React.Fragment>
  );
};
export default ListeningSignalR;
