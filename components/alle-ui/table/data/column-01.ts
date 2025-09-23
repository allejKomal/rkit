import { ExtendedColumnDef } from '../table-editor';

interface Interface01 {
  id: number;
  type: string;
  model: string;
  variant: string;
  engine: string;
  fuelType: string;
  transmission: string;
  power: string;
  torque: string;
  mileage: string;
  topSpeed: string;
  price: string;
  year: number;
  colorOptions: string[];
  availabilityStatus: string;
}

export const column01: ExtendedColumnDef<Interface01>[] = [
  {
    id: 'id',
    header: 'Name',
    accessorKey: 'id',
    enableSorting: true,
    enableResizing: true,
    size: 80, // Narrow for ID numbers
    minSize: 60,
    maxSize: 120,
  },
  {
    id: 'type',
    header: 'Type',
    accessorKey: 'type',
    enableSorting: true,
    enableResizing: true,
    size: 120, // Medium for type names
    minSize: 80,
    maxSize: 200,
  },
  {
    id: 'model',
    header: 'Model',
    accessorKey: 'model',
    enableSorting: true,
    enableResizing: true,
    size: 150, // Medium for model names
    minSize: 100,
    maxSize: 250,
  },
  {
    id: 'variant',
    header: 'Variant',
    accessorKey: 'variant',
    enableSorting: false,
    enableResizing: true,
    size: 140, // Medium for variant names
    minSize: 100,
    maxSize: 220,
  },
  {
    id: 'engine',
    header: 'Engine',
    accessorKey: 'engine',
    enableResizing: true,
    size: 190, // Medium for engine specs
    minSize: 150,
    maxSize: 250,
  },
  {
    id: 'fuelType',
    header: 'Fuel Type',
    accessorKey: 'fuelType',
    enableResizing: true,
    size: 200, // Narrow for fuel type
    minSize: 80,
    maxSize: 150,
  },
  {
    id: 'transmission',
    header: 'Transmission',
    accessorKey: 'transmission',
    enableResizing: true,
    size: 120, // Medium for transmission
    minSize: 90,
    maxSize: 180,
  },
  {
    id: 'power',
    header: 'Power',
    accessorKey: 'power',
    enableResizing: true,
    size: 100, // Narrow for power values
    minSize: 80,
    maxSize: 150,
  },
  {
    id: 'torque',
    header: 'Torque',
    accessorKey: 'torque',
    enableResizing: true,
    size: 100, // Narrow for torque values
    minSize: 80,
    maxSize: 150,
  },
  {
    id: 'mileage',
    header: 'Mileage',
    accessorKey: 'mileage',
    enableResizing: true,
    size: 100, // Narrow for mileage values
    minSize: 80,
    maxSize: 150,
  },
  {
    id: 'topSpeed',
    header: 'Top Speed',
    accessorKey: 'topSpeed',
    enableResizing: true,
    size: 110, // Medium for top speed
    minSize: 90,
    maxSize: 160,
  },
  {
    id: 'price',
    header: 'Price',
    accessorKey: 'price',
    enableResizing: true,
    size: 120, // Medium for price values
    minSize: 90,
    maxSize: 180,
  },
  {
    id: 'year',
    header: 'Year',
    accessorKey: 'year',
    enableResizing: true,
    size: 80, // Narrow for year
    minSize: 60,
    maxSize: 120,
  },
  {
    id: 'colorOptions',
    header: 'Color Options',
    accessorKey: 'colorOptions',
    enableResizing: true,
    size: 180, // Wider for color options array
    minSize: 140,
    maxSize: 300,
  },
  {
    id: 'availabilityStatus',
    header: 'Availability Status',
    accessorKey: 'availabilityStatus',
    enableResizing: true,
    size: 160, // Medium for status text
    minSize: 120,
    maxSize: 250,
  },
];
