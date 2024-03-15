// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import Table from '@mui/material/Table';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import TableBody from '@mui/material/TableBody';
// import Typography from '@mui/material/Typography';
// import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';

// import { datatable } from './datatable';
// import Scrollbar from '../scrollbar/scrollbar';
// import Iconify from '../iconify';
// import UserTableToolbar from '../tabledata/UserTableToolbar';
// import UserTableRow from '../tabledata/UserTableRow';
// import UserTableHead from '../tabledata/UserTableHead';
// import TableNoData from '../tabledata/TableNoData';
// import TableEmptyRows from '../tabledata/TableEmptyRow';
// import { emptyRows, applyFilter, getComparator } from '../tabledata/utils';

// const UserPage = () => {
//   const [page, setPage] = useState(0);
//   const [order, setOrder] = useState('asc');
//   const [selected, setSelected] = useState([]);
//   const [orderBy, setOrderBy] = useState('s_no'); // Default sort by 's_no'
//   const [filterName, setFilterName] = useState('');
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleSort = (event, id) => {
//     const isAsc = orderBy === id && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(id);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = datatable.map((n) => n.s_no);
//       setSelected(newSelecteds);
//     } else {
//       setSelected([]);
//     }
//   };

//   const handleClick = (event, s_no) => {
//     const selectedIndex = selected.indexOf(s_no);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, s_no);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleFilterByName = (event) => {
//     setPage(0);
//     setFilterName(event.target.value);
//   };

//   const dataFiltered = applyFilter({
//     inputData: datatable,
//     comparator: getComparator(order, orderBy),
//     filterName,
//   });

//   const notFound = !dataFiltered.length && !!filterName;

//   console.log("dataFiltered" ,dataFiltered)

//   return (
//     <Container>
//       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//         <Typography variant="h4">Users</Typography>
//         <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
//           New User
//         </Button>
//       </Stack>

//       <Card>
//         <UserTableToolbar
//           numSelected={selected.length}
//           filterName={filterName}
//           onFilterName={handleFilterByName}
//         />

//         <Scrollbar>
//           <TableContainer sx={{ overflow: 'unset' }}>
//             <Table sx={{ minWidth: 800 }}>
//               <UserTableHead
//                 order={order}
//                 orderBy={orderBy}
//                 rowCount={datatable.length}
//                 numSelected={selected.length}
//                 onRequestSort={handleSort}
//                 onSelectAllClick={handleSelectAllClick}
//                 headLabel={[
//                   { id: 's_no', label: 'S. No' },
//                   { id: 'selectclasse', label: 'Selectclasse' },
//                   { id: 'medium', label: 'Medium' },
//                   { id: 'subject_name', label: 'Subject Name' },
//                   { id: 'description', label: 'Description' },
//                   { id: '' },
//                 ]}
//               />
//               <TableBody>
//                 {dataFiltered
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((row, index) => (
//                     <UserTableRow
//                       key={index}
//                       s_no={row.s_no}
//                       selectclasse={row.selectclasse}
//                       medium={row.medium}
//                       subject_name={row.subject_name}
//                       description={row.description}
//                       selected={selected.indexOf(row.s_no) !== -1}
//                       handleClick={(event) => handleClick(event, row.s_no)}
//                     />
//                   ))}
//                 <TableEmptyRows
//                   height={77}
//                   emptyRows={emptyRows(page, rowsPerPage, datatable.length)}
//                 />
//                 {notFound && <TableNoData query={filterName} />}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Scrollbar>

//         <TablePagination
//           page={page}
//           component="div"
//           count={datatable.length}
//           rowsPerPage={rowsPerPage}
//           onPageChange={handleChangePage}
//           rowsPerPageOptions={[5, 10, 25]}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Card>
//     </Container>
//   );
// };

// export default UserPage;

// UserPage.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { datatable } from './datatable';
import Scrollbar from '../scrollbar/scrollbar';
import Iconify from '../iconify';
import UserTableToolbar from '../tabledata/UserTableToolbar';
import UserTableRow from '../tabledata/UserTableRow';
import UserTableHead from '../tabledata/UserTableHead';
import TableNoData from '../tabledata/TableNoData';
import TableEmptyRows from '../tabledata/TableEmptyRow';
import { emptyRows, applyFilter, getComparator } from '../tabledata/utils';

const UserPage = () => {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('s_no'); // Default sort by 's_no'
  const [filterName, setFilterName] = useState('');
  const [filterDescription, setFilterDescription] = useState(''); // New state for description filter
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = datatable.map((n) => n.s_no);
      setSelected(newSelecteds);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (event, s_no) => {
    const selectedIndex = selected.indexOf(s_no);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, s_no);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleFilterByDescription = (event) => {
    setPage(0);
    setFilterDescription(event.target.value);
  };

  // const dataFiltered = applyFilter({
  //   inputData: datatable,
  //   comparator: getComparator(order, orderBy),
  //   filterName,
  //   columnId: 'description', 
  // });


  const dataFiltered = applyFilter({
    inputData: datatable,
    comparator: getComparator(order, orderBy),
    filterName,
  });
  

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container >
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" className='font-bold '>Users</Typography>
        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New User
        </Button>
      </Stack>

      <Card className='rounded-2xl'>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
          filterDescription={filterDescription}
          onFilterDescription={handleFilterByDescription}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={datatable.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 's_no', label: 'S. No' },
                  { id: 'selectclasse', label: 'Selectclasse' },
                  { id: 'medium', label: 'Medium' },
                  { id: 'subject_name', label: 'Subject Name' },
                  { id: 'description', label: 'Description' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <UserTableRow
                      key={index}
                      s_no={row.s_no}
                      selectclasse={row.selectclasse}
                      medium={row.medium}
                      subject_name={row.subject_name}
                      description={row.description}
                      selected={selected.indexOf(row.s_no) !== -1}
                      handleClick={(event) => handleClick(event, row.s_no)}
                    />
                  ))}
                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, datatable.length)}
                />
                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={datatable.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
};

export default UserPage;

