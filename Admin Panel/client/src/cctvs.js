import {Link,React} from "react";
import { List, Datagrid, TextField, ChipField, useRecordContext, Show, SimpleShowLayout, ShowButton } from "react-admin";
import OperatorShow from "./components/OperatorShow";

const CustomChipField = ({ source }) => {
  const record = useRecordContext();
  const getColorForCameraType = () => {
    if (record && record[source]) {
      return record[source] === "Private" ? "green" : "red";
    }
    // Handle the case when record or record[source] is undefined
    return "defaultColor";
  };

  return (
    <ChipField
      label="Camera Type"
      source={source}
      sx={{ background: getColorForCameraType(), fontWeight: 700 }}
    />
  );
};


export const CctvList = () => (
  <List>
    <Datagrid>
      <TextField label="Owner ID" source="OwnerID" />
      <TextField label="Owner Name" source="Owner Name" />
      <TextField label="Location" source="Location.Address" />
      <TextField label="Status" source="Status" />
      <CustomChipField source="Camera Type" />
    
      <ShowButton />
   
      
    </Datagrid>
  </List>
);

