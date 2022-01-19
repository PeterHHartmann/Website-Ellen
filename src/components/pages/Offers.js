
const Offers = ({currentPage}) => {
    if (currentPage === 2) {
        return (
            <div className='page'>
                <p>
                    <strong>Individuel terapi</strong>
                    <br/>
                    Jeg har overenskomst med Sygesikringen. Det betyder, at jeg modtager personer, som er blevet henvist fra egen læge til psykologsamtaler og hvor sygesikringen dækker 2/3 af udgiften til samtalerne. Jeg modtager også personer, som ikke kan få dækket udgiften af Sygesikringen. Alle er velkomne til at henvende sig for psykologiske samtaler, en eller flere alt efter behov.
                </p>
                <p>
                    <strong>Parterapi</strong>
                    <br/>
                    Jeg tilbyder også parterapi, hvor du og din partner kan få støtte til at afklare jeres problemstilling.
                </p>
                <p>
                    <strong>Gruppeterapi</strong>
                    <br/>
                    Hvis det er muligt at etablere en gruppe til gruppeterapeutiske samtaler, som jeg har stor erfaring med, vil jeg gøre det. Det kan være udviklingsgrupper, dvs. terapi, der har til hensigt at øge selvindsigt og selvudvikling, eller temagrupper, hvor personerne i gruppen har samme problemstilling, f.eks. alvorlig livstruende eller kronisk invaliderende sygdom. Når der er tilslutning, laver jeg gruppeforløb i Compassion-fokuseret terapi og Mindfulness. Se selvstændig menu-punkt.
                </p>
                <p>
                    <strong>For professionelle</strong>
                    <br/>
                    Jeg tilbyder supervision/vejledning til sygehuspersonale, som har med somatiske patienter at gøre. Jeg kommer gerne ud på afdelingen og giver vejledningen, eller personalet kan komme i min praksis. Ofte er det mindst tidskrævende for personalet, at jeg kommer til dem.
                </p>
                <p>
                    <strong>For firmaer</strong>
                    <br/>
                    I min egenskab af tidligere konsulent i forskellige kriseberedskab, har jeg løst mange forskelligartede opgaver for forskellige firmaer. Hvis dit firma har brug for psykologisk bistand i forbindelse med medarbejderes arbejdsrelaterede eller personlige problemer, kan jeg konsulteres. Jeg kommer gerne ud i virksomheden eller medarbejderen kan komme i praksis. Coaching til ledere eller mellemledere er også et arbejdsområde, jeg varetager.
                </p>
            </div>
        )
    }
    return null
}

export default Offers