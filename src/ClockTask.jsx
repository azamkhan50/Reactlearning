import { useEffect, useState } from "react"

function TaskColck({ color }) {
    const [time, settime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            settime(new Date().toLocaleTimeString());
        },1000)
    }, [])
    return (
        <div style={{
            display: "flex",
            justifyContent: "center", // Centers horizontally
            alignItems: "center", // Centers vertically
            height: "10vh" // Optional: Centers vertically in full screen
        }}>

            <h3 style={{
                color: color, background: "#000"
                , width: "120px", padding: "10px",
                alignItems: "center",
                borderRadius: "10px"
            }}>{time}</h3>

        </div>
    )
}
export default TaskColck