import React from 'react';
import { Link } from 'react-router-dom';

const Candidate = ({ candidate }) => {
  return (
    <div>
      <Link
        to={{
          pathname: `/view/candidate/${candidate.id}`,
          state: candidate
        }}
      >
        {candidate.firstName}
      </Link>
    </div>
  );
};

export default Candidate;