import Portrait from '../../assets/portrait.jpg'

const Frontpage = () => {
    return (
        <main className='page front'>
            <div >
                <p>
                    <b>LUKKET FOR TILGANG: </b>
                    <br/>
                    På grund af travlhed har jeg desværre lukket for tilgang. <br/>
                    For klienter uden henvisning og klienter der søger EMDR behandling, har jeg enkelte ledige tider. <br/>
                    Jeg opererer ikke med venteliste.
                </p>
                {/* <p>
                    <b>CORONA:</b>
                    <br/>
                    Jeg overholder alle coronaforskrifter. Vi sidder med 2 meters afstand fra hinanden og jeg har håndsprit i både venteværelse og i klinikken. Jeg lufter ud efter hver samtale og spritter møbler af. Pr 29.11.21 skal du bære mundbind, når du kommer ind i klinikken. Jeg skal ligeledes bære mundbind.
                </p> */}
                <p>
                    <b>OM MIG:</b>
                    <br/>
                    Jeg er født i 1963 og har været uddannet cand. psych. siden 1991. Jeg har primært arbejdet med sundhedspsykologi og almenpsykologiske problemstillinger:
                </p>
                <ul>
                    <li>Cancer-patienter samt disses pårørende</li>
                    <li>Stress-relaterede tilstande</li>
                    <li>Angst og depression</li>
                    <li>Kriseramte og traumatiserede patienter</li>
                    <li>Arbejdspsykologiske problemstillinger</li>
                    <li>Dødsfald</li>
                    <li>Skilsmisse</li>
                </ul>
                <p>
                    Herudover har jeg en PhD-grad i interventionsforskning, hvor jeg i et randomiseret design har undersøgt effekten af patientundervisning og gruppeterapi med cancerpatienter. Jeg har flere efteruddannelsesforløb indenfor systemisk/narrativ terapi, kognitiv-adfærds terapi, psykodynamisk gruppeterapi, Mindfulness, Compassion-fokuseret terapi, EMDR-psykoterapi, som er en effektiv traumebehandling (læs mere på&nbsp;
                    <a href='https://www.emdr.dk/'>emdr.dk</a>
                    ) samt diverse kurser i afspænding, visualisering og kriseintervention. Jeg modtager voksne fra 18 år og par.
                </p>
                <p>
                    Jeg samarbejder med Thauer Stresscenter, hvor jeg er konsulent for centret i forbindelse med udredning af centrets klienter for angst og depression. Herudover underviser jeg på Thauer Stresscenters uddannelse til stressekspert (
                    <a href='https://thauer.dk/'>thauer.dk</a>
                    ). 
                </p>
            </div>
            <div className='portrait'>
                <img src={Portrait} alt="portræt" width='100%'/>
            </div>
        </main>
    )
}

export default Frontpage;