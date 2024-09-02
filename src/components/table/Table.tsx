import { User } from '../../types';

interface TableProps {
  users: User[];
}

const Table: React.FC<TableProps> = ({ users }) => {

  console.log(users)
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>userName</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
          {users?.map((user) => {
            return (
              <tr key={user.id} id={user.id}>
              <td>{user.name}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
    </>
 
  )
}

export default Table
