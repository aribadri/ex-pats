/* eslint-disable max-len */
import MyButton from '../UI/button/MyButton';
import InputList from '../UI/combobox/InputList';
// import MyInput from '../UI/input/MyInput';

function HomePage({
  arr1, arr2, variations, profiSelected, setProfiSelected, regionSelected, setRegionSelected,
}) {
  console.log(profiSelected);
  console.log(regionSelected);

  return (

    <div>
      Welcome to ExPats.com
      <InputList arr={arr1} variations={variations[1]} selected={profiSelected} setSelected={setProfiSelected} />
      <InputList arr={arr2} variations={variations[0]} selected={regionSelected} setSelected={setRegionSelected} />
      <MyButton>Find</MyButton>
    </div>
  );
}

export default HomePage;
