import { 
    StatsList, 
    FirstStatItem, 
    SecondStatItem, 
    ThirdStatItem, 
    FourthStatItem,
    StatText,
    StatNumber
   } from './Stats.styled';

const Stats = () => {
  return (
    <div>
       <StatsList>
          <FirstStatItem>
            <StatText>Total active users</StatText>
            <StatNumber>50</StatNumber>
          </FirstStatItem>
          <SecondStatItem>
            <StatText>New users</StatText>
            <StatNumber>10</StatNumber>
          </SecondStatItem>
          <ThirdStatItem>
           <StatText>Top users</StatText>
           <StatNumber>17</StatNumber>
          </ThirdStatItem>
          <FourthStatItem>
           <StatText>Total promotions</StatText>
           <StatNumber>32</StatNumber>
          </FourthStatItem>
         </StatsList>
    </div>
  )
}

export default Stats;
