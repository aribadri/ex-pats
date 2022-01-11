// import Loader from '../loader/Loader';
// import RegForm from '../../components/RegForm';
import './Tabs.css';

function TabContent({ title, content }) {
  console.log(content);
  console.log(title);

  return (
    <div className="tabcontent">
      { content }
    </div>
  );
}

export default TabContent;
