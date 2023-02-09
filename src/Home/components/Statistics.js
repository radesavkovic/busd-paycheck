import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";

const CardWrapper = styled(Card)(({ theme }) => ({
  // border: "1px solid #cfb1fb",
  background: theme.palette.text.darkBgColor,
  marginTop: "30px",
  marginBottom: "30px"
}));

export default function Statistics() {
  return (
    <CardWrapper>
      <CardContent sx={{ p: 3 }}>
        <Typography sx={{ mb: 1 }} variant="body1">
          STATISTICS:
        </Typography>
        <Divider sx={{ mb: 2 }} style={{color: "#fff", height: 2}}></Divider>
        <Grid container columnSpacing={3}>
          <Grid item md={5} xs={12}>
            <Box component="div" sx={{ width: "100%" }}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" color="primary" gutterBottom>
                    Weekly Return
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    12.7%
                  </Typography>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" color="primary" gutterBottom>
                    APR
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    662.21%
                  </Typography>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" color="primary" gutterBottom>
                    Minimum Deposit
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    10 BUSD
                  </Typography>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" color="primary" gutterBottom>
                    Max Deposit
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    10,000 BUSD
                  </Typography>
                </Grid>
            </Box>
          </Grid>
          <Grid item md={0.5} xs={12}></Grid>
          <Grid item md={6.5} xs={12}>
            <Box component="div" sx={{ width: "100%" }}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" color="primary" gutterBottom>
                    Deposit Fee
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    5% (5% DEV)
                  </Typography>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" color="primary" gutterBottom>
                    Withdraw Fee
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    7% (2% TVL 5% DEV)
                  </Typography>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" color="primary" gutterBottom>
                    Compound Fee
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    0%
                  </Typography>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" color="primary" gutterBottom>
                    Referral Collect Fee
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    0%
                  </Typography>
                </Grid>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </CardWrapper>
  );
}
