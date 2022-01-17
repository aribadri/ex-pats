import React, { useContext } from 'react';
import globalContext from '../../context/GlobalContext';
import './ProfiList.css';
import ProfiListItem from '../profilistItem/ProfiListItem';

function ProfiList() {
  const { profiList } = useContext(globalContext);
  return (
    <div className="profilist">
      {profiList.map((profi) => <ProfiListItem key={profi.id} profi={profi} />)}
    </div>
  );
}

export default ProfiList;
