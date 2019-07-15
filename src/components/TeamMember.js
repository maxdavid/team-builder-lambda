import React from 'react';

const TeamMember = props => {
  const { name, email, role } = props.memberInfo;

  return (
    <div className='my-4 p-4 max-w-full border border-full rounded border-gray-300'>
      <h2 className='font-bold text-xl'>{name}</h2>
      <h4>{role}</h4>
      <a href={`mailto:${email}`} className='text-gray-500'>
        {email}
      </a>
    </div>
  );
};

export default TeamMember;
