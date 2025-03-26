const StudentCollge = ({ student }) => {
    return (
        <div>
            <h2>College Student Name:</h2>
            {
                student.map((std, index) => (
                    <div key={index}>
                        <ul>
                            <li>
                                <h4>Name: {std.name}</h4>
                                <h4>Email:{std.stdemail}</h4>
                                <h4> Address: {std.address}</h4>
                            </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
export default StudentCollge