import Stats from '../../components/stats/Stats';
import Coutries from '../../components/countries/Coutries';
import Activity from '../../components/activity/Activity';

import { Container, ItemsWrapper } from './Dashboard.styled';

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <Stats/>
        <ItemsWrapper>
          <Coutries/>
          <Activity/>
        </ItemsWrapper>
      </Container>
  
    </section>
  )
}

export default DashboardPage
