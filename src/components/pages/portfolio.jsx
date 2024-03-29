import React, {useEffect, useState} from 'react';
import Nav from '../nav';
import getData from '../../lib/get-data';
import About from '../about';
import Skills from '../skills';
import Projects from '../projects';
import Contact from '../contact';

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
        <Nav firstName={person.firstName} lastName={person.lastName} resume={person.resume}/>
        <About data={person}/>
        <Skills skills={person.skills} />
        <Projects name={person.firstName} projects={person.projects} />
        <Contact data={person.contact} />
      </>
      }
    </>
  );
}

export default Portfolio;
