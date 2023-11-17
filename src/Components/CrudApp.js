import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CreateTwoTone,
  DoneOutlineTwoTone,
  HighlightOffTwoTone,
  SwapVerticalCircleTwoTone,
  VisibilityTwoTone,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserById, getUserFetch, getUserbyId,getUserbyName } from "../Actions/action";
import UpdateAndCreate from "./updateAndCreate";
import Close from "@mui/icons-material/Close";
import useHideOnClick from "../CustomHooks/useHideOnClick";

const CrudApp = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const userByid = useSelector((state) => state.userReducerById.userById);
  const deleteById = useSelector((state) => state.deleteReducerById.deleteById);
  const userName = useSelector((state) => state.userReducerByName.userbyName);
  console.log("userBYNAME:-",userName)

  const [isCreateMode, setCreateMode] = useState(false);
  const [isUpdateMode, setUpdateMode] = useState(false);

  const [updateUserId, setUpdateUserId] = useState("");
  const { isHidden, handleClick } = useHideOnClick();
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    dispatch(getUserFetch());
  }, [dispatch]);

 

  const handleCreate = () => {
    setCreateMode(true);
    setUpdateMode(false);
    
  };

  const handleUpdate = (id) => {
    setCreateMode(false);
    setUpdateMode(true);
    setUpdateUserId(id);

  };

  const handleDelete = (id) => {

    dispatch(deleteUserById(id));
    
  };

  const handleReadById = async (id) => {
    await dispatch(getUserbyId(id));
  };
  useEffect(() => {
    if (deleteById === "User deleted") {
      alert("Deleted Successfully");
      window.location.reload();
      dispatch(getUserFetch());
    }
  }, [deleteById, dispatch]);
  
  
  const handleSearch = async () => {
    
      const res= dispatch(getUserbyName(searchName));
      console.log ('respose:-',res)
    
  };


  return (
    <div>
       <div>
      <Typography variant="subtitle1">Find User by Name:</Typography>
      <Paper
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <InputBase
          name="userName"
          placeholder="Enter username"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <IconButton type="submit" color="inherit">
          <SearchIcon color="secondary" />
        </IconButton>
      </Paper>
    </div>

      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleCreate}>
            Create . <DoneOutlineTwoTone color="secondary"/>
          </IconButton>
          <IconButton  onClick={() => dispatch(getUserFetch())}>
            Fetch user . <SwapVerticalCircleTwoTone color="secondary"/>
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <Paper
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              const userId = e.target.elements.userId.value;
              handleReadById(userId);
            }}
          >
            <InputBase name="userId" placeholder="Enter user ID" />
            <IconButton type="submit" color="inherit">
              <SearchIcon color="secondary" />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>

      <Dialog open={isCreateMode || isUpdateMode}>
  <div style={{ position:"fixed",top:'2px', right:"19rem" , borderStyle: "inset", borderColor:"red"}}>
    <IconButton
      style={{ color: 'red' }}
      color="inherit"
      onClick={() => (isCreateMode ? setCreateMode(false) : setUpdateMode(false))}
    >
      <Close />
    </IconButton>
  </div>

  <UpdateAndCreate userId={updateUserId} />
</Dialog>


      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ background: "Gray" ,color: "#0B7A11" }}>
            <TableRow >
              <TableCell >ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>ROLE</TableCell>
              <TableCell>TEAM</TableCell>
              <TableCell align="right">AVATAR</TableCell>
              <TableCell align="center">CONTROLS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {user?.map((user) => (
              <TableRow key={user.id} >

                <TableCell >{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.team}</TableCell>
                <TableCell>
                <Button onClick={handleClick} style={ isHidden ?{ color: "#0B7A11" }:{ color: "#FF5733" ,left:"55px"}}>
        {" "}
        {isHidden ? <VisibilityTwoTone /> : <HighlightOffTwoTone />}{" "}
      </Button>

      {isHidden ? null : (
                  <Card>
                    <CardMedia
                      component="img"
                      alt={user.username}
                      height="auto"
                      image={user.avatar}
                      sx={{ position: "relative" }}
                    />
                  </Card>
      )}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleUpdate(user.id)}style={ { color: "#0B7A11" }}>
                    <CreateTwoTone color="secondary"/>
                    Updata
                  </IconButton>
                  <IconButton onClick={() => handleDelete(user.id)} style={ { color: "#FF5733" }}>
                    <DeleteIcon color="secondary"/>
                    Delete
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <Typography variant="subtitle1">Employee Found:-</Typography>
        <Card sx={{ width: "20%", color: "GrayText" }}>
          <CardContent>
            <h4>{userByid.username}</h4>
            <Typography>
              {" "}
              is a {userByid.role} from {userByid.team}{" "}
            </Typography>
            <CardMedia
              component="img"
              alt={userByid.username}
              height="auto"
              image={userByid.avatar}
              sx={{ position: "relative" }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CrudApp;
