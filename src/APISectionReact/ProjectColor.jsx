import { useState } from "react"

function ColorProject() {
    const colors = JSON.parse(localStorage.getItem('color'))
    const [r, setR] = useState(colors && colors.r ? colors.r : 0)
    const [g, setG] = useState(colors && colors.g ? colors.g : 0)
    const [b, setB] = useState(colors && colors.b ? colors.b : 0)
    const saveColor = () => {
        localStorage.setItem('color', JSON.stringify({ r, g, b }))
    }
    return (
        <div>
            <h1>Color Mixture Project </h1>
            <div style={{ background: 'rgb(' + r + ',' + g + ',' + b + ')', width: 200, height: 200 }}>

            </div>
            <label htmlFor="">Red</label>

            <input
                value={r}
                type="range" onChange={(event) => setR(event.target.value)}
                min={0} max={255}
            />
            <br />
            <br />
            <label htmlFor="">Green</label>
            <input type="range" value={g} onChange={(event) => setG(event.target.value)}
                min={0} max={255}
            />
            <br />
            <br />
            <label htmlFor="">Blue</label>
            <input type="range" value={b} onChange={(event) => setB(event.target.value)}
                min={0} max={255}
            />
            <br />
            <br />
            <button onClick={saveColor}>save color combiton</button>

        </div>
    )
}
export default ColorProject