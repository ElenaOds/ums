import { useTypedSelector, useAppDispatch } from '../../redux/store';
import { setFilter } from "../../redux/filterSlice";

import { FilterContainer, Label, Labeltext, Input, SearchIcon, CrossIcon, Button } from './Filter.styled';

const Filter = () => {
    const dispatch = useAppDispatch();
    const filter = useTypedSelector((state) => state.filter);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(setFilter({ [name]: value }));
      };

    const handleClear = (name: string) => {
        dispatch(setFilter({ [name]: '' }));
    };
    

return (
    <FilterContainer>
        <Label htmlFor="name"> <Labeltext>Seach by name</Labeltext>
            <Input
                type="text"
                name="name"
                placeholder="Type a name"
                onChange={handleChange}
                value={filter.name}
            />
            {filter.name === '' ? <SearchIcon/> : 
            <Button type="button" aria-label="clear" onClick={() => handleClear('name')}>
                <CrossIcon/>
            </Button>
            }
        </Label>
     
        <Label htmlFor="userName"><Labeltext>Seach by username</Labeltext>
            <Input
                type="text"
                name="userName"
                placeholder="Type a username"
                onChange={handleChange}
                value={filter.userName}
            />
            {filter.userName === '' ? <SearchIcon/> : 
            <Button type="button" aria-label="clear" onClick={() => handleClear('userName')}>
                <CrossIcon/>
            </Button>
            }
       </Label>

        <Label htmlFor="email"><Labeltext>Seach by email</Labeltext>
            <Input
                type="text"
                name="email"
                placeholder="Type an email"
                onChange={handleChange}
                value={filter.email}
            />
            {filter.email === '' ? <SearchIcon/> : 
            <Button type="button" aria-label="clear" onClick={() => handleClear('email')}>
                <CrossIcon/>
            </Button>
            }
        </Label>
        <Label htmlFor="phone"><Labeltext>Search by phone</Labeltext>
            <Input
                type="text"
                name="phone"
                placeholder="Type a phone"
                onChange={handleChange}
                value={filter.phone}
            />
            {filter.phone === '' ? <SearchIcon/> : 
            <Button type="button" aria-label="clear" onClick={() => handleClear('phone')}>
                <CrossIcon/>
            </Button>
            }
      </Label>
    </FilterContainer>
  )
}

export default Filter;
