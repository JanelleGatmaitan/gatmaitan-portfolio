import React, {useEffect, useState} from 'react';
// import Nav from '../nav';
import getData from '../../lib/get-data';
import About from '../about';
import Skills from '../skils';
import Projects from '../projects';

function Portfolio(props) {
  const name = props.match.params.name;
  const [person, setPerson] = useState();
  useEffect(() => {
    const data = getData(name);
    setPerson(data);
  }, [name]);
  return (
    <>
      {person &&
      <>
        {/* <Nav firstName={person.firstName} lastName={person.lastName} /> */}
        <About data={person}/>
        <Skills skills={person.skills} />
        <Projects projects={person.projects} />
      </>
      }
    </>
  );
}

export default Portfolio;
