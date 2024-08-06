import React from 'react'
import { useUserDetails } from '../context/UserDetails'
import ProjectCard from './ProjectCard'

function Projects() {
    const { projects } = useUserDetails()

    return (
        <div className="mx-auto w-full max-w-7xl">
            {
                projects.map(proj => <ProjectCard key={proj.name} proj={proj}></ProjectCard>)
            }
        </div>
    )
}

export default Projects