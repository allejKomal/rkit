'use client';

import { Fragment, useCallback, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxIntermediateItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';

enum CheckboxState {
  UNCHECKED,
  CHECKED,
  INDETERMINATE,
}

type ItemState = {
  id: number;
  state: CheckboxState;
};

type Item = {
  id: number;
  name: string;
  parentId: number;
};

type CheckboxListProps = {
  items: Item[];
  idsToRender?: number[];
  indentLevel?: number;
  onClick?: (id: number) => void;
  getStateForId: (id: number) => CheckboxState;
};

const dataValue: Item[] = [
  { id: 1, name: 'A', parentId: 0 },
  { id: 2, name: 'B', parentId: 0 },
  { id: 3, name: 'C', parentId: 0 },
  { id: 4, name: 'D', parentId: 1 },
  { id: 5, name: 'E', parentId: 1 },
  { id: 6, name: 'F', parentId: 2 },
  { id: 7, name: 'G', parentId: 2 },
  { id: 8, name: 'H', parentId: 2 },
  { id: 9, name: 'I', parentId: 3 },
  { id: 10, name: 'J', parentId: 3 },
  { id: 11, name: 'K', parentId: 3 },
  { id: 12, name: 'L', parentId: 3 },
  { id: 13, name: 'M', parentId: 3 },
  { id: 14, name: 'N', parentId: 3 },
];

export const updateItemStates = (oldState: ItemState[], items: Item[], clickedId: number) => {
  const newState = oldState.map(i => ({ ...i }));

  const getItemState = (id: number) => {
    return newState.find(i => i.id === id)!.state;
  };

  const updateParent = (id: number) => {
    const item = items.find(i => i.id === id);
    const parent = items!.find(i => i.id === item!.parentId!);
    if (!parent) return;
    const childIds = items.filter(i => i.parentId === parent.id).map(i => i.id);
    const childStates = childIds.map(childId => getItemState(childId));
    if (childStates.length === childStates.filter(s => s === CheckboxState.CHECKED).length) {
      newState.find(i => i.id === parent.id)!.state = CheckboxState.CHECKED;
    } else if (
      childStates.length === childStates.filter(s => s === CheckboxState.UNCHECKED).length
    ) {
      newState.find(i => i.id === parent.id)!.state = CheckboxState.UNCHECKED;
    } else {
      newState.find(i => i.id === parent.id)!.state = CheckboxState.INDETERMINATE;
    }
    updateParent(parent.id);
  };

  const setUnchecked = (id: number) => {
    newState.find(i => i.id === id)!.state = CheckboxState.UNCHECKED;
    items
      .filter(i => i.parentId === id)
      .map(i => i.id)
      .forEach(childId => setUnchecked(childId));
    updateParent(id);
  };

  const setChecked = (id: number) => {
    newState.find(i => i.id === id)!.state = CheckboxState.CHECKED;
    items
      .filter(i => i.parentId === id)
      .map(i => i.id)
      .forEach(childId => setChecked(childId));
    updateParent(id);
  };

  const itemState = getItemState(clickedId);
  if (itemState === CheckboxState.CHECKED) {
    setUnchecked(clickedId);
  } else {
    setChecked(clickedId);
  }
  return newState;
};

function CheckboxList({
  items,
  getStateForId,
  idsToRender = [],
  indentLevel = 0,
  onClick = () => {},
}: CheckboxListProps) {
  if (!idsToRender.length) {
    idsToRender = items.filter(i => !i.parentId).map(i => i.id);
  }

  const getChildNodes = (parentId: number) => {
    const nodeItems = items.filter(i => i.parentId === parentId);
    if (!nodeItems.length) return null;
    return (
      <CheckboxList
        items={items}
        idsToRender={nodeItems.map(i => i.id)}
        indentLevel={indentLevel + 1}
        onClick={onClick}
        getStateForId={getStateForId}
      />
    );
  };
  const getPaddingLeft = (level: number): string => {
    switch (level) {
      case 0:
        return 'pl-7';
      case 1:
        return 'pl-11 [&_span.left-2]:left-6';
      case 2:
        return 'pl-15 [&_span.left-2]:left-10';
      case 3:
        return 'pl-19 [&_span.left-2]:left-14';
      case 4:
        return 'pl-23 [&_span.left-2]:left-18';
      case 5:
        return 'pl-27 [&_span.left-2]:left-22';
      default:
        return 'pl-31 [&_span.left-2]:left-26'; // fallback for deeper levels
    }
  };

  return (
    <DropdownMenuGroup className="w-full">
      {idsToRender.map(id => {
        const item = items.find(i => i.id === id);
        const checkboxState = getStateForId(id);
        const isIndeterminate = checkboxState === CheckboxState.INDETERMINATE;
        const isChecked = checkboxState === CheckboxState.CHECKED;
        return (
          <Fragment key={item!.id}>
            <DropdownMenuCheckboxIntermediateItem
              onSelect={e => e.preventDefault()}
              checked={isIndeterminate ? 'indeterminate' : isChecked}
              onCheckedChange={() => onClick(item!.id)}
              className={getPaddingLeft(indentLevel)}
            >
              {item!.name}
            </DropdownMenuCheckboxIntermediateItem>
            {getChildNodes(item!.id)}
          </Fragment>
        );
      })}
    </DropdownMenuGroup>
  );
}

function CheckboxTreeDropdown() {
  const defaultItemStates: ItemState[] = dataValue.map(i => ({
    id: i.id,
    state: CheckboxState.UNCHECKED,
  }));

  const [itemStates, setItemStates] = useState<ItemState[]>(defaultItemStates);
  const getStateForId = useCallback(
    (id: number) => {
      return itemStates.find(i => i.id === id)!.state;
    },
    [itemStates]
  );
  const clickHandler = useCallback(
    (id: number) => setItemStates(updateItemStates(itemStates, dataValue, id)),
    [itemStates]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full">
        <Button variant="outline">Select Tags</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
        <ScrollArea className="h-60">
          <CheckboxList items={dataValue} onClick={clickHandler} getStateForId={getStateForId} />
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { CheckboxTreeDropdown, CheckboxList };
