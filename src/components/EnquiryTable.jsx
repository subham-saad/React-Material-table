import * as React from 'react';
import Table from "@material-ui/core/Table";
import PropTypes from 'prop-types';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import TableContainer from '@material-ui/core/TableContainer';

import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        supplierName: 'Rajesh',
        quantity:4, 
        price:240,
        actions:'yes'

      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        supplierName: 'Rajesh',
        quantity:4, 
        price:240,
        actions:'Yes'

      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <span>Hide Details</span> : <span>Show Details</span>}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                <h3>Quote Details</h3>
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell><h5>Quote Recieved on</h5></TableCell>
                    <TableCell><h5>Status</h5></TableCell>
                    <TableCell><h5>Supplier Name</h5></TableCell>
                    <TableCell><h5>Quantity</h5></TableCell>
                    <TableCell><h5>Price</h5></TableCell>
                    <TableCell><h5>Actions</h5></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        <h5>{historyRow.date}</h5>
                      </TableCell>
                      <TableCell><h5>{historyRow.customerId}</h5></TableCell>
                      <TableCell ><h5>{historyRow.supplierName}</h5></TableCell>
                      <TableCell>
                       <h5>{Math.round(historyRow.quantity)}</h5> 
                      </TableCell>
                      <TableCell><h5>{historyRow.price}</h5></TableCell>
                      <TableCell>
                       <h5>{Math.round(historyRow.actions)}</h5> 
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        price: PropTypes.number.isRequired,
        actions:PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        supplierName: PropTypes.string.isRequired
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('12-10-2021', 'Fnd-120002', 'steel', 24),
  createData('12-10-2021', 'Fnd-120002', 'Iron rod', 37),
  createData('12-10-2021', 'Fnd-120002', 'Handle', 24),
  createData('12-10-2021', 'Fnd-120002', 'Hammer', 67),
  createData('12-10-2021', 'Fnd-120002', 'stainlessteel', 49),
];

export default function EnquiryTable() {
  return (
    <TableContainer component={Box}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell><h5>Enquiry Date</h5></TableCell>
            <TableCell align="right"><h5>Enquiry ID</h5></TableCell>
            <TableCell align="right"><h5>Item Name</h5></TableCell>
            <TableCell align="right"><h5>Quantity</h5></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}