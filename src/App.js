import React, { useState, useEffect } from 'react';
import { Form, TeamMember } from './components';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState('');

  useEffect(() => {
    if (localStorage.getItem('teamMembers'))
      setTeamMembers(JSON.parse(localStorage.getItem('teamMembers')));
  }, []);

  useEffect(() => {
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
  }, [teamMembers]);

  const addTeamMember = newMember => {
    setTeamMembers([...teamMembers, { ...newMember, id: teamMembers.length }]);
  };

  return (
    <div className='text-center max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold my-3'>Team Time</h1>
      <Form addMember={addTeamMember} />
      <div className='mx-auto max-w-xs'>
        {teamMembers.map(member => {
          return <TeamMember key={member.id} memberInfo={member} />;
        })}
      </div>
    </div>
  );
}

export default App;
