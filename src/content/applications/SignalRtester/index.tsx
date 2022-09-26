import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Grid,
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Button
} from '@mui/material';
import Footer from 'src/components/Footer';
import { useWebSokets } from 'src/hooks/useWebSokets';
import { useEffect, useState } from 'react';
import webSocketsMethod from 'src/hooks/webSocketsMethod';
import { SOMTHING_WENT_WRONG } from 'src/components/Global/Errors';
import './s-r.scss';
import SignalRContent from './SignalRContent';
function ApplicationsSignalRtester() {
  const [url, setUrl] = useState<string>('');
  const [showContent, setShowContent] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');

  const onConnectClick = () => {
    if (!url) return alert('set url first');
    setShowContent(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  return (
    <>
      <Helmet>
        <title>SignalRtester - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <div className="url-wrapper">
          <TextField
            fullWidth={true}
            required
            id="outlined-required"
            label="Required"
            placeholder="Connection Url ..."
            value={url}
            style={{ marginRight: 5 }}
            onChange={(t) => setUrl(t.target.value)}
          />
          <TextField
            fullWidth={true}
            id="token"
            label="Token"
            value={token}
            style={{ marginLeft: 5 }}
            placeholder="SignalR Token ..."
            // defaultValue="Connection Url ..."
            onChange={(t) => setToken(t.target.value)}
          />
          <Button
            sx={{ margin: 1 }}
            variant="contained"
            color="primary"
            onClick={onConnectClick}
          >
            Connect
          </Button>
        </div>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            {showContent && (
              <Card>
                <CardContent>
                  <SignalRContent token={token} url={url} />
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ApplicationsSignalRtester;
