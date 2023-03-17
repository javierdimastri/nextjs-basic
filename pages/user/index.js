import {useQuery} from "@apollo/client";
import {LOAD_USERS} from "../../GraphQL/Queries";
import {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {isEmpty} from "lodash";
import styles from '../../styles/User.module.css';
import {Box} from "@mui/material";

const User = () => {
  const { error, loading, data } = useQuery (LOAD_USERS);
  const [users, setUsers] = useState ([]);
  
  useEffect (() => {
    if (data?.getAllUsers) {
      setUsers (data.getAllUsers);
    }
  }, [data])
  
  return (
    <>
      <Box className={styles.addUser}>
        <Button variant="contained">Add User +</Button>
      </Box>
      <TableContainer className={styles.userTable} component={Paper} elevation={7}>
        <Table aria-label="a dense table">
          <TableHead className={styles.userTableHeader}>
            <TableRow hover>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isEmpty(users) ? users.map (( row ) => (
                <TableRow hover key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              )) :
              <TableRow> <TableCell component="th" scope="row">no records found</TableCell> </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
};
export default User;
