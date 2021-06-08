import React from 'react';
import {Picker, View} from 'react-native';

const Mandals = props => {
  const {district, mandal, setmandal} = props;

  return (
    <View>
      {district === 'GHMC' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Amberpet" label="Amberpet" />
          <Picker.Item value="Asif Nagar" label="Asif Nagar" />
          <Picker.Item value="Bahadurpura" label="Bahadurpura" />
          <Picker.Item value="Bandlaguda" label="Bandlaguda" />
          <Picker.Item value="Charminar" label="Charminar" />
          <Picker.Item value="Golkonda" label="Golkonda" />
          <Picker.Item value="Himayathnagar" label="Himayathnagar" />
          <Picker.Item value="Nampally" label="Nampally" />
          <Picker.Item value="Saidabad" label="Saidabad " />
          <Picker.Item value="Ameerpet" label="Ameerpet" />
          <Picker.Item value="Khairtabad" label="Khairtabad" />
          <Picker.Item value="Marredpally" label="Marredpally" />
          <Picker.Item value="Musheerabad" label="Musheerabad" />
          <Picker.Item value="Secunderabad" label="Secunderabad" />
          <Picker.Item value="Shaikpet" label="Shaikpet" />
          <Picker.Item value="Trimulgherry" label="Trimulgherry" />
        </Picker>
      ) : null}
      {district === 'Adilabad' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Adilabad urban" label="Adilabad (urban)" />
          <Picker.Item value="Adilabad rural" label="Adilabad (rural)" />
          <Picker.Item value="Mavala" label="Mavala" />
          <Picker.Item value="Gudihatnoor" label="Gudihatnoor" />
          <Picker.Item value="Bajahatnoor" label="Bajahatnoor" />
          <Picker.Item value="Bela" label="Bela" />
          <Picker.Item value="Boadh" label="Boadh" />
          <Picker.Item value="Jainath" label="Jainath" />
          <Picker.Item value="Indervelly" label="Indervelly" />
          <Picker.Item value="Narnoor" label="Narnoor" />
          <Picker.Item value="Gudiguda" label="Gudiguda" />
          <Picker.Item value="Utnoor" label="Utnoor" />
        </Picker>
      ) : null}
      {district === 'Bhadradri Kothagudem' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Kothagudem" label="Kothagudem" />
          <Picker.Item value="Palwancha" label="Palwancha" />
          <Picker.Item value="Tekulapalli" label="Tekulapalli" />
          <Picker.Item value="Yellandu" label="Yellandu" />
          <Picker.Item value="Chandrugonda" label="Chandrugonda" />
          <Picker.Item value="Aswaraopeta" label="Aswaraopeta" />
          <Picker.Item value="Mulakalapalli" label="Mulakalapalli" />
          <Picker.Item value="Dammapeta" label="Dammapeta" />
          <Picker.Item value="Gundala" label="Gundala" />
          <Picker.Item value="Julurpadu" label="Julurpadu" />
          <Picker.Item value="Sujathanagar" label="Sujathanagar" />
          <Picker.Item value="Chunchupalle" label="Chunchupalle" />
          <Picker.Item value="Laxmidevipalli" label="Laxmidevipalli" />
          <Picker.Item value="Allapalli" label="Allapalli" />
          <Picker.Item value="Annapureddypalli" label="Annapureddypalli " />
          <Picker.Item value="Bhadrachalam" label="Bhadrachalam" />
          <Picker.Item value="Dummugudem" label="Dummugudem" />
          <Picker.Item value="Cherla" label="Cherla" />
          <Picker.Item value="Burgampahad" label="Burgampahad" />
          <Picker.Item value="Aswapuram" label="Aswapuram" />
          <Picker.Item value="Manuguru" label="Manuguru" />
          <Picker.Item value="Pinapaka" label="Pinapaka" />
          <Picker.Item value="Karakagudem" label="Karakagudem" />
        </Picker>
      ) : null}
      {district === 'Jayashankar Bhupalapally' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Bhupalpalle" label="Bhupalpalle" />
          <Picker.Item value="Chityal" label="Chityal" />
          <Picker.Item value="Ghanpur" label="Ghanpur" />
          <Picker.Item value="Kataram" label="Kataram" />
          <Picker.Item value="Mahadevpur" label="Mahadevpur" />
          <Picker.Item value="Maha" label="Maha Mutharam" />
          <Picker.Item value="Malharrao" label="Malharrao" />
          <Picker.Item value="Mogullapalle" label="Mogullapalle" />
          <Picker.Item value="Palimela" label="Palimela" />
          <Picker.Item value="Regonda" label="Regonda" />
          <Picker.Item value="Tekumatla" label="Tekumatla" />
          <Picker.Item value="mulugu" label="Mulugu revenue division " />
          <Picker.Item value="Eturunagaram" label="Eturunagaram" />
          <Picker.Item value="Govindaraopet" label="Govindaraopet" />
          <Picker.Item value="Mangapet" label="Mangapet" />
          <Picker.Item value="Mulug" label="Mulug" />
          <Picker.Item value="Tadvai" label="Tadvai" />
          <Picker.Item value="Vajedu" label="Vajedu" />
          <Picker.Item value="Venkatapur" label="Venkatapur" />
          <Picker.Item value="Kannaigudem" label="Kannaigudem" />
        </Picker>
      ) : null}
      {district === 'Jogulamba Gadwal' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Jagital' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Jagitial urban" label="Jagitial(urban)" />
          <Picker.Item value="Jagitial rural" label="Jagitial(rural)" />
          <Picker.Item value="Raikal" label="Raikal" />
          <Picker.Item value="Sarangapur" label="Sarangapur" />
          <Picker.Item value="Beerpur" label="Beerpur" />
          <Picker.Item value="Dharmapuri" label="Dharmapuri" />
          <Picker.Item value="Buggaram" label="Buggaram" />
          <Picker.Item value="Pegadapalli" label="Pegadapalli" />
          <Picker.Item value="Gollapalli" label="Gollapalli" />
          <Picker.Item value="Mallial" label="Mallial" />
          <Picker.Item value="Kodimial" label="Kodimial" />
          <Picker.Item value="Velgatur" label="Velgatur " />
          <Picker.Item value="Korutla" label="Korutla" />
          <Picker.Item value="Metpalli" label="Metpalli" />
          <Picker.Item value="Mallapur" label="Mallapur" />
          <Picker.Item value="Ibrahimpatnam" label="Ibrahimpatnam" />
          <Picker.Item value="Medipalli" label="Medipalli" />
          <Picker.Item value="Kathlapur" label="Kathlapur" />
        </Picker>
      ) : null}
      {district === 'Jangaon' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Bachannapeta" label="Bachannapeta" />
          <Picker.Item value="Devaruppala" label="Devaruppala" />
          <Picker.Item value="Gundala" label="Gundala" />
          <Picker.Item value="Jangaon" label="Jangaon" />
          <Picker.Item value="Lingalaghanpur" label="Lingalaghanpur" />
          <Picker.Item value="Narmetta" label="Narmetta" />
          <Picker.Item value="Raghunathapalle" label="Raghunathapalle" />
          <Picker.Item value="Tarigoppula" label="Tarigoppula " />
          <Picker.Item value="Chilpur" label="Chilpur" />
          <Picker.Item value="Zaffergadh" label="Zaffergadh" />
          <Picker.Item value="Kodakandla" label="Kodakandla" />
          <Picker.Item value="Palakurthi" label="Palakurthi" />
          <Picker.Item value="Station" label="Station Ghanpur" />
        </Picker>
      ) : null}
      {district === 'Kamareddy' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Karimnagar' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Khammam' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Komaram Bheem Asifabad' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Mahbubabad' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Mancherial' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Chennur" label="Chennur" />
          <Picker.Item value="Jaipur" label="Jaipur" />
          <Picker.Item value="Bheemaram" label="Bheemaram" />
          <Picker.Item value="Kotapally" label="Kotapally" />
          <Picker.Item value="Luxettipet" label="Luxettipet" />
          <Picker.Item value="Mancherial" label="Mancherial" />
          <Picker.Item value="Naspur" label="Naspur" />
          <Picker.Item value="Hajipur" label="Hajipur" />
          <Picker.Item value="Mandamarri" label="Mandamarri" />
          <Picker.Item value="Dandepally" label="Dandepally" />
          <Picker.Item value="Jannaram" label="Jannaram " />
          <Picker.Item value="Kasipet" label="Kasipet" />
          <Picker.Item value="Bellampally" label="Bellampally Mandal" />
          <Picker.Item value="Vempally" label="Vempally" />
          <Picker.Item value="Nennel" label="Nennel" />
          <Picker.Item value="Tandur" label="Tandur" />
          <Picker.Item value="Bheemini" label="Bheemini" />
          <Picker.Item value="Kannepally" label="Kannepally" />
        </Picker>
      ) : null}
      {district === 'Mahbubnagar' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Medak' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Medchal' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Alwal" label="Alwal" />
          <Picker.Item value="Bachupally" label="Bachupally" />
          <Picker.Item value="Balanagar" label="Balanagar" />
          <Picker.Item value="Dundigal" label="Dundigal" />
          <Picker.Item value="Kukatpally" label="Kukatpally" />
          <Picker.Item value="Malkajgiri" label="Malkajgiri" />
          <Picker.Item value="Quthbullapur" label="Quthbullapur" />
          <Picker.Item value="Ghatkesar" label="Ghatkesar" />
          <Picker.Item value="Kapra" label="Kapra" />
          <Picker.Item value="Keesara" label="Keesara" />
          <Picker.Item value="Medchal" label="Medchal" />
          <Picker.Item value="Medipally" label="Medipally" />
          <Picker.Item value="Shamirpet" label="Shamirpet" />
          <Picker.Item value="Uppal" label="Uppal" />
        </Picker>
      ) : null}
      {district === 'Mulugu' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Nagarkurnool' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Nalgonda' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Narayanpet' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Nirmal' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Nizamabad' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Pedapally' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Rangareddy' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Sangareddy' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Kalher" label="Kalher" />
          <Picker.Item value="Kangti" label="Kangti" />
          <Picker.Item value="Manoor" label="Manoor" />
          <Picker.Item value="Nagilgidda" label="Nagilgidda" />
          <Picker.Item value="Narayankhed" label="Narayankhed" />
          <Picker.Item value="Sirgapoor" label="Sirgapoor" />
          <Picker.Item value="Ameenpur" label="Ameenpur" />
          <Picker.Item value="Andole" label="Andole" />
          <Picker.Item value="Gummadidala" label="Gummadidala" />
          <Picker.Item value="Hathnoora" label="Hathnoora" />
          <Picker.Item value="Jinnaram" label="Jinnaram" />
          <Picker.Item value="Kandi" label="Kandi" />
          <Picker.Item value="Kondapur" label="Kondapur" />
          <Picker.Item value="Munipally" label="Munipally" />
          <Picker.Item value="Patancheru" label="Patancheru" />
          <Picker.Item value="Pulkal" label="Pulkal" />
          <Picker.Item value="Ramchandrapuram" label="Ramchandrapuram" />
          <Picker.Item value="Sadasivpet" label="Sadasivpet" />
          <Picker.Item value="Sangareddy" label="Sangareddy" />
          <Picker.Item value="Vatpally" label="Vatpally" />
          <Picker.Item value="Jharasangam" label="Jharasangam" />
          <Picker.Item value="Kohir" label="Kohir" />
          <Picker.Item value="Mogudampally" label="Mogudampally" />
          <Picker.Item value="Nyalkal" label="Nyalkal" />
          <Picker.Item value="Raikode" label="Raikode" />
          <Picker.Item value="Zaheerabad" label="Zaheerabad" />
        </Picker>
      ) : null}
      {district === 'Siddipet' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Siddipet urban" label="Siddipet(Urban)" />
          <Picker.Item value="Siddipet rural" label="Siddipet (Rural)" />
          <Picker.Item value="Nangnoor" label="Nangnoor" />
          <Picker.Item value="Chinnakodur" label="Chinnakodur" />
          <Picker.Item value="Thoguta" label="Thoguta" />
          <Picker.Item value="Doultabad" label="Doultabad" />
          <Picker.Item value="Mirdoddi" label="Mirdoddi" />
          <Picker.Item value="Dubbak" label="Dubbak" />
          <Picker.Item value="Cherial" label="Cherial" />
          <Picker.Item value="Komuravelli" label="Komuravelli " />
          <Picker.Item value="Gajwel" label="Gajwel" />
          <Picker.Item value="Jagdevpur" label="Jagdevpur" />
          <Picker.Item value="Kondapak" label="Kondapak" />
          <Picker.Item value="Mulug" label="Mulug" />
          <Picker.Item value="Markook" label="Markook" />
          <Picker.Item value="Wargal" label="Wargal" />
          <Picker.Item value="Raipole" label="Raipole " />
          <Picker.Item value="Husnabad" label="Husnabad" />
          <Picker.Item value="Akkannapet" label="Akkannapet" />
          <Picker.Item value="Koheda" label="Koheda" />
          <Picker.Item value="Bejjanki" label="Bejjanki" />
          <Picker.Item value="Maddur" label="Maddur" />
        </Picker>
      ) : null}
      {district === 'Suryapet' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Atmakur(s)" label="Atmakur(s)" />
          <Picker.Item value="Chivvemla" label="Chivvemla" />
          <Picker.Item value="Jajireddygudem" label="Jajireddygudem" />
          <Picker.Item value="Mothey" label="Mothey" />
          <Picker.Item value="Nuthankal" label="Nuthankal" />
          <Picker.Item value="Penpahad" label="Penpahad" />
          <Picker.Item value="Suryapet" label="Suryapet" />
          <Picker.Item value="Thirumalagiri" label="Thirumalagiri" />
          <Picker.Item value="Thungathurthy" label="Thungathurthy" />
          <Picker.Item value="Garidepally" label="Garidepally" />
          <Picker.Item value="Neredcherla" label="Neredcherla" />
          <Picker.Item value="Nagaram" label="Nagaram" />
          <Picker.Item value="Maddirala" label="Maddirala" />
          <Picker.Item value="Palakeedu" label="Palakeedu" />
          <Picker.Item value="Chilkur" label="Chilkur" />
          <Picker.Item value="Huzurnagar" label="Huzurnagar" />
          <Picker.Item value="Kodad" label="Kodad" />
          <Picker.Item value="Mattampally" label="Mattampally" />
          <Picker.Item value="Mellachervu" label="Mellachervu" />
          <Picker.Item value="Munagala" label="Munagala" />
          <Picker.Item value="Nadigudem" label="Nadigudem" />
          <Picker.Item value="Ananthagiri" label="Ananthagiri" />
          <Picker.Item value="Mallareddygudem" label="Mallareddygudem" />
        </Picker>
      ) : null}
      {district === 'Rajanna Sircilla' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Vikarabad' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Basheerabad" label="Basheerabad" />
          <Picker.Item value="Bommaraspet" label="Bommaraspet" />
          <Picker.Item value="Doulthabad" label="Doulthabad" />
          <Picker.Item value="Kodangal" label="Kodangal" />
          <Picker.Item value="Peddemul" label="Peddemul" />
          <Picker.Item value="Tandur" label="Tandur" />
          <Picker.Item value="Yelal" label="Yelal" />
          <Picker.Item value="Doma" label="Doma" />
          <Picker.Item value="Dharur" label="Dharur" />
          <Picker.Item value="Bantwaram" label="Bantwaram" />
          <Picker.Item value="Kulkacherla" label="Kulkacherla" />
          <Picker.Item value="Kotepally" label="Kotepally" />
          <Picker.Item value="Marpalle" label="Marpalle" />
          <Picker.Item value="Mominpet" label="Mominpet" />
          <Picker.Item value="Nawabpet" label="Nawabpet" />
          <Picker.Item value="Pudur" label="Pudur" />
          <Picker.Item value="Pargi" label="Pargi" />
          <Picker.Item value="Vikarabad" label="Vikarabad" />
        </Picker>
      ) : null}
      {district === 'Wanaparthy' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Warangal Rural' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Atmakur" label="Atmakur" />
          <Picker.Item value="Damera" label="Damera" />
          <Picker.Item value="Geesugonda" label="Geesugonda" />
          <Picker.Item value="Parkal" label="Parkal" />
          <Picker.Item value="Parvathagiri" label="Parvathagiri" />
          <Picker.Item value="Rayaparthy" label="Rayaparthy" />
          <Picker.Item value="Sangem" label="Sangem" />
          <Picker.Item value="Shayampet" label="Shayampet" />
          <Picker.Item value="Wardhannapet" label="Wardhannapet" />
          <Picker.Item value="Chennaraopet" label="Chennaraopet" />
          <Picker.Item value="Duggondi" label="Duggondi" />
          <Picker.Item value="Khanapur" label="Khanapur" />
          <Picker.Item value="Narsampet" label="Narsampet" />
          <Picker.Item value="Nallabelly" label="Nallabelly" />
          <Picker.Item value="Nekkonda" label="Nekkonda" />
        </Picker>
      ) : null}

      {district === 'Warangal Urban' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Bheemadevarpalli" label="Bheemadevarpalli" />
          <Picker.Item value="Dharmasagar" label="Dharmasagar" />
          <Picker.Item value="Elkathurthy" label="Elkathurthy" />
          <Picker.Item value="Inavole" label="Inavole" />
          <Picker.Item value="Hanamkonda" label="Hanamkonda" />
          <Picker.Item value="Hasanparthy" label="Hasanparthy" />
          <Picker.Item value="Kamalapur" label="Kamalapur" />
          <Picker.Item value="Kazipet" label="Kazipet" />
          <Picker.Item value="Khila" label="Khila Warangal" />
          <Picker.Item value="Velair" label="Velair" />
          <Picker.Item value="Warangal" label="Warangal" />
        </Picker>
      ) : null}
      {district === 'Yadadri Bhuvanagiri' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(ItemValue, ItemIndex) => {
            setmandal(ItemValue);
          }}>
          <Picker.Item value="" label="All Mandals" />
          <Picker.Item value="Addaguduru" label="Addaguduru" />
          <Picker.Item value="Alair" label="Alair" />
          <Picker.Item value="Atmakur(m)" label="Atmakur(M)" />
          <Picker.Item value="Bibinagar" label="Bibinagar" />
          <Picker.Item value="Bhongir" label="Bhongir" />
          <Picker.Item value="Bommalaramaram" label="Bommalaramaram" />
          <Picker.Item value="Motakondur" label="Motakondur" />
          <Picker.Item value="Mothkur" label="Mothkur" />
          <Picker.Item value="Rajapet" label="Rajapet" />
          <Picker.Item value="Turkapally" label="Turkapally" />
          <Picker.Item value="Yadagirigutta" label="Yadagirigutta" />
          <Picker.Item value="Bhoodan" label="Bhoodan Pochampally" />
          <Picker.Item value="Choutuppal" label="Choutuppal" />
          <Picker.Item value="Narayanpur" label="Narayanpur" />
          <Picker.Item value="Ramannapet" label="Ramannapet" />
          <Picker.Item value="Valigonda" label="Valigonda" />
        </Picker>
      ) : null}
    </View>
  );
};
export default Mandals;
