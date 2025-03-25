function ArrayLoppCompt() {
    const userdata = [
        {
            id: 1,
            name: 'ali',
            email: 'ali@gmail.com'
        },
        {
            id: 2,
            name: 'khan',
            email: 'khan@gmail.com'
        },
        {
            id: 3,
            name: 'azam',
            email: 'azam@gmail.com'
        },
        {
            id: 4,
            name: 'kazim',
            email: 'kazim@gmail.com'
        },
        {
            id: 5,
            name: 'alyail',
            email: 'alyail@gmail.com'
        },
        {
            id: 6,
            name: 'usman',
            email: 'usman@gmail.com'
        },
        {
            id: 7,
            name: 'hamza',
            email: 'hamza@gmail.com'
        },
        {
            id: 8,
            name: 'bilal',
            email: 'bilal@gmail.com'
        },
        {
            id: 9,
            name: 'farhan',
            email: 'farhan@gmail.com'
        },
        {
            id: 10,
            name: 'zain',
            email: 'zain@gmail.com'
        },
        {
            id: 11,
            name: 'rehman',
            email: 'rehman@gmail.com'
        },
        {
            id: 12,
            name: 'hassan',
            email: 'hassan@gmail.com'
        },
        {
            id: 13,
            name: 'jawad',
            email: 'jawad@gmail.com'
        },
        {
            id: 14,
            name: 'tariq',
            email: 'tariq@gmail.com'
        },
        {
            id: 15,
            name: 'danish',
            email: 'danish@gmail.com'
        }
    ];
    return (
        <div>
            <h2>TO use loop map  show array data </h2>
            <h3>Loop in jsx with map function</h3>
            <h3>User detils</h3>
            <table border={'1'} align="center">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userdata.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))


                    }
                </tbody>

            </table>
        </div>


    )
}
export default ArrayLoppCompt