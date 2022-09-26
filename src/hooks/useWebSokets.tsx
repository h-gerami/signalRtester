import { useState, useEffect, useCallback } from 'react';
import { CUBY_WebSockets_confessHub } from '../components/Global/Global';
import {
  HttpTransportType,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  HubConnection,
  HubConnectionBuilder,
  IHttpConnectionOptions,
  LogLevel
} from '@microsoft/signalr';
export function useWebSokets(props: { url: string; token?: string }) {
  const { url, token } = props;
  const [connection, setConnection] = useState<HubConnection>();
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl(url, {
        accessTokenFactory: () => token,
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .configureLogging(LogLevel.Debug)
      .withAutomaticReconnect()
      .build();
    setConnection(newConnection);
  }, []);

  return connection;
}
