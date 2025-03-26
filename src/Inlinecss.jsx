function InLineCssCompeontes({ newcolor, grid }) {
    const userData = [{
        imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
        name: 'Azam',
        postion: 'Software Enginner'
    },
    {
        imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
        name: 'Khan',
        postion: 'Software intern'
    },
    {
        imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
        name: 'asif',
        postion: 'Fluuter developer'
    },
    {
        imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
        name: 'ali',
        postion: 'UI developer'
    },
    {
        imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
        name: 'qasim',
        postion: 'Graphic developer'
    },

    ]

    return (
        <div>
            {
                userData.map((data) => (
                    <div>
                        <img style={{ width: "200px" }} src={data.imgUrl} alt="" />
                        <div style={{ padding: "10px", color: newcolor }}>
                            <h4>{data.name}</h4>
                            <p>{data.postion}</p>
                        </div>
                    </div>
                )

                )
            }



        </div>
    )
}

export default InLineCssCompeontes