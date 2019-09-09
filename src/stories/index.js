import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../components/Page';
import { Title } from '../components/Typography';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';

storiesOf('Fundamentals', module).add('Typography', () => (
  <Page>
    <Grid columns="100px 1fr 100px" height="100vh">
      <GridItem columnStart="2">
        <div
          style={{ marginTop: '1em', padding: '1em', background: '#efefef' }}
        >
          <Title level={1} style={{ textAlign: 'center' }}>
            H1 - Header
          </Title>
        </div>
        <div
          style={{ marginTop: '1em', padding: '1em', background: '#efefef' }}
        >
          <Title level={2} style={{ textAlign: 'center' }}>
            H2 - Header
          </Title>
        </div>
        <div
          style={{ marginTop: '1em', padding: '1em', background: '#efefef' }}
        >
          <Title level={3} style={{ textAlign: 'center' }}>
            H3 - Header
          </Title>
        </div>
        <div
          style={{ marginTop: '1em', padding: '1em', background: '#efefef' }}
        >
          <Title level={4} style={{ textAlign: 'center' }}>
            H4 - Header
          </Title>
        </div>
        <div
          style={{ marginTop: '1em', padding: '1em', background: '#efefef' }}
        >
          <Title level={5} style={{ textAlign: 'center' }}>
            H5 - Header
          </Title>
        </div>
        <div
          style={{ marginTop: '1em', padding: '1em', background: '#efefef' }}
        >
          <Title level={6} style={{ textAlign: 'center' }}>
            H6 - Header
          </Title>
        </div>
      </GridItem>
    </Grid>
  </Page>
));
