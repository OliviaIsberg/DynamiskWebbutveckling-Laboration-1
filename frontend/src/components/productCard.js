import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Box,
  ButtonGroup,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SyncSharpIcon from '@mui/icons-material/SyncSharp';

function ProductCard(props) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {props.product.title}
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <input type="text" value={props.product.title}></input>
        </Box>
        <Box>
          <img src={props.product.image} height="150" alt=""></img>
        </Box>
        <Box sx={{ marginBottom: '1rem' }}>
          <input type="text" value={props.product.description}></input>
        </Box>
        <Box sx={{ marginBottom: '1rem' }}>
          <input type="number" value={props.product.price}></input>
        </Box>
        <div>
          <ButtonGroup size="small" color="secondary" variant="outlined">
            <Button startIcon={<SaveIcon />}>Spara</Button>
            <Button startIcon={<SyncSharpIcon />}>Uppdatera</Button>
            <Button startIcon={<DeleteForeverIcon />}>Radera</Button>
          </ButtonGroup>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default ProductCard;
