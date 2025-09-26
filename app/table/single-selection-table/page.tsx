'use client';

import React from 'react';

import { Superbike, superbikeData } from '@/components/alle-ui/table/data/data-01';
import TableEditor from '@/components/alle-ui/table/table-editor';
import { ExtendedColumnDef } from '@/components/alle-ui/table/types/exnteded-column-def';
import TableWrapper from '@/components/hoc/table-wrapper';

function Page() {
  return (
    <TableWrapper title="Single Selection Table">
      <TableEditor
        columns={superbikeColumns}
        data={superbikeData}
        config={{
          pageSize: 15,
          enablePagination: true,
          enableSingleRowSelection: true,
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
    size: 40,
  },
  {
    id: 'brand',
    header: 'Brand',
    accessorKey: 'brand',
  },
  {
    id: 'model',
    header: 'Model',
    accessorKey: 'model',
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
    size: 100,
  },
  {
    id: 'torque',
    header: 'Torque',
    accessorKey: 'torque',
    size: 100,
  },
  {
    id: 'topSpeed',
    header: 'Top Speed',
    accessorKey: 'topSpeed',
    size: 100,
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
