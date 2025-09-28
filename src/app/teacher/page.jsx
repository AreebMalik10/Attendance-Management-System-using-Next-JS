'use client';
import TableComponent from '@/Components/TableComponent';
import React from 'react'

export default function Teacher() {
  const [users, setUsers] = React.useState([]);
  // console.log("Users:", users);

  React.useEffect(() => {
    fetch('/api/users').then((res) => res.json()).then((data) => setUsers(Array.isArray(data) ? data : data?.users || []));
  }, []);

  console.log("users:", users);

  const tableHeads = [
    { label: "Name", key: 'fullname'},
    { label: "Username", key: 'username'},
    { label: "Role", key: 'role'},
    { label: "Education", key: 'education'},
  ];

  
  return (
    <>
    <TableComponent tableHeads={tableHeads} data={users} />
    </>
  )
}
