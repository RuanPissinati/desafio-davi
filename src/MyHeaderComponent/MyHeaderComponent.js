import "./style.css"

function MyHeaderComponent({title,list,image}){
    return (
        <header className="my-header">
            <h1>{title}</h1>
            <ul className="my-header">
                {
                    list.map((value, index)=>{
                        return <li key={index}>{value}</li>
                    })
                }
            </ul>
            <img className="image" src={image} alt="Minha imagem do header"/>
        </header>
    );

}
export default MyHeaderComponent;