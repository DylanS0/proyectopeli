const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <img width="90" height="90" src="https://img.icons8.com/arcade/100/movie-projector.png" alt="movie-projector"/>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tienda</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Generos TV
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Seccion 1</a></li>
                                <li><a className="dropdown-item" href="#">Seccion 2</a></li>
                                <li><a className="dropdown-item" href="#">Seccion 3</a></li>
                            </ul>
                        </li>
                      <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Generos Cine
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Seccion 1</a></li>
                                <li><a className="dropdown-item" href="#">Seccion 2</a></li>
                                <li><a className="dropdown-item" href="#">Seccion 3</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header