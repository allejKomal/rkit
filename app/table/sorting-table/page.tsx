import React from 'react';

import { Superbike, superbikeData } from '@/components/alle-ui/table/data/data-01';
import TableEditor from '@/components/alle-ui/table/table-editor';
import { ExtendedColumnDef } from '@/components/alle-ui/table/types/exnteded-column-def';
import TableWrapper from '@/components/hoc/table-wrapper';

function Page() {
  return (
    <TableWrapper title="Sorting Table">
      <TableEditor
        columns={superbikeColumns}
        data={superbikeData}
        config={{
          pageSize: 15,
          enableSorting: true,
          enablePagination: true,
          sorting: [{ id: 'price', desc: true }],
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
    enableSorting: true,
    size: 120,
  },
  {
    id: 'model',
    header: 'Model',
    accessorKey: 'model',
    enableSorting: true,
    size: 140,
  },
  {
    id: 'engine',
    header: 'Engine',
    accessorKey: 'engine',
    size: 160,
  },
  {
    id: 'power',
    header: 'Power',
    accessorKey: 'power',
    enableSorting: true,
    size: 100,
  },
  {
    id: 'torque',
    header: 'Torque',
    accessorKey: 'torque',
    enableSorting: true,
    size: 100,
  },
  {
    id: 'topSpeed',
    header: 'Top Speed',
    accessorKey: 'topSpeed',
    enableSorting: true,
    size: 110,
  },
  {
    id: 'weight',
    header: 'Weight',
    accessorKey: 'weight',
    enableSorting: true,
    size: 100,
  },
  {
    id: 'seatHeight',
    header: 'Seat Height',
    accessorKey: 'seatHeight',
    enableSorting: true,
  },
  {
    id: 'fuelCapacity',
    header: 'Fuel Capacity',
    accessorKey: 'fuelCapacity',
    enableSorting: true,
  },
  {
    id: 'mileage',
    header: 'Mileage',
    accessorKey: 'mileage',
    enableSorting: true,
    size: 100,
  },
  {
    id: 'price',
    header: 'Price',
    accessorKey: 'price',
    enableSorting: true,
    size: 120,
  },
  {
    id: 'year',
    header: 'Year',
    accessorKey: 'year',
    enableSorting: true,
    size: 80,
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    size: 140,
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
    enableSorting: true,
  },
  {
    id: 'coolingSystem',
    header: 'Cooling System',
    accessorKey: 'coolingSystem',
    size: 150,
  },
  {
    id: 'abs',
    header: 'ABS',
    accessorKey: 'abs',
    enableSorting: true,
    size: 100,
  },
  {
    id: 'ridingModes',
    header: 'Riding Modes',
    accessorKey: 'ridingModes',
    size: 200,
  },
];
