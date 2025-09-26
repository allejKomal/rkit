'use client';

import React from 'react';

import { Superbike, superbikeData } from '@/components/alle-ui/table/data/data-01';
import TableEditor from '@/components/alle-ui/table/table-editor';
import { ExtendedColumnDef } from '@/components/alle-ui/table/types/exnteded-column-def';
import TableWrapper from '@/components/hoc/table-wrapper';

function Page() {
  return (
    <TableWrapper title="Resizing Table">
      <TableEditor
        columns={superbikeColumns}
        data={superbikeData}
        config={{
          pageSize: 15,
          enableColumnResizing: true,
          enablePagination: true,
        }}
      />
    </TableWrapper>
  );
}

export default Page;

export const superbikeColumns: ExtendedColumnDef<Superbike>[] = [
  {
    id: 'id',
    header: 'ID',
    accessorKey: 'id',
    size: 80,
  },
  {
    id: 'brand',
    header: 'Brand',
    accessorKey: 'brand',
    enableResizing: true,
    size: 170,
    minSize: 150,
    maxSize: 250,
  },
  {
    id: 'model',
    header: 'Model',
    accessorKey: 'model',
    enableResizing: true,
    size: 160,
    minSize: 150,
    maxSize: 200,
  },
  {
    id: 'engine',
    header: 'Engine',
    accessorKey: 'engine',
  },
  {
    id: 'power',
    header: 'Power',
    accessorKey: 'power',
    enableResizing: true,
    size: 120,
    minSize: 100,
    maxSize: 200,
  },
  {
    id: 'torque',
    header: 'Torque',
    accessorKey: 'torque',
    enableResizing: true,
    size: 110,
    minSize: 100,
    maxSize: 200,
  },
  {
    id: 'topSpeed',
    header: 'Top Speed',
    accessorKey: 'topSpeed',
    size: 160,
    minSize: 100,
    maxSize: 200,
    enableResizing: true,
  },
  {
    id: 'weight',
    header: 'Weight',
    accessorKey: 'weight',
    size: 100,
  },
  {
    id: 'seatHeight',
    header: 'Seat Height',
    accessorKey: 'seatHeight',
    size: 100,
  },
  {
    id: 'fuelCapacity',
    header: 'Fuel Capacity',
    accessorKey: 'fuelCapacity',
    size: 100,
  },
  {
    id: 'mileage',
    header: 'Mileage',
    accessorKey: 'mileage',
    size: 100,
  },
  {
    id: 'price',
    header: 'Price',
    accessorKey: 'price',
    size: 100,
  },
  {
    id: 'year',
    header: 'Year',
    accessorKey: 'year',
    size: 100,
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    size: 100,
  },
  {
    id: 'type',
    header: 'Type',
    accessorKey: 'type',
    size: 200,
  },
  {
    id: 'transmission',
    header: 'Transmission',
    accessorKey: 'transmission',
  },
  {
    id: 'coolingSystem',
    header: 'Cooling System',
    accessorKey: 'coolingSystem',
  },
  {
    id: 'abs',
    header: 'ABS',
    accessorKey: 'abs',
    cell: info => (info.getValue() ? 'Yes' : 'No'),
    size: 60,
  },
  {
    id: 'ridingModes',
    header: 'Riding Modes',
    accessorKey: 'ridingModes',
    size: 200,
  },
];
