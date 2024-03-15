import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const TableEmptyRows = ({ emptyRows, height }) => {
  if (!emptyRows) {
    return null;
  }

  const rowStyle = height ? { height: height * emptyRows } : {};

  return (
    <TableRow style={rowStyle}>
      <TableCell colSpan={9} />
    </TableRow>
  );
}

TableEmptyRows.propTypes = {
  emptyRows: PropTypes.number,
  height: PropTypes.number,
};

export default TableEmptyRows;



