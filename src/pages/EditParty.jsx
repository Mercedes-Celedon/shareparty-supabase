import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/auth/authContext'
import { PartyForm } from '../components/form/PartyForm'
export const EditParty = () => {
  const { token } = useAuth();
  const { id } = useParams();  // Obtener el ID desde la URL
  const [partyData, setPartyData] = useState(null);

  useEffect(() => {
    // Hacer la petición al backend para obtener los datos de la fiesta
    axios.get(`http://localhost:3001/parties/${id}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then(response => {
      setPartyData(response.data);  // Guardar los datos de la fiesta en el estado
    })
    .catch(error => {
      console.error("Error fetching party details:", error);
    });
  }, [id, token]);
  return (
    <div>
      <h1>Editar Fiesta</h1>
      {partyData && <PartyForm partyData={partyData} />} {/* Pasar los datos al formulario */}
    </div>
  )
}
