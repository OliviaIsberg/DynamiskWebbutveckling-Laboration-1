import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Box,
  ButtonGroup,
  Chip,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SyncSharpIcon from '@mui/icons-material/SyncSharp';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useEffect, useReducer } from 'react';

function editProductReducer(state, action) {
  switch (action.type) {
    case 'change':
      return { ...state, [action.payload.key]: action.payload.value };

    case 'update':
      return { ...action.payload.state };

    default:
      throw new Error();
  }
}

function ProductAccordion(props) {
  const [state, dispatch] = useReducer(editProductReducer, {
    ...props.product,
  });

  const isEdited = Object.entries(props.product).some(
    ([key, value]) => state[key] !== value
  );

  useEffect(() => {
    dispatch({ type: 'update', payload: { state: props.product } });
  }, [props.product]);

  return (
    <Accordion expanded={props.expanded}>
      <AccordionSummary
        sx={{ display: 'flex', justifyContent: 'space-between' }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Box sx={{ flexGrow: 1 }}>{state.name}</Box>
        {isEdited ? <Chip label="OSPARAD" variant="outlined" /> : null}
        {props.updateProduct !== undefined ? (
          <Button
            onClick={() => props.updateProduct(state.id)}
            startIcon={<SyncSharpIcon />}
          >
            Uppdatera
          </Button>
        ) : null}
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Typography variant="subtitle2">Titel</Typography>
          <input
            onChange={(e) =>
              dispatch({
                type: 'change',
                payload: { key: 'name', value: e.target.value },
              })
            }
            type="text"
            value={state.name}
          ></input>
        </Box>
        <Box>
          <img src={state.image} height="150" alt=""></img>
        </Box>
        <Box sx={{ marginBottom: '1rem' }}>
          <Typography variant="subtitle2">Bild URL</Typography>
          <input
            onChange={(e) =>
              dispatch({
                type: 'change',
                payload: { key: 'image', value: e.target.value },
              })
            }
            type="text"
            value={state.image}
          ></input>
        </Box>

        <Box sx={{ marginBottom: '1rem' }}>
          <Typography variant="subtitle2">Pris</Typography>
          <input
            onChange={(e) =>
              dispatch({
                type: 'change',
                payload: { key: 'price', value: e.target.value },
              })
            }
            type="number"
            value={state.price}
          ></input>
        </Box>
        <div>
          <ButtonGroup
            sx={{
              '@media screen and (max-width: 440px)': {
                flexDirection: 'column',
              },
            }}
            size="small"
            color="secondary"
            variant="outlined"
          >
            <Button
              disabled={!isEdited}
              onClick={() => props.saveProduct(state)}
              startIcon={<SaveIcon />}
            >
              Spara
            </Button>
            <Button
              disabled={!isEdited}
              onClick={() => {
                dispatch({ type: 'update', payload: { state: props.product } });
              }}
              startIcon={<RestartAltIcon />}
            >
              Återställ
            </Button>
            <Button
              onClick={() => props.deleteProduct(state.id)}
              startIcon={<DeleteForeverIcon />}
            >
              Radera
            </Button>
          </ButtonGroup>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default ProductAccordion;
