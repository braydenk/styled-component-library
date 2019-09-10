import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../components/Page';
import { Title } from '../components/Typography';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';
import Box from '../components/Box';
import Button from '../components/Button';

storiesOf('Fundamentals', module)
  .add('Typography', () => (
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
  ))
  .add('Color', () => (
    <Page>
      <Grid columns="100px 1fr 100px" height="100vh">
        <GridItem columnStart="2">
          <Box height={8} width={16} background="blue" />
          <Box height={8} width={16} background="green" />
          <Box height={8} width={16} background="orange" />
          <Box height={8} width={16} background="purple" />
          <Box height={8} width={16} background="red" />
          <Box height={8} width={16} background="yellow" />
        </GridItem>
      </Grid>
    </Page>
  ))
  .add('Spacing', () => (
    <Page>
      <Box height={4} width={4} background="gray" />
      <Box height={8} width={8} background="gray" />
      <Box height={16} width={16} background="gray" />
      <Box height={24} width={24} background="gray" />
      <Box height={32} width={32} background="gray" />
      <Box height={40} width={40} background="gray" />
      <Box height={48} width={48} background="gray" />
      <Box height={64} width={64} background="gray" />
      <Box height={80} width={80} background="gray" />
      <Box height={96} width={96} background="gray" />
      <Box height={112} width={112} background="gray" />
      <Box height={128} width={128} background="gray" />
    </Page>
  ));

storiesOf('Components', module)
  .add('Box', () => (
    <Page>
      <Box height={4} width={4} background="gray" />
    </Page>
  ))
  .add('Button', () => (
    <Page>
      <Grid columns="100px 1fr 100px" height="100vh">
        <GridItem columnStart="2">
          <Button>Button</Button>
        </GridItem>
      </Grid>
    </Page>
  ));
