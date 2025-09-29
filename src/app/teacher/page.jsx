'use client';
import TableComponent from '@/Components/TableComponent';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacher, selectTeachers } from './teacherSlice';

export default function Teacher() {

  // React.useEffect(() => {
  //   fetch('/api/users').then((res) => res.json()).then((data) => setUsers(Array.isArray(data) ? data : data?.users || []));
  // }, []);
 
  // console.log("Users:", users);
  const filteredData = useSelector(selectTeachers);
  console.log("Filtered Data:", filteredData);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTeacher());
  }, [dispatch]);

  const tableHeads = [
    { label: "Name", key: 'fullname'},
    { label: "Username", key: 'username'},
    { label: "Role", key: 'role'},
    { label: "Education", key: 'education'},
  ];

  
  return (
    <>
    <TableComponent tableHeads={tableHeads} />
    </>
  )
}
