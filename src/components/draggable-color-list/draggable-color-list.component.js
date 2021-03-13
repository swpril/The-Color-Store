import React from 'react';

import { SortableContainer } from 'react-sortable-hoc';

import { DraggableColorBox } from '../draggable-color-box/draggable-color-box.component';

const DraggableColorList = SortableContainer(({ colors, handleClick }) => {
  return (
    <div style={{ height: '90vh' }}>
      {colors.map((color, index) => (
        <DraggableColorBox
          index={index}
          key={index}
          color={color.color}
          name={color.name}
          handleClick={() => handleClick(color.name)}
        />
      ))}
    </div>
  );
});

export { DraggableColorList };
