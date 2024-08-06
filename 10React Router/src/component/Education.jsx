import React from 'react'
import { useUserDetails } from '../context/UserDetails'
import EduCard from './EduCard'

function Education() {
    const { education } = useUserDetails()

    return (
        <div className="mx-auto w-full max-w-7xl">
            {
                education.map(edu => <EduCard key={edu.score} edu={edu}></EduCard>)
            }
        </div>
    )
}

export default Education