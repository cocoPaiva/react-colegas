import React, { Component } from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>nombre</th>
          <th>chambea en</th>
        </tr>
      </thead>
    )
  }
const TableBody = (params) => {
    const rows  = params.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{index}</td>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
    <button onClick={() => params.removeCharacter(index)}>Delete</button>
  </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

const Table = (props) => {
   
    const { characterData ,removeCharacter } = props

    return (
        <table>
            <TableHeader />
            <TableBody  characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
    )
}

export default Table
