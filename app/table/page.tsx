import React from 'react';

import { column01 } from '@/components/alle-ui/table/data/column-01';
import { data01 } from '@/components/alle-ui/table/data/data-01';
import TableEditor from '@/components/alle-ui/table/table-editor';

function Page() {
  const columns = column01;
  const data = data01;

  return (
    <div className="p-10 py-16 h-screen flex flex-col">
      <div className="flex-1 min-h-0">
        <TableEditor columns={columns} data={data} config={{ enableMultiRowSelection: true }} />
      </div>
    </div>
  );
}

export default Page;
