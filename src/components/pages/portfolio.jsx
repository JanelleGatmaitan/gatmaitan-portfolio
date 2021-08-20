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
      <Nav name={name}/>
      {person && <h1>{`${person.firstName}'s portfolio`}</h1>}
    </>
  );
}

export default Portfolio;
