/* eslint-disable handle-callback-err */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HubConnection } from '@microsoft/signalr';
export interface webSocketsMethodType {
  connection: HubConnection | undefined;
  payload: any;
  method: string;
}
const webSocketsMethod = (props: webSocketsMethodType): Promise<number> => {
  const { payload, connection, method } = props;

  return new Promise<number>((resolve, reject) => {
    if (connection?.state === 'Disconnected') {
      connection?.start().then(() => {
        connection
          .invoke(method, payload)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    } else {
      connection
        ?.invoke(method, payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
export default webSocketsMethod;
