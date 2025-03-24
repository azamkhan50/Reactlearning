function Name() {
    return (

        <div>
            <h2>Azam Khan Toda</h2>
            <ImageUrl />

            <Txt />
            <Buttom />
            <ImageUrl />
            <ImageUrl />
        </div>

    );

}


function ImageUrl() {
    return (<img
        src="https://i.imgur.com/lICfvbD.jpg"
        alt="Aklilu Lemma"
    />)
}


function Txt() {
    return (
        <ul>
            <li><h3>your name</h3></li>
            <li><h3>your age</h3></li>
            <li><h3>your phone no</h3></li>

        </ul>
    )
}
function Buttom() {
    return (
        <button onClick={() => alert('Function call')}>Click me</button>
    )
}

export default Name