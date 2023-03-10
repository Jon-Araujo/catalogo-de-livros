function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-0 mb-3">
            <div className="container-fluid bg-dark">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                        <a className="nav-link text-white" href="/Catalogo">Catálogo</a>
                        <a className="nav-link text-white" href="/Novo">Novo</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;