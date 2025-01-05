import React from 'react'
import NavbarSticky from '../components/NavbarSticky'
import {ProjectList} from '../components/ProjectList'
import FooterText from '../components/FooterText'

const ListProject = () => {
  return (
    <div>
      <NavbarSticky />
      <ProjectList />
      <FooterText />
    </div>
  )
}

export default ListProject