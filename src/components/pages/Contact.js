import Flowers from '../../assets/flowers.jpg'

const Contact = ({currentPage}) => {
    if (currentPage === 6) {
        return (
            <div className='split-page'>
                <div className='contact'>
                    <h1>Kontakt</h1>
                    <p>
                        <u>Psykologisk Praksis</u>
                        <br/>
                        Borupvang 3C
                        <br/>
                        2750 Ballerup
                        <br/>
                        ______________________________________________
                    </p>
                    <p>
                        Gode parkeringsmuligheder
                        <br/>
                        10 minutters gang fra tog- og busstationen
                        <br/>
                        Adgang for kørestolsbrugere
                        <br/>
                        ______________________________________________
                    </p>
                    <p>
                        Tlf.: 51846966
                        <br/>
                        CVRnr.: 28644000
                        <br/>
                        Email: <a href='mailto:ellenboesen@gmail.com'>ellenboesen@gmail.com</a>
                    </p>
                    <a href='https://www.google.dk/maps?q=Borupvang+3C,2750;z%3D17'
                        onClick={(e) => {
                            e.preventDefault()
                            window.open('http://maps.google.dk/maps?q=Borupvang 3C,2750;z=17','','width=900,height=700');
                            return false;
                        }}>
                            Se klinikken på Google Maps
                    </a>
                </div>
                <div>
                    <img src={Flowers} alt='decorative flowers' width='100%'/>
                </div>
            </div>
        )
    }
    return null;
}

export default Contact;