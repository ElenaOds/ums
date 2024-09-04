 import { CountriesWrapper, ItemTitle, Map, MapWrapper, CountriesList, CoutryItem } from './Countries.styled';

const Coutries = () => {
  return (
    <CountriesWrapper>
      <ItemTitle>Countries of users</ItemTitle>
      <MapWrapper>
        <CountriesList>
            <CoutryItem>Canada - 4</CoutryItem>
            <CoutryItem>USA - 4</CoutryItem>
            <CoutryItem>Italy - 3</CoutryItem>
            <CoutryItem>Ukraine - 2</CoutryItem>
            <CoutryItem>Spain - 2</CoutryItem>
        </CountriesList>
        <Map/>
      </MapWrapper>
    </CountriesWrapper>
  )
}

export default Coutries;
