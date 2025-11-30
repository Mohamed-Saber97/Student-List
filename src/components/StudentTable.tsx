import { type Student } from "../utils/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
//import type { Dispatch } from "react";



interface Props {
  students: Student[],
  //setStudents: Dispatch<React.SetStateAction<Student[]>>
}



export const StudentTable = ({ students }: Props) => {
  useEffect(() => {
    if (students.length > 100) {
      alert("cannot add any more");
    }
  }, [students]) // DependencyList --> on every change in this will fire and do effect but it work at least once

 
  return (
    <>
      <TableContainer component={Paper} sx={{ width: 400 }}>
        <Table size="small" sx={{ border: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Class</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>

            {
              students.map((item) => {   // instead of data 
                return (
                  <TableRow>
                    <TableCell>{item.fullName}</TableCell>
                    <TableCell>{item.age}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.class}</TableCell>
                    
                  </TableRow>

                );
              })
            }

          </TableBody>
        </Table>
      </TableContainer>

    </>
  )
}