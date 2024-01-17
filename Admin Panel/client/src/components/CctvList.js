import React, { useState } from 'react';
import {
  List,
  Datagrid,
  TextField,
  Filter,
  SelectInput,
  ShowButton,
} from 'react-admin';
const CctvFilter = (props) => (
    <Filter {...props}>
      <SelectInput label="Camera Type" source="cameraType" choices={[
        { id: 'Private', name: 'Private' },
        { id: 'Public', name: 'Public' },
      ]} />
      {/* Add more filter components if needed */}
    </Filter>
  );

const CctvList = (props) => {
    const [filterValue, setFilterValue] = useState({});
  
    const handleFilter = (filter) => {
      setFilterValue(filter);
    };
  
    return (
      <List {...props} title="List of Cameras" filters={<CctvFilter context="button" />} filter={filterValue}>
      <Datagrid>
        <TextField label="Owner ID" source="OwnerID" />
        <TextField label="Owner Name" source="Owner Name" />
        <TextField label="Location" source="Location.Address" />
        <TextField label="Status" source="Status" />
        <TextField label="Camera Type" source="Camera Type" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default CctvList;
