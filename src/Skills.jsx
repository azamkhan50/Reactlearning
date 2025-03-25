import { useState } from "react";

function Skills() {
    const [skills, setSkills] = useState([]);

    const handleSkill = (event) => {
        console.log(event.target.value); // Corrected typo here

        if (event.target.checked) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((item) => item !== event.target.value));
        }
    };

    return (
        <div>
            
            <h1>Select your skills</h1>
            
            <input onChange={handleSkill} type="checkbox" id="php" value="php" defaultChecked />
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input onChange={handleSkill} type="checkbox" id="dart" value="dart" />
            <label htmlFor="dart">Dart</label> 
            <br />
            <br />
            <input onChange={handleSkill} type="checkbox" id="js" value="js" />
            <label htmlFor="js">JS</label>
            <br />
            <br />
            <input onChange={handleSkill} type="checkbox" id="node" value="node" />
            <label htmlFor="node">Node</label> 
            <br />
            <br /> 
            <h3>{skills.toString()}</h3>
        </div>
    );
}

export default Skills;



// import { useState } from "react"

// function Skills(){
//     const [skills, setskill]= useState(['php','java']);

//     const handelskill=(event)=>{
//         console.log(event.traget.value);
//         // if(event.traget.checked){
//         //     setskill([...skills,event.traget.value])
//         // }else{
//         //     setskill([...skills.filter((item)=>item!=skill.event.value)])
//         // }
//     }
//     return(
       
//         <div>
//             <h3>{skills.toString() }</h3>
//             <h1>Select your skills </h1>
//             <input onChange={handelskill} type="checkbox" id="php" value="php" />
//             <label htmlFor="php">PHP</label>
//             <br />
//             <br />
//            {/* <input onChange={handelskill} type="checkbox" id="dart" value="dart" />
//             <label htmlFor="dart">Dart</label> 
//             <br />
//             <br />
//             <input onChange={handelskill} type="checkbox" id="js" value="js" />
//             <label htmlFor="js">JS</label>
//             <br />
//             <br />
//             <input onChange={handelskill} type="checkbox" id="node" value="node" />
//             <label htmlFor="node">Node</label>  */}
            
//         </div>
//     )
// }
// export default Skills