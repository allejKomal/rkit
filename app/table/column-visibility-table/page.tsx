'use client';

import React from 'react';

import { Superbike, superbikeData } from '@/components/alle-ui/table/data/data-01';
import TableEditor from '@/components/alle-ui/table/table-editor';
import { ExtendedColumnDef } from '@/components/alle-ui/table/types/exnteded-column-def';
import TableWrapper from '@/components/hoc/table-wrapper';

function Page() {
  return (
    <TableWrapper title="Column Visibility Table">
      <TableEditor
        columns={superbikeColumns}
        data={superbikeData}
        config={{
          pageSize: 15,
          enablePagination: true,
          enableColumnVisibility: true,
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
    size: 120,
    enableHiding: true,
  },
  {
    id: 'torque',
    header: 'Torque',
    accessorKey: 'torque',
    size: 120,
    enableHiding: true,
  },
  {
    id: 'topSpeed',
    header: 'Top Speed',
    accessorKey: 'topSpeed',
    size: 100,
    enableHiding: true,
  },
  {
    id: 'weight',
    header: 'Weight',
    accessorKey: 'weight',
    size: 120,
    enableHiding: true,
  },
  {
    id: 'seatHeight',
    header: 'Seat Height',
    accessorKey: 'seatHeight',
    size: 100,
    enableHiding: true,
  },
  {
    id: 'fuelCapacity',
    header: 'Fuel Capacity',
    accessorKey: 'fuelCapacity',
    size: 100,
    enableHiding: true,
  },
  {
    id: 'mileage',
    header: 'Mileage',
    accessorKey: 'mileage',
    size: 100,
    enableHiding: true,
  },
  {
    id: 'price',
    header: 'Price',
    accessorKey: 'price',
    size: 100,
    enableHiding: true,
  },
  {
    id: 'year',
    header: 'Year',
    accessorKey: 'year',
    size: 100,
    enableHiding: true,
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    size: 120,
    enableHiding: true,
  },
  {
    id: 'type',
    header: 'Type',
    accessorKey: 'type',
    size: 200,
    enableHiding: true,
  },
  {
    id: 'transmission',
    header: 'Transmission',
    accessorKey: 'transmission',
    enableHiding: true,
  },
  {
    id: 'coolingSystem',
    header: 'Cooling System',
    accessorKey: 'coolingSystem',
    enableHiding: true,
  },
  {
    id: 'abs',
    header: 'ABS',
    accessorKey: 'abs',
    cell: info => (info.getValue() ? 'Yes' : 'No'),
    size: 60,
    enableHiding: true,
  },
  {
    id: 'ridingModes',
    header: 'Riding Modes',
    accessorKey: 'ridingModes',
    size: 200,
    enableHiding: true,
  },
];
