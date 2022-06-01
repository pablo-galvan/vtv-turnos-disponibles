const { check, findDates } = require('../../../services');

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
  

function CheckPage({ dates }) {
  return <TableContainer component={Paper} sx={{ maxWidth: '90%' }}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Sucursal</TableCell>
          <TableCell align="right">Próxima fecha disponible</TableCell>
          <TableCell align="right">Siguiente fecha disponible</TableCell>
          <TableCell align="right">Siguiente fecha disponible</TableCell>
          <TableCell align="right">Siguiente fecha disponible</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dates.map((date) => (
          date.dates.length != 0 ?
            <TableRow
              key={date.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {date.name}
              </TableCell>
              <TableCell align="right">{date.dates[0]?.fecha}</TableCell>
              <TableCell align="right">{date.dates[1]?.fecha}</TableCell>
              <TableCell align="right">{date.dates[2]?.fecha}</TableCell>
              <TableCell align="right">{date.dates[3]?.fecha}</TableCell>
            </TableRow>
            : null
        ))}
      </TableBody>
    </Table>
  </TableContainer>
}

CheckPage.getInitialProps = async (context) => {
    const results = await check(context.query.domain);
    const dates = findDates(results);

    return { dates };
};

export default CheckPage