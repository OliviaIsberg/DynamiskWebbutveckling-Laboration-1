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
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useReducer } from 'react';

function editProductReducer(state, action) {
  console.log(action.type);
  console.log(action);

  switch (action.type) {
    case 'change':
      return { ...state, [action.payload.key]: action.payload.value };
    case 'save':
      fetch('/api/products/' + state.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      }).then((response) => {
        console.log(response);
        action.payload.getProducts();
      });
      return state;
    case 'reset':
      return state;
    case 'delete':
      return state;
    case 'update':
      return state;
    default:
      throw new Error();
  }
}

function ProductCard(props) {
  const [state, dispatch] = useReducer(editProductReducer, {
    ...props.product,
  });

  return (
    <Accordion>
      <AccordionSummary
        sx={{ display: 'flex', justifyContent: 'space-between' }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Box sx={{ flexGrow: 1 }}>{props.product.name}</Box>
        <Box>
          <Button startIcon={<SyncSharpIcon />}>Uppdatera</Button>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
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
          <ButtonGroup size="small" color="secondary" variant="outlined">
            <Button
              onClick={() =>
                dispatch({
                  type: 'save',
                  payload: { getProducts: props.getProducts },
                })
              }
              startIcon={<SaveIcon />}
            >
              Spara
            </Button>
            <Button startIcon={<RestartAltIcon />}>Återställ</Button>
            <Button startIcon={<DeleteForeverIcon />}>Radera</Button>
          </ButtonGroup>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default ProductCard;
