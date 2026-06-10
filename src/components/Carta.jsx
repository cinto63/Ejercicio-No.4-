const Carta = ({ nombre, rol = "No asignado", actividad = "Desconocido" }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
            <h2>{nombre}</h2>
            <p>Rol: {rol}</p>
            <p>Estado: {actividad}</p>
        </div>
    );
};

export default Carta;