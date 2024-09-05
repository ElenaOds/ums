import { useUsers } from '../../context/UserContext';
import { User } from '../../types';

import { ActivityWrapper, ActivityItemTitle, ActivityTable, UserHead, NameHead, PercentHead, TableData } from './Activity.styled';

const Activity: React.FC = () => {
  const { users } = useUsers();

    const shuffleArray = (array: User[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
    
      const randomUsers = shuffleArray([...users]).slice(0, 7);

      function getRandomNumber(): number {
        return Math.floor(Math.random() * 100) + 1;
      }

   return (
    <ActivityWrapper>
        <ActivityItemTitle>Users' activity</ActivityItemTitle>
        <ActivityTable>
            <thead>
            <tr>
                <UserHead>User</UserHead>
                <NameHead>Username</NameHead>
                <PercentHead>%</PercentHead>
            </tr>
            </thead>
            <tbody>
            {randomUsers?.map((user) => {
            return (
              <tr key={user.id} id={user.id}>
                <TableData>{user.name}</TableData>
                <TableData>{user.userName}</TableData>
                <TableData>{getRandomNumber()} %</TableData>
              </tr>
            )
          })}
            </tbody>
        </ActivityTable>
    </ActivityWrapper>
  )
}

export default Activity
