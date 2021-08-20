import React, {useEffect, useState} from 'react';
import Nav from '../nav';
import getData from '../../lib/get-data';

function Portfolio(props) {
  const name = props.match.params.name;
  const [person, setPerson] = useState();
  useEffect(() => {
    const data = getData(name);
    console.log('data: ', data);
    setPerson(data);
  }, [name]);
  return (
    <>
      {person &&
      <>
        <Nav firstName={person.firstName} lastName={person.lastName} />
        <h1>{`${person.firstName}'s portfolio`}</h1>
      </>
      }
    </>
  );
}

export default Portfolio;
