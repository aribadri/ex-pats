// import React, { useContext } from 'react';
// import globalContext from '../../context/GlobalContext';
import './ProfiList.css';
import ProfiListItem from '../profilistItem/ProfiListItem';

function ProfiList({ profiList }) {
  // const { profiList } = useContext(globalContext);
  console.log(profiList);
  if (profiList) {
    return (
      <div className="profilist">
        {profiList.map((profi) => <ProfiListItem key={profi.id} profi={profi} />)}
      </div>
    );
  }
  return (
    <div />
  );
}

export default ProfiList;
