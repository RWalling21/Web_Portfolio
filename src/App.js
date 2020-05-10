import React from 'react';
import { makeStyles, useTheme, Drawer, Paper, Card, Button, CardContent, CardMedia, CssBaseline, AppBar, Toolbar, Typography, Divider, MenuList, MenuItem, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import clsx from 'clsx';
import songImg from './img/SongCreator.PNG';
import montyImg from './img/PyMonty.PNG';
import rubricImg from './img/Rubric.PNG';
import data from './text.json';

const drawerWidth = 240;
const imgArray = [songImg, montyImg, rubricImg]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  paper: {
    minWidth: theme.spacing(60),
    maxWidth: theme.spacing(60),
    minHeight: theme.spacing(25),
    height: "100%",
  },

  paddingBox: {
    padding: 25,
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  menuItem: {
    fontSize: 20,
  },

  hide: {
    display: 'none',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },

  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const DrawerOpen = () => {
    setOpen(true);
  };

  const DrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>

        <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" onClick={DrawerOpen} edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Robert Walling Portfolio
          </Typography>
          </Toolbar>
        </AppBar>

        <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper, }}>

          <div className={classes.drawerHeader}>
            <IconButton onClick={DrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <Divider />

          <div>
            <MenuList>
              <MenuItem className={classes.menuItem} component={Link} to="/">Home</MenuItem>
              <MenuItem className={classes.menuItem} component={Link} to="/Courses">Courses</MenuItem>
              <MenuItem className={classes.menuItem} component={Link} to="/Jobs">Jobs</MenuItem>
              <MenuItem className={classes.menuItem} component={Link} to="/Projects">Projects</MenuItem>
            </MenuList>
          </div>

        </Drawer>
        <main className={clsx(classes.content, { [classes.contentShift]: open, })}>
          <div className={classes.drawerHeader} />
          <Switch>

            <Route path="/Projects">
              <Typography variant="h3" align="center"> Projects </Typography>

              <div className={classes.paddingBox} />

              <div className="flex_wrapper">
                {data.Projects.map((project, i) => {
                  return (
                    <Card className={classes.card} key={i} elevation={5}>
                      <CardContent>
                        <Typography variant="h3" align="center"> {project.Name} </Typography>
                      </CardContent>
                      <CardContent>
                        <Typography> {project.ShortSummary} </Typography>
                      </CardContent>
                      <CardMedia style={{ height: 0, paddingTop: '60%' }} image={imgArray[i]} title={project.LongSummary} />
                      <CardContent>
                        <Button href={project.ProjectLink} target="_blank" color="secondary"> Link To Project </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </Route>

            <Route path="/Jobs">
              <Typography variant="h3" align="center"> Jobs </Typography>

              <div className={classes.paddingBox} />

              <div className="flex_wrapper">
                {data.Jobs.map((job, i) => {
                  return (
                    <Paper key={i} className={classes.paper} elevation={5}>
                      <Typography variant="h3" align="center" style={{ marginBottom: 15, marginTop: 10 }}> {job.Name} </Typography>
                      <Typography paragraph style={{ padding: theme.spacing(0, 2), }}> {job.Description} </Typography>
                    </Paper>
                  )
                })}
              </div>
            </Route>

            <Route path="/Courses">
              <Typography variant="h3" align="center"> Courses </Typography>

              <div className={classes.paddingBox} />

              <div className="flex_wrapper">
                {data.Courses.map((course, i) => {
                  return (
                    <Paper key={i} className={classes.paper} elevation={5}>
                      <Typography variant="h3" align="center" style={{ marginBottom: 15, marginTop: 10 }}> {course.Name} </Typography>
                      <Typography paragraph style={{ padding: theme.spacing(0, 2), }}> {course.Description} </Typography>
                    </Paper>
                  )
                })}
              </div>
            </Route>

            <Route path="/">
              <Typography variant="h3" align="center"> Robert Walling Portfolio </Typography>

              <div className={classes.paddingBox} />

              <div className="flex_wrapper">
                {data.Home.map((content, i) => {
                  return (
                    <Paper key={i} className={classes.paper} elevation={5}>
                      <Typography variant="h3" align="center" style={{ marginBottom: 15, marginTop: 10 }}> {content.Name} </Typography>
                      <Typography paragraph style={{ padding: theme.spacing(0, 2), }}> {content.Description} </Typography>
                    </Paper>
                  )
                })}
              </div>
            </Route>
          </Switch>
        </main>
      </Router>
    </div >
  );
}