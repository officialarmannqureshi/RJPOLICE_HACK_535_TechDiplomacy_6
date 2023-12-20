import { FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import FilterViewcss from './myCss'
export const FilterSidebar = () => (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }} style={FilterViewcss }>
        <CardContent>
            
            <FilterList label="Camera-Type">
                <FilterListItem label="Private" value={{ is_Ready: true }} />
                <FilterListItem label="Public" value={{ is_Ready: false }} />
            </FilterList>
            <FilterList label="Camera-Status" >
                <FilterListItem label="Functional" value={{ is_Working: true }} />
                <FilterListItem label="Non-Functional" value={{ is_Working: false }} />
              
            </FilterList>
        </CardContent>
    </Card>
);