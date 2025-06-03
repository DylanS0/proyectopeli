import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import whatsapp from '../assets/whatsapp.svg'


const Footer = () => {
    return (


        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> <div className="col-md-4 d-flex align-items-center"> <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap"> <svg className="bi" width={30} height={24} aria-hidden="true"><use xlinkHref="#bootstrap" /></svg> </a> <span className="mb-3 mb-md-0 text-body-secondary">© 2025 Company, Inc</span> </div> <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"> <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Instagram"><svg className="bi" width={24} height={24} aria-hidden="true"><use xlinkHref="#instagram" /></svg></a>

            <div className="justify-content-between align-items-center py-3 my-4"> 
            <a href="#"><img src={facebook} alt=""  width={50}/></a>
            <a href="#"><img src={instagram} alt="" width={50}/></a>
            <a href="#"><img src={whatsapp} alt=""  width={50}/></a>
            </div>

            </li> <li className="ms-3"><a className="text-body-secondary" href="#" aria-label="Facebook"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li> </ul> </footer>





    )
}

export default Footer