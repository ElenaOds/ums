import { useState, useEffect } from 'react';
import { useTypedSelector, useAppDispatch } from '../../redux/store';
import { getUsers } from '../../redux/operations';

import Table from '../../components/table/Table';
import Pagination from '../../components/pagination/Pagination';

import { Section } from './usersPage.styled';

const UsersPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const users = useTypedSelector((state) => state.users.data);
  const filter = useTypedSelector((state) => state.filter.filter);

  useEffect(() => {
    dispatch(getUsers());
    setPage(1);
  }, [dispatch, filter]);

  return (
    <Section>
      <Table users={users}/>
      <Pagination page={page}/>
    </Section>
  )
}

export default UsersPage
