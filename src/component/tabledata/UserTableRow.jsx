// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
// import TableRow from '@mui/material/TableRow';
// import Checkbox from '@mui/material/Checkbox';
// import TableCell from '@mui/material/TableCell';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Popover from '@mui/material/Popover';
// import MenuItem from '@mui/material/MenuItem';

// import Iconify from '../iconify';
// import Label from '../label/label';

// const UserTableRow = ({
//   selected,
//   name,
//   avatarUrl,
//   company,
//   role,
//   isVerified,
//   status,
//   handleClick,
// }) => {
//   const [open, setOpen] = useState(null);

//   const handleOpenMenu = (event) => {
//     setOpen(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setOpen(null);
//   };

//   return (
//     <>
//       <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
//         <TableCell padding="checkbox">
//           <Checkbox disableRipple checked={selected} onChange={handleClick} />
//         </TableCell>

//         <TableCell component="th" scope="row" padding="none">
//           <Stack direction="row" alignItems="center" spacing={2}>
//             <Avatar alt={name} src={avatarUrl} />
//             <Typography variant="subtitle2" noWrap>
//               {name}
//             </Typography>
//           </Stack>
//         </TableCell>

//         <TableCell>{company}</TableCell>

//         <TableCell>{role}</TableCell>

//         <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell>

//         <TableCell>
//           <Label color={(status === 'banned' && 'error') || 'success'}>{status}</Label>
//         </TableCell>

//         <TableCell align="right">
//           <IconButton onClick={handleOpenMenu}>
//             <Iconify icon="eva:more-vertical-fill" />
//           </IconButton>
//         </TableCell>
//       </TableRow>

//       <Popover
//         open={!!open}
//         anchorEl={open}
//         onClose={handleCloseMenu}
//         anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//         PaperProps={{
//           sx: { width: 140 },
//         }}
//       >
//         <MenuItem onClick={handleCloseMenu}>
//           <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
//           Edit
//         </MenuItem>

//         <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
//           <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
//           Delete
//         </MenuItem>
//       </Popover>
//     </>
//   );
// };

// UserTableRow.propTypes = {
//   avatarUrl: PropTypes.any,
//   company: PropTypes.any,
//   handleClick: PropTypes.func,
//   isVerified: PropTypes.any,
//   name: PropTypes.any,
//   role: PropTypes.any,
//   selected: PropTypes.any,
//   status: PropTypes.string,
// };

// export default UserTableRow;


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';

import Iconify from '../iconify';
import Label from '../label/label';

const UserTableRow = ({
  selected,
  s_no,
  selectclasse, // 'class' is a reserved keyword, so use 'userClass'
  medium,
  subject_name,
  description,
  handleClick,
}) => {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={subject_name} src={description} style={{ backgroundColor: '#5f67b1' }} />

            <Typography variant="subtitle2" noWrap>
              {s_no}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{selectclasse}</TableCell>

        <TableCell>{medium}</TableCell>

        <TableCell>{subject_name}</TableCell>

        <TableCell>{description}</TableCell>

        {/* Add other cells as needed based on your data structure */}

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
};

UserTableRow.propTypes = {
  s_no: PropTypes.string,
  selectclasse: PropTypes.string,
  medium: PropTypes.string,
  subject_name: PropTypes.string,
  description: PropTypes.string,
  handleClick: PropTypes.func,
  selected: PropTypes.any,
};

export default UserTableRow;
