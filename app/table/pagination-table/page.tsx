import React from 'react';

import { Superbike, superbikeData } from '@/components/alle-ui/table/data/data-01';
import TableEditor from '@/components/alle-ui/table/table-editor';
import { ExtendedColumnDef } from '@/components/alle-ui/table/types/exnteded-column-def';
import TableWrapper from '@/components/hoc/table-wrapper';

function Page() {
  return (
    <TableWrapper title="Pagination Table">
      <TableEditor
        columns={superbikeColumns}
        data={superbikeData}
        config={{ pageSize: 15, enablePagination: true }}
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
    size: 120,
  },
  {
    id: 'model',
    header: 'Model',
    accessorKey: 'model',
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
    size: 110,
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
    size: 120,
  },
  {
    id: 'year',
    header: 'Year',
    accessorKey: 'year',
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
    size: 100,
  },
  {
    id: 'ridingModes',
    header: 'Riding Modes',
    accessorKey: 'ridingModes',
    size: 200,
  },
];
