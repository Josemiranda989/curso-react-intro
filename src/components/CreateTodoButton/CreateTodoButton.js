import './CreateTodoButton.css'



export function CreateTodoButton() {
    return (
        <button className="CreateTodoButton"
            onClick={(e) => {
                console.log('Cliqueaste el boton')
                console.log(e.target)
            }}
        >
            +
        </button>
    );
}