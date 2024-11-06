import React, { useEffect, useState } from 'react';

function PetPage() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pets');
                const data = await response.json();
                if (response.ok) {
                    setPets(data);
                } else {
                    alert('Failed to fetch pets');
                }
            } catch (error) {
                alert('An error occurred while fetching pets');
            }
        };

        fetchPets();
    }, []);

    return (
        <div className="pet-page">
            <h2>Available Pets</h2>
            <ul>
                {pets.map((pet) => (
                    <li key={pet._id}>
                        <strong>{pet.name}</strong> - {pet.breed} ({pet.age} years)
                        <p>Status: {pet.status}</p>
                        <p>Care Details: {pet.careDetails}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PetPage;
