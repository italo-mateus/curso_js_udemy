exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="post">
    nome do cliente: <input type="text" name="nome">
    <button> Enviar </button>
    </form>`);
};

