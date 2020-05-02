import React from 'react';
import Grid from '@material-ui/core/Grid';

import BaudRateField from './BaudRateField';
import FlowControlField from './FlowControlField';
import ParityField from './ParityField';
import StopBitsField from './StopBitsField';
import DeviceNameField from './DeviceNameField';
import LogFileNameField from './LogFileNameField';
import SerialPortDriverField from './SerialPortDriverField';
import CharacterSizeField from './CharacterSizeField';

const device_name_field = () => {
  return (
    <Grid item xs={6}>
      <DeviceNameField />
    </Grid>
  );
};

const log_file_name_field = () => {
  return (
    <Grid item xs={6}>
      <LogFileNameField />
    </Grid>
  );
};

const serial_port_driver_field = () => {
  return (
    <Grid item xs={6}>
      <SerialPortDriverField />
    </Grid>
  );
};

const baud_rate_field = () => {
  return (
    <Grid item xs={6}>
      <BaudRateField />
    </Grid>
  );
};

const flow_control_field = () => {
  return (
    <Grid item xs={3}>
      <FlowControlField />
    </Grid>
  );
};

const parity_field = () => {
  return (
    <Grid item xs={3}>
      <ParityField />
    </Grid>
  );
};

const stop_bits_field = () => {
  return (
    <Grid item xs={3}>
      <StopBitsField />
    </Grid>
  );
};

const character_size_field = () => {
  return (
    <Grid item xs={3}>
      <CharacterSizeField />
    </Grid>
  );
};

export default function NewDeviceInfoPage() {
    return (
      <Grid container spacing={1}>
        {device_name_field()}
        {log_file_name_field()}
        {serial_port_driver_field()}
        {baud_rate_field()}
        {flow_control_field()}
        {parity_field()}
        {stop_bits_field()}
        {character_size_field()}
      </Grid>
    );
};