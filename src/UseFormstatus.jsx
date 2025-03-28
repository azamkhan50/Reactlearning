import { useFormStatus } from "react-dom";

function UseFromStatus() {

    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 5000));
        console.log('submit');

    }
    function LoginForm() {
        const { pending } = useFormStatus();
        console.log(pending)
        return (
            <div>

                <input type="text" placeholder="name" />
                <br />
                <br />
                <input type="text" placeholder="password" />
                <br />
                <br />
                <button disabled={pending}>{pending ? 'submiting...' : 'submit'}</button>


            </div>
        )
    }
    return (
        <div>
            <h2>work useformstatu</h2>
            <form action={handleSubmit}>

                <LoginForm />
            </form>

        </div>
    )
}
export default UseFromStatus;

