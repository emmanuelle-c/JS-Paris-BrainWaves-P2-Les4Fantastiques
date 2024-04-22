
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import './Faq.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Faq() {
    
  return (
    <>
    <Header/>
    <div className='size'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='titre'>Quels super-héros sont disponibles à la location ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nous avons une équipe diversifiée de super-héros prêts à répondre à vos demandes. 
          De la force surhumaine à la maîtrise des éléments, en passant par la vitesse fulgurante et la télépathie, 
          nos héros ont une variété de compétences à votre service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='titre'>Comment fonctionne la location d'un super-héros ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          C'est simple ! Vous parcourez notre catalogue en ligne, choisissez le super-héros et le service désiré, 
          sélectionnez la date et l'heure qui vous conviennent, puis procédez au paiement sécurisé. 
          Votre super-héros sera alors prêt à intervenir selon vos besoins.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className='titre'>Quels super-héros sont disponibles à la location ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nous avons une équipe diversifiée de super-héros prêts à répondre à vos demandes. 
          De la force surhumaine à la maîtrise des éléments, en passant par la vitesse fulgurante et la télépathie, 
          nos héros ont une variété de compétences à votre service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className='titre'>Comment garantissez-vous la sécurité de vos clients lors des interventions ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          La sécurité de nos clients est notre priorité absolue. 
          Tous nos super-héros sont formés pour effectuer leurs tâches de manière professionnelle et sécurisée. 
          De plus, nous avons une assurance couvrant toutes les interventions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className='titre'>Puis-je demander un super-héros spécifique pour ma réservation ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Absolument ! Vous pouvez spécifier le super-héros que vous préférez lors de votre réservation, sous réserve de sa disponibilité. 
          Nous ferons de notre mieux pour répondre à votre demande.          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className='titre'>Quels sont les tarifs de location ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nos tarifs varient en fonction du service demandé, de la durée de l'intervention et du super-héros choisi. 
          Vous trouverez des détails sur les tarifs spécifiques sur notre site web.          
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <Footer />
    </>
  )
}

export default Faq