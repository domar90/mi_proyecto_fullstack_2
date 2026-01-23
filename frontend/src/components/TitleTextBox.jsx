export default function TitleTextBox({title}) {
    return (
        <div>
            <h2>{title}</h2>
            <input type="text" placeholder="Escribe el título aquí..." />
        </div>
    )
}