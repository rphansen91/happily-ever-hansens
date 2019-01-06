import React from "react";
import PhoneField from "../components/PhoneField";
import get from "lodash/get";
import { unparse as convertToCSV } from "papaparse/papaparse.min";
import {
  Create,
  Edit,
  List,
  Filter,
  Datagrid,
  EmailField,
  TextField,
  BooleanField,
  NumberField,
  SimpleForm,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  downloadCSV,
  ReferenceArrayInput,
  SelectArrayInput
} from "react-admin";
import Fish from "./Fish";
import Steak from "./Steak";
import Vegetables from "./Vegetables";

const GuestFilter = props => (
  <Filter {...props}>
    <TextInput source="first_name" />
    <TextInput source="last_name" />
    <BooleanInput source="is_plus_one" />
    <BooleanInput source="is_submitted" />
    <BooleanInput source="is_attending" />
  </Filter>
);

const getFullAddress = guest => {
  return get(guest, "address.street_address")
    ? [
        get(guest, "address.street_address"),
        [
          get(guest, "address.city") + ",",
          get(guest, "address.state"),
          get(guest, "address.zip")
        ].join(" ")
      ].join("\n")
    : "";
};

const exporter = guests => {
  const data = guests.map(guest => {
    guest.full_address = getFullAddress(guest);
    return guest;
  });
  const fields = ["first_name", "last_name", "full_address"];
  const csv = convertToCSV({
    fields,
    data
  });
  downloadCSV(csv, "guests");
};

const MealField = ({ source, record = {} }) => {
  console.log(record[source]);
  switch (record[source]) {
    case "Salmon":
      return <Fish />;
    case "Steak":
      return <Steak />;
    case "Vegetables":
      return <Vegetables />;
    default:
      return "";
  }
};

export const GuestList = props => (
  <List {...props} filters={<GuestFilter />} exporter={exporter}>
    <Datagrid rowClick="edit">
      <EmailField source="email" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <PhoneField source="phone" />
      <MealField source="meal" />
      <BooleanField source="is_submitted" />
      <BooleanField source="is_attending" />
      <BooleanField source="is_plus_one" />
      <NumberField source="no_of_children" />
    </Datagrid>
  </List>
);

export const GuestEdit = props => (
  <Edit title="Edit Guest" {...props}>
    <SimpleForm>
      <TextInput source="email" type="email" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="phone" />
      <ReferenceInput source="plus_one_id" reference="guest">
        <SelectInput source="full_name" optionText="full_name" />
      </ReferenceInput>
      <ReferenceArrayInput
        label="Children"
        source="children_ids"
        reference="guest"
      >
        <SelectArrayInput source="full_name" optionText="full_name" />
      </ReferenceArrayInput>
      <BooleanInput source="is_submitted" />
      <BooleanInput source="is_attending" />
      <TextInput label="Street address" source="address.street_address" />
      <TextInput label="City" source="address.city" />
      <TextInput label="State" source="address.state" />
      <TextInput label="Zipcode" source="address.zip" />
    </SimpleForm>
  </Edit>
);

export const GuestCreate = props => (
  <Create title="Create Guest" {...props}>
    <SimpleForm>
      <TextInput source="email" type="email" defaultValue="" />
      <TextInput source="first_name" defaultValue="" />
      <TextInput source="last_name" defaultValue="" />
      <TextInput source="phone" defaultValue="" />
      <ReferenceInput source="plus_one_id" reference="guest">
        <SelectInput source="full_name" optionText="full_name" />
      </ReferenceInput>
      <ReferenceArrayInput
        label="Children"
        source="children_ids"
        reference="guest"
      >
        <SelectArrayInput source="full_name" optionText="full_name" />
      </ReferenceArrayInput>
      <BooleanInput source="is_submitted" defaultValue={false} />
      <BooleanInput source="is_attending" defaultValue={false} />
      <TextInput
        label="Street address"
        source="address.street_address"
        defaultValue=""
      />
      <TextInput label="City" source="address.city" defaultValue="" />
      <TextInput label="State" source="address.state" defaultValue="" />
      <TextInput label="Zipcode" source="address.zip" defaultValue="" />
    </SimpleForm>
  </Create>
);
