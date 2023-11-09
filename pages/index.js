import React, { useState } from "react";
import { Button, Card, Container, CardContent, Grid, TextField, Typography } from '@mui/material';

function HomePageV2() {
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
    window.location.href = `/check?domain=${domain}`;
  }

  const keyPress = (e) => {
    if(e.keyCode == 13){
       document.getElementsByTagName('button')[0].click();
    }
 }


  return (
    <Container maxWidth="sm" sx={{
      marginTop: '18%'
    }}>
      <Card>
        <CardContent>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="h1">Bienvenido!</Typography>
              <Typography variant="body1">Simplemente consultamos los turnos disponibles en 7 plantas verificadoras de Gran Buenos Aires.</Typography>
              <Typography variant="body1">Próximamente ampliaremos a más plantas y ordenadas por cercanía</Typography>
              <TextField
                id="outlined-required"
                label="Ingrese su dominio"
                defaultValue=""
                sx={{ marginTop: '20px'}}
                onChange={onChangeInput}
                onKeyDown={keyPress}
              />
            </Grid>
            <Grid item xs>
              {
                disabled ? <Button disabled>Revisar turnos</Button> : <Button variant="contained" onClick={handleClick}>Revisar turnos</Button>
              }
              
            </Grid>
            <a href="meli://webview/?&search_mode=collapsed&cart_mode=default&navigationcp_mode=default&bar_left_button_style=back&back_action=close&authentication_mode=required&loading_mode=true&title=Ofertas&use_web_title=false&webkit-engine=2&url=https%3A%2F%2Fwww.mercadolibre.com.ar%2Fofertasresto">Abrime la pagina de ofertas</a>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default HomePageV2