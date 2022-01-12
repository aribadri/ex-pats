import MyButton from '../UI/button/MyButton';
import InputList from '../UI/combobox/InputList';
// import MyInput from '../UI/input/MyInput';

function HomePage({ arr1, arr2 }) {
  return (
    <div>
      Welcome to ExPats.com
      <InputList arr={arr1} />
      <InputList arr={arr2} />
      <MyButton>Find</MyButton>
    </div>
  );
}

export default HomePage;
