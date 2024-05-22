import { DataRowGrid } from '../types/DataGridRow';

// @TODO add normal store
export function getPowerDataRow(): DataRowGrid[] {
  return [
    {
      name: 'alt current',
      value: 30,
      max: 40,
      min: 20,
    },
    {
      name: 'solar current',
      value: 30,
      max: 40,
      min: 20,
    },
    {
      name: 'car voltage',
      value: 13.2,
      max: 13.3,
      min: 12.2,
    },
    {
      name: 'hotel voltage',
      value: 14.2,
      max: 14.3,
      min: 12.2,
    },
  ];
}

export function getTempRows(): DataRowGrid[] {
  return [
    {
      name: 'out',
      value: 30,
      max: 20,
      min: 8,
    },
    {
      name: 'in',
      value: 20,
      max: 10,
      min: 10,
    },
    {
      name: 'fridge',
      value: 5,
      max: 5.2,
      min: 3,
    },
    {
      name: 'cold water',
      value: 5,
      max: 7,
      min: 10,
    },
    {
      name: 'hot water',
      value: 20,
      max: 25,
      min: 30,
    },
  ];
}

export function getServiceStatus(): DataRowGrid[] {
  return [
    {
      name: 'hue',
      value: 0,
    },
    {
      name: 'rf last message',
      value: '12:23:11',
    },
    {
      name: 'internet',
      value: 'on',
    },
  ];
}
