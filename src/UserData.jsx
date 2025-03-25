const Userdata = ({ data }) => {
    return (
        <div style={{
            border: "1px solid green",
            padding:"10px",
            margin: '10px',
            width: "400px",
            borderRadius: '10px'

        }}>


            <h3><span style={{ color: 'green' }}>Id :{data.id}</span></h3>
            <h3><span style={{ color: 'green' }}>Email :{data.email}</span></h3>
            <h3><span style={{ color: 'green' }}>Name :{data.name}</span></h3>
        </div>
    )
}
export default Userdata