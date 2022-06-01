import React, { useState } from "react";
import { Button, Card, Container, CardContent, Grid, TextField, Typography } from '@mui/material';


export default function HomePageV2() {
  const [ disabled, setDisabled ] = useState(true);
  const [ domain, setDomain ] = useState();

  const onChangeInput = (event) => {
    const value = event.target.value;
    if (value.length < 6) {
      setDisabled(true);
    }
    if (value.length >= 6) {
      setDisabled(false);
      setDomain(value);
    }
  }

  const handleClick = () => {
    window.location.href = `/v2/check?domain=${domain}`;
  }

  return (
    <Container maxWidth="sm" sx={{
      marginTop: '30%'
    }}>
      <Card>
        <CardContent>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="h1">Bienvenido!</Typography>
              <TextField
                id="outlined-required"
                label="Ingrese su dominio"
                defaultValue=""
                sx={{ marginTop: '20px'}}
                onChange={onChangeInput}
              />
            </Grid>
            <Grid item xs>
              {
                disabled ? <Button disabled>Revisar turnos</Button> : <Button variant="contained" onClick={handleClick}>Revisar turnos</Button>
              }
              
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}