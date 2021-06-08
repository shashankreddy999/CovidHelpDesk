import React from 'react';
import {Picker, Text, View} from 'react-native';
export const Filters = props => {
  const {filter, setFilter} = props;
  return (
    <View>
      <Picker
        selectedValue={filter}
        label="Filter"
        style={{height: 50, width: 280}}
        onValueChange={(ItemValue, ItemIndex) => {
          setFilter(ItemValue);
        }}>
        <Picker.Item value="" label="None" />
        <Picker.Item value="beds" label="Beds" />
        <Picker.Item value="oxygen" label="Oxygen" />
        <Picker.Item value="ventilators" label="ventilators" />
        <Picker.Item value="vaccinations" label="Vaccination Center" />
        <Picker.Item value="private" label="Private Hospitals" />
        <Picker.Item value="govt" label="Government Hospitals" />
        <Picker.Item value="covaxin" label="Covaxin" />
        <Picker.Item value="covishield" label="Covishield" />
        <Picker.Item value="remedesivir" label="Remedesivir" />
      </Picker>
    </View>
  );
};
