
import StudentCollge from "./CollegeStudents"
function College({ data }) {
    return (
        <div style={{
            background: "#ccc", borderRadius: "5px",
            padding: "20px", margin: "10px", borderBottom: "2px solid #000"
        }}>
            <h2>College Name: {data.name}</h2>
            <ul>
                <li>
                    <h5>city name: {data.city}</h5>
                </li>
            </ul>
            <ul>
                <li>
                    <h5>Website: {data.website}</h5>
                </li>
            </ul>
            {
                < StudentCollge student={data.student} />
            }
        </div>
    )
}

export default College