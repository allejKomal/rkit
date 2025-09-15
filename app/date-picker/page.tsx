import React from 'react';

import { DatePicker01 } from '@/components/alle-ui/date-picker/date-picker-01';
import { DatePicker02 } from '@/components/alle-ui/date-picker/date-picker-02';
import { DatePicker03 } from '@/components/alle-ui/date-picker/date-picker-03';
import { DatePicker04 } from '@/components/alle-ui/date-picker/date-picker-04';
import { DatePicker05 } from '@/components/alle-ui/date-picker/date-picker-05';
import { DatePicker06 } from '@/components/alle-ui/date-picker/date-picker-06';
import { DatePicker07 } from '@/components/alle-ui/date-picker/date-picker-07';
import { DatePicker08 } from '@/components/alle-ui/date-picker/date-picker-08';
import { DatePicker09 } from '@/components/alle-ui/date-picker/date-picker-09';
import { DatePicker10 } from '@/components/alle-ui/date-picker/date-picker-10';
import ComponentWrapper from '@/components/hoc/component-wrapper';

export default function Page() {
  return (
    <div className="p-10 flex flex-col gap-15">
      <ComponentWrapper title="Date Picker 1">
        <div className="w-[300px] mx-auto">
          <DatePicker01 />
        </div>
      </ComponentWrapper>
      <ComponentWrapper title="Date Picker 2">
        <div className="w-[300px] mx-auto">
          <DatePicker02 />
        </div>
      </ComponentWrapper>
      <ComponentWrapper title="Date Picker 3">
        <div className="w-[300px] mx-auto">
          <DatePicker03 />
        </div>
      </ComponentWrapper>
      <ComponentWrapper title="Date Picker 4">
        <div className="w-[300px] mx-auto">
          <DatePicker04 />
        </div>
      </ComponentWrapper>
      <ComponentWrapper title="Date Picker 5">
        <div className="w-[300px] mx-auto">
          <DatePicker05 />
        </div>
      </ComponentWrapper>
      <ComponentWrapper title="Date Picker 6">
        <div className="w-[300px] mx-auto">
          <DatePicker06 />
        </div>
      </ComponentWrapper>
      <ComponentWrapper title="Date Picker 7">
        <div className="w-[300px] mx-auto">
          <DatePicker07 />
        </div>
      </ComponentWrapper>
      <ComponentWrapper title="Date Picker 8">
        <div className="w-[300px] mx-auto">
          <DatePicker08 />
        </div>
      </ComponentWrapper>
      <ComponentWrapper title="Date Picker 9">
        <div className="w-[300px] mx-auto">
          <DatePicker09 />
        </div>
      </ComponentWrapper>
      <ComponentWrapper title="Date Picker 10">
        <div className="w-[300px] mx-auto">
          <DatePicker10 />
        </div>
      </ComponentWrapper>
      {/* <ComponentWrapper title="Date Time Picker 1">
        <div className="w-[300px] mx-auto">
          <DatetimePickerV1 />
        </div>
      </ComponentWrapper>
      <ComponentWrapper title="Date Time Picker 2">
        <div className="w-[300px] mx-auto">
          <DateTimePickerV2 />
        </div>
      </ComponentWrapper> */}
    </div>
  );
}
