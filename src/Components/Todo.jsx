// function Todo({task, isDone}){

//     return(
//         <>
//             <li> {isDone? 'Finished':'Work on' } : {task} </li>
//         </>
//     )
// }

// export default Todo;

// function Todo({task, isDone}){

//     return(
//         <>
//             <li> {task} {isDone && ': Done'} </li>
//         </>
//     )
// }

// export default Todo;

function Todo({task, isDone}){

    return(
        <>
            <li> {task} {isDone || ': Do it'} </li>
        </>
    )
}

export default Todo;
