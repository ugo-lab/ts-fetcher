import { useState } from 'react';
import { CallStatus, IData } from '../../models';
import { getData } from './HomeApi';

const HomePage = () => {
  const [fetchedData, setFetchedData] = useState<IData>();
  const [callStatus, setCallStatus] = useState<CallStatus>('idle');

  const handleFetch = (id: string) => {
    setCallStatus('pending');

    getData(id)
      .then((res) => {
        setFetchedData(res);
        setCallStatus('success');
      })
      .catch((err: Error) => {
        setCallStatus('error');
      });
  };

  return (
    <div>
      <div className="btn-list">
        <button onClick={() => handleFetch('1')}>/data/1 (200)</button>
        <button onClick={() => handleFetch('2')}>/data/2 (200)</button>
        <button onClick={() => handleFetch('3')}>/data/3 (404)</button>
      </div>

      <div className="content">
        {callStatus === 'idle' && (
          <p className="helper">waiting for a request...</p>
        )}
        {callStatus === 'pending' && <p className="helper">loading...</p>}
        {callStatus === 'error' && <p className="error">An error occurred</p>}
        {callStatus === 'success' && fetchedData && (
          <div>
            <p>id: {fetchedData.id}</p>
            <p>name: {fetchedData.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
