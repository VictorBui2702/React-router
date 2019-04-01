import React from 'react';
import Candidate from './Candidate';

const Candidates = ({ candidates }) => {
  const renderCandidate = candidates.map(candidate => (
    <Candidate candidate={candidate} />
  ));
  return (
    <div>
      <h1>Candidate List</h1>
      {renderCandidate}
    </div>
  );
};

export default Candidates;