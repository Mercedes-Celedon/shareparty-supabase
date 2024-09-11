import React from 'react'
import { PartyForm } from '../components/form/PartyForm'
import { parties } from '../components/ComponentsStyles'

export const CreateParty = () => {
  return (
    <main className='parties' style={parties}>
      <h1>Agrega una fiesta</h1>
      <PartyForm />
    </main>
  )
}
