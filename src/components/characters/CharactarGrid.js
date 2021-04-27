import React from 'react'

const CharactarGrid = ({ items, isLoading }) => {
    return isLoading ? (<h1></h1>) : (<section className='cards'>
        {items.map(item => (
            <h1>{item.name}</h1>
        ))}
    </section>)
}

export default CharactarGrid
