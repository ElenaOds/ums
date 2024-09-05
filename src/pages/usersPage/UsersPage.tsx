import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../redux/store';
import { useUsers } from '../../context/UserContext';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import Pagination from '../../components/pagination/Pagination';

import { TableContainer, TaleText } from './UsersPage.styled';

const UsersPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { users } = useUsers();
  const filter = useTypedSelector((state) => state.filter);


  useEffect(() => {
    setPage(1);
  }, [filter]);

  
  const filteredUsers = users.filter((user) =>
    (filter.name ? user.name.toLowerCase().includes(filter.name.toLowerCase()) : true) &&
    (filter.userName ? user.userName.toLowerCase().includes(filter.userName.toLowerCase()) : true) &&
    (filter.email ? user.email.toLowerCase().includes(filter.email.toLowerCase()) : true) &&
    (filter.phone ? user.phone.toLowerCase().includes(filter.phone.toLowerCase()) : true)
  );

  let usersPerPage = 10;

  const handleClickNext = () => {
    setPage((prevPage) => prevPage + 1)
  }
  
  const handleClickPrevious = () => {
    setPage((prevPage) => prevPage - 1)
  }
  
  const handlePageSet = (pageNumber: number) => {
    setPage (pageNumber)
  }

  return (
    <section>
      <Filter />
      <TableContainer>
        {filteredUsers.length > 0 ? 
        <Table users={filteredUsers} usersPerPage={usersPerPage} page={page}/>
        : <TaleText>No users found matching your request</TaleText>
        }
        {filteredUsers.length > 0 &&
        <Pagination 
          page={page} 
          handleClickNext={handleClickNext} 
          handleClickPrevious={handleClickPrevious} 
          handlePageSet={handlePageSet} 
          usersPerPage={usersPerPage}
          totalUsers={filteredUsers.length}/>
        }
      </TableContainer>
    </section>
  )
}

export default UsersPage
