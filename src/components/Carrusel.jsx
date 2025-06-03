import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const Carrusel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="" />
          <div class="text-white carousel-caption d-none d-md-block">
            <h5 className="fs-2">Kung Fu Panda 4</h5>
            <p className="fs-5">"Po se prepara para ser el líder espiritual del Valle de la Paz, buscando un sucesor como Guerrero Dragón."</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="" />
          <div class="text-white carousel-caption d-none d-md-block">
            <h5 className="fs-2">Dune Parte dos</h5>
            <p className="fs-5">"Sigue el viaje mítico de Paul Atreides mientras se une a Chani y los Fremen en una guerra de venganza contra los conspiradores que destruyeron a su familia."</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="" />
          <div class=" text-white carousel-caption d-none d-md-block">
        <h3 className="fs-2">Godzilla y Kong: El nuevo imperio</h3>
        <p className="fs-5">"Una aventura cinematográfica completamente nueva, que enfrentará al todopoderoso Kong y al temible Godzilla contra una colosal."</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
      <hr />
    </div>


  )
}

export default Carrusel