import React from 'react';
import {Picker, View} from 'react-native';
export const District = props => {
  const {district, setDistrict, setMandal} = props;
  return (
    <View>
      <Picker
        selectedValue={district}
        label="District"
        style={{height: 50, width: 280}}
        onValueChange={(itemValue, itemIndex) => {
          setMandal('');
          setDistrict(itemValue);
        }}>
        <Picker.Item value="GHMC" label="GHMC" />
        <Picker.Item value="Adilabad" label="Adilabad " />
        <Picker.Item value="Bhadradri Kothagudem" label="Bhadradri Kothagudem"/>
        <Picker.Item value="Jagital" label="Jagital " />
        <Picker.Item value="Jangaon" label="Jangaon " />
        <Picker.Item value="Jayashankar Bhupalapally" label="Jayashankar Bhupalapally"/>
        <Picker.Item value="Jogulamba Gadwal" label="Jogulamba Gadwal " />
        <Picker.Item value="Kamareddy" label="Kamareddy " />
        <Picker.Item value="Komaram Bheem Asifabad" label="Komaram Bheem Asifabad"/>
        <Picker.Item value="Karimnagar" label="Karimnagar " />
        <Picker.Item value="Khammam" label="Khammam " />
        <Picker.Item value="Mahbubabad" label="Mahbubabad " />
        <Picker.Item value="Mancherial" label="Mancherial " />
        <Picker.Item value="Mahbubnagar" label="Mahbubnagar " />
        <Picker.Item value="Medak" label="Medak " />
        <Picker.Item value="Medchal" label="Medchal " />
        <Picker.Item value="Mulugu" label="Mulugu " />
        <Picker.Item value="Nagarkurnool" label="Nagarkurnool " />
        <Picker.Item value="Nalgonda" label="Nalgonda " />
        <Picker.Item value="Narayanpet" label="Narayanpet " />
        <Picker.Item value="Nirmal" label="Nirmal " />
        <Picker.Item value="Nizamabad" label="Nizamabad " />
        <Picker.Item value="Pedapally" label="Pedapally " />
        <Picker.Item value="Rangareddy" label="Rangareddy " />
        <Picker.Item value="Sangareddy" label="Sangareddy " />
        <Picker.Item value="Siddipet" label="Siddipet " />
        <Picker.Item value="Suryapet" label="Suryapet " />
        <Picker.Item value="Rajanna Sircilla" label="Rajanna Sircilla " />
        <Picker.Item value="Vikarabad" label="Vikarabad " />
        <Picker.Item value="Wanaparthy" label="Wanaparthy " />
        <Picker.Item value="Warangal Rural" label="Warangal Rural " />
        <Picker.Item value="Yadadri Bhuvanagiri" label="Yadadri Bhuvanagiri " />
        <Picker.Item value="Warangal Urban" label="Warangal Urban " />
      </Picker>
    </View>
  );
};
