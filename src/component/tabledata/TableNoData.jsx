import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const TableNoData = ({ query }) => {
  if (!query) {
    return null;
  }

  return (
    <TableRow
      sx={{
        py: 3,
      }}
    >
      <TableCell colSpan={6}>
        <Paper
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" paragraph>
            Not found
          </Typography>

          <Typography variant="body2">
            No results found for &nbsp;
            <strong>&quot;{query}&quot;</strong>.
            <br /> Try checking for typos or using complete words.
          </Typography>
        </Paper>
      </TableCell>
    </TableRow>
  );
};

TableNoData.propTypes = {
  query: PropTypes.string,
};

export default TableNoData;
