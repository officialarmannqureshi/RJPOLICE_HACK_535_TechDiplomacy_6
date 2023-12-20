import React from 'react'
import { List, Datagrid, TextField, ShowButton } from 'react-admin'
import { FilterSidebar } from './FilterSidebar';

const CctvList = (props) => {
    return (
        <List {...props} aside={<FilterSidebar />}>
            
            <Datagrid>
                <TextField label="Owner ID" source="OwnerID" />
                <TextField label="Owner Name" source="Owner Name" />
                <TextField label="Location" source="Location.Address" />
                <TextField label="Status" source="Status" />
                <TextField label="Geotag ID" source="GeotagID" />
                <TextField label="Camera Type" source="Camera Type" />
                <ShowButton />

            </Datagrid>
        </List>
    )
}

export default CctvList;
