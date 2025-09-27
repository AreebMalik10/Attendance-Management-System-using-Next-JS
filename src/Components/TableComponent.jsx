import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export default function TableComponent({
    tableHeads = [],
    data = [],
}) {
  return (
    <TableContainer component={paper}>
        <Table>
        <TableHead>
            <TableRow>
                {tableHeads?.map((head, idx) => (
                    <TableCell key={idx}>{head?.label}</TableCell>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {data?.map((row, idx) => (
                <TableRow key={idx}>
                    {tableHeads.map((head, colIdx) => (
                        <TableCell key={idx}>
                            {row[head.key]}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
  )
}
