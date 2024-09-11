import React from 'react'
import { SinglePartyDetails } from '../components/cards/SinglePartyDetails'
import { parties } from '../components/ComponentsStyles'

export const SingleParty = () => {
  
  return (
    <main style={parties}>
      <SinglePartyDetails />
    </main>
  )
}
