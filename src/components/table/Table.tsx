import { TableProps } from '../../types';
import { StyledTable, TableHead, TableData } from './Table.styled';


const Table: React.FC<TableProps> = ({ users, usersPerPage, page }) => {

  console.log(users)
  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHead>Name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
        </tr>
      </thead>
      <tbody>
          {users?.slice((page - 1) * usersPerPage, page * usersPerPage).map((user) => {
            return (
              <tr key={user.id} id={user.id}>
              <TableData>{user.name}</TableData>
              <TableData>{user.userName}</TableData>
              <TableData>{user.email}</TableData>
              <TableData>{user.phone}</TableData>
              </tr>
            )
          })}
      </tbody>
    </StyledTable>
  )
}

export default Table
