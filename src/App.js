import React from 'react';
import { makeStyles, useTheme, Drawer, Paper, Card, Button, CardContent, CardMedia, CssBaseline, AppBar, Toolbar, Typography, Divider, MenuList, MenuItem, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import clsx from 'clsx';
import songImg from './SongCreator.PNG';
import montyImg from './PyMonty.PNG';
import rubricImg from './Rubric.PNG';
import data from './text.json';

//TODO
// Implement JSON
// Drawer looks empty
// Custom themeing
// Same height for all paper elements
// Improve animation (Hover over image text)
// Clean Style Sheet
// Clean import
// Learn more clsx

const drawerWidth = 240;
const courseText = data.Courses;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  paper: {
    minWidth: theme.spacing(60),
    maxWidth: theme.spacing(60),
    minHeight: theme.spacing(25),
  }
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
              <MenuItem component={Link} to="/">Home</MenuItem>
              <MenuItem component={Link} to="/Courses">Courses</MenuItem>
              <MenuItem component={Link} to="/Jobs">Jobs</MenuItem>
              <MenuItem component={Link} to="/Projects">Projects</MenuItem>
            </MenuList>
          </div>

        </Drawer>
        <main className={clsx(classes.content, { [classes.contentShift]: open, })}>
          <div className={classes.drawerHeader} />
          <Switch>

            <Route path="/Projects">
              <Typography variant="h3" align="center"> Courses </Typography>

              <div style={{ padding: 25, }} />

              <div className="flex_wrapper">
                <Card>
                  <CardContent>
                    <Typography variant="h3"> Song Creator </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography> A simple python app that combines lyrics from a band. </Typography>
                  </CardContent>
                  <CardMedia style={{ height: 0, paddingTop: '56%' }} image={songImg}
                    title="The project revolved around a bet I had with a friend that every Steely Dan song sounded the same.
                  To prove this, I got the lyrics from 15 of their songs and mashed them together. The result was undeniable,
                  It could be a song from their new album. I took this further though, having it automatically find and scrape lyrics from Genius.com,
                  then combine those lyrics into a small song. One of my favorite projects that I made." />
                  <CardContent>
                    <Button href="https://github.com/beb115/Song-Master" target="_blank" color="primary"> Link To Project </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography variant="h3"> PyMonty </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography> A simple python app that tests the Monty Hall Problem. </Typography>
                  </CardContent>
                  <CardMedia style={{ height: 0, paddingTop: '56%' }} image={montyImg}
                    title="This project was created because my instructor (Mr. Szydlowski) and I got into an argument
                  about the Monty Hall problem. If you are unaware of the problem I encourage you to research it.
                  No matter how many times I explained it to my instructor, he refused to believe me so I created
                  a program to prove him wrong. The program plays the game a set number of times (I have it set to 10,000)
                  and logs how many times you win, and lose. The program proved that you have a 66%
                  chance of winning if you switch every time. " />
                  <CardContent>
                    <Button href="https://github.com/beb115/PyMonty" target="_blank" color="primary"> Link To Project </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography variant="h3"> Web Rubric </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography> One of my first projects, grades students on Evidence of Learning standards. </Typography>
                  </CardContent>
                  <CardMedia style={{ height: 0, paddingTop: '56%' }} image={rubricImg}
                    title="This project was created because I saw classmates that were working their absolute hardest but weren't
                  finishing their work on time. I thought that there should be some sort of way to reward students for their hard work,
                  after consulting with my instructor we decided that a web-based rubric using our school's evidence of learning
                  standards was the way to go. This was one of my first projects, and I had only been coding for a couple of months.
                  Just over one year ago I finalized this application, and am amazed at how much further I have come since. " />
                  <CardContent>
                    <Button href="https://github.com/beb115/Rubric-Frontend" target="_blank" color="primary"> Link To Project </Button>
                  </CardContent>
                </Card>
              </div>


            </Route>

            <Route path="/Jobs">
              <Typography variant="h3" align="center"> Jobs </Typography>

              <div style={{ padding: 25, }} />

              <div className="flex_wrapper">
                <Paper className={classes.paper} elevation={5}>
                  <Typography variant="h3" align="center" style={{ marginBottom: 15, marginTop: 10 }}> Google, CEO </Typography>
                  <Typography paragraph style={{ padding: theme.spacing(0, 2), }} >
                    During my time as CEO of Google, I decided to take all of the convenient styles we had created and redo them,
                    though it was a controversial choice I think it was the right one. Many projects that I started, Google Glass,
                    Google Car, Loon, and Stadia all failed magnificently! This does not matter however because I made so much money harvesting your data.
                    Projects like Golang, Dart, Material.io, and other good uses of googles time and money I had no part of.
                  </Typography>
                </Paper>

                <Paper className={classes.paper} elevation={5}>
                  <Typography variant="h3" align="center" style={{ marginBottom: 15, marginTop: 10 }}> Open AI, Senior Dev </Typography>
                  <Typography paragraph style={{ padding: theme.spacing(0, 2), }} >
                    My time at Open AI was exciting! We set out to make a superintelligent AI that would destroy the world, and succeeded!
                    Why have you never heard of it? A good question that I refuse to answer. Open AI taught me everything I needed to know about machine learning
                    and how to kill it in a catastrophic breach of security. Let's hope that never happens again...
                  </Typography>
                </Paper>

                <Paper className={classes.paper} elevation={5}>
                  <Typography variant="h3" align="center" style={{ marginBottom: 15, marginTop: 10 }}> Spotify, Ad Sales </Typography>
                  <Typography paragraph style={{ padding: theme.spacing(0, 2), }} >
                    You know when you're listening to Spotify, and instead of playing you a song, you get a loud ad? That was me!
                    My team and I decided to make the ad as jarring and loud as possible, and for it to play at the least convenient time for the user.
                    I think we succeeded on that front, and I am so proud of what I was able to develop.
                  </Typography>
                </Paper>
              </div>
            </Route>

            <Route path="/Courses">

              <Typography variant="h3" align="center"> Courses </Typography>

              <div style={{ padding: 25, }} />

              <div className="flex_wrapper">
                <Paper className={classes.paper} elevation={5}>
                  <Typography variant="h3" align="center" style={{ marginBottom: 15, marginTop: 10 }}> Intro to Programming </Typography>
                  <Typography paragraph style={{ padding: theme.spacing(0, 2), }} >
                    Intro to programming gave me the needed basics to startprogramming in many different languages. Intro to programming
                    went over the basic ideas of programming such as data types, conditional statements, formatting,
                    data validation and other topics. Made it easier to jump into other programming languages faster.
                  </Typography>
                </Paper>

                <Paper className={classes.paper} elevation={5}>
                  <Typography variant="h3" align="center" style={{ marginBottom: 15, marginTop: 10 }}> Web Dev with React </Typography>
                  <Typography paragraph style={{ padding: theme.spacing(0, 2), }} >
                    Web Dev with React taught me how to take my Javascript code to the next level.
                    React is a popular front-end web framework with many great libraries.
                    React had a significant learning curve and was very frustrating to learn, however, I am a better programmer for knowing it.
                  </Typography>
                </Paper>

                <Paper className={classes.paper} elevation={5}>
                  <Typography variant="h3" align="center" style={{ marginBottom: 15, marginTop: 10 }}> Intro to UI / UX </Typography>
                  <Typography paragraph style={{ padding: theme.spacing(0, 2), }} >
                    Intro to UI / UX taught me how to make interesting and simple User Interfaces using a React Library called Material-UI.
                    Material-UI takes Googles web development ideals and creates easy to use code to implement it into your website.
                    Intro to UI / UX has helped make my website much more interesting and colorful.
                  </Typography>
                </Paper>
              </div>
            </Route>

            <Route path="/">
              <Typography variant="h3" align="center"> Welcome to my Portfolio! </Typography>

              <div style={{ padding: 25, }} />

              <div className="flex_wrapper">
                <Paper className={classes.paper} elevation={5}>
                  <Typography variant="h3" align="center" style={{ marginBottom: 15, marginTop: 10 }}> Skills </Typography>
                  <Typography paragraph style={{ padding: theme.spacing(0, 2), }} >
                    I am skilled in multiple programming languages, including Python, Javascript, Java, Lua, C#, C++, SQL, and HTML/CSS.
                    I have experience making CLI, GUI and Web Applications connected to a Database. I have experience with many different
                    Frameworks and libraries such as React, Flask, Numpy, Pandas, and Material-UI.
                  </Typography>
                </Paper>

                <Paper className={classes.paper} elevation={5}>
                  <Typography variant="h3" align="center" style={{ marginBottom: 15, marginTop: 10 }}> Contact Info </Typography>
                  <Typography paragraph style={{ padding: theme.spacing(0, 2), }} >
                    Feel free to contact me by email, robert.walling@cthss.org, or by phone at 860-391-7323
                  </Typography>
                </Paper>
              </div>
            </Route>
          </Switch>
        </main>
      </Router>
    </div >
  );
}