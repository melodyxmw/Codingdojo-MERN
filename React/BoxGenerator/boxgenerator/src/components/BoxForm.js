import React, {useState} from 'react'

const BoxForm = ({state, setState}) => {

    const [newBox, setNewBox] = useState({
        color: "",
        height: 200,
        width: 200,
    })
    const handleClick = () => {
        if (newBox.color){
            setState([...state, newBox])
        }
        setNewBox({
            color: "",
            height: 200,
            width: 200,
        })
    }
    return (
        <div>
            <label htmlFor="">Color</label>
            <input type="text" value={newBox.color} onChange={e => setNewBox({...newBox,color:e.target.value})}/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default BoxForm
