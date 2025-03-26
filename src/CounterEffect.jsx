import { useEffect } from "react"
import Counter from "./Count"

function CounterEffect({ data, add }) {
    const handeleffect = () => {
        console.log('Handle effect called ')
    }

    const handeleadd = () => {
        console.log('Handle add called ')
    }
    // when you call one time only handeleffect call use useeffect 
    // useEffect(()=>{
    //     handeleffect();
    // },[])
    // all call this function

    //handeleadd() 
    // call only onet time call 
    // useEffect(()=>{

    // handeleadd() ;
    // },[])
    // only add butomm click then use effect
    // useEffect(()=>{

    //     handeleadd() ;
    //     },[add])
    //     // only counter butomm click then use effect
    // useEffect(()=>{

    //     handeleadd() ;
    //     },[data])
    // both state call props counter butomm click then use effect
    // useEffect(()=>{

    //     handeleadd() ;
    //     },[data,add])

    const Mountphase = () => {
        console.log('Mount phase called ')
    }
    const updatepahse = () => {
        console.log('Update phase called ')
    }
    
    useEffect(() => {

        Mountphase();
    }, [])
    useEffect(() => {

        updatepahse();
    }, [data])

    useEffect(() => {

        return () => {
            console.log('unmount pahse call')
        }


    }, [])


    return (
        <div>
            <h3>Counter compenets use useeffect solve</h3>
            <h3>Counter value  {data}</h3>
            <h3>add value  {add}</h3>
        </div>
    )
}
export default CounterEffect