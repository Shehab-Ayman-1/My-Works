// React
import React, { useState } from "react";
import "./post.scss";

// Component
import Form from "../../form/form";

// Redux
import { useDispatch } from "react-redux";
import { DELETE_POST, DIS_LIKE_POST, LIKE_POST } from "../../../redux/reducers/posts-slice";

// Material Ui
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Menu, MenuItem, Modal, Backdrop, Fade, Box } from "@mui/material";
import { ThumbUpOffAltOutlined, ThumbDownOffAltOutlined, MoreHorizOutlined } from "@mui/icons-material/";

// get The Time That The Post Was Created
import moment from "moment";

const Post = ({ post }) => {
	const [updateState, setUpdateState] = useState(false);
	const dispatch = useDispatch();

	// Card Dropdown
	const [dropdown, setDropdown] = useState(null);
	const openDropdown = Boolean(dropdown);
	const toggleDropdown = (event) => setDropdown(event.currentTarget);
	const toggleCloseDropdown = () => setDropdown(null);

	// Update Model
	const [openModel, setOpenModel] = useState(false);
	const handleOpenModel = () => {
		setOpenModel(true);
		setUpdateState(true);
	};
	const handleCloseModel = () => {
		setOpenModel(false);
		setUpdateState(false);
	};

	// Delete Post
	const deletePost = () => dispatch(DELETE_POST(post._id));

	// Likes && Dislikes
	const handleLikes = () => dispatch(LIKE_POST({ _id: post._id, post }));
	const handleDisLikes = () => dispatch(DIS_LIKE_POST({ _id: post._id, post }));

	return (
		<Card className="Card-Container">
			<div className="card-header">
				<CardMedia component="img" image={post.selectedFile} alt={post.title} title={post.title} />
				<div className="header-overlay">
					<div className="heading">
						<Typography className="creator" variant="h6">
							{post.creator}
						</Typography>
						<Typography className="createdAt" variant="body2">
							{moment(post.createdAt).fromNow()}
						</Typography>
					</div>
					<div className="dropdown">
						<Button id="dropdown-button" onClick={toggleDropdown}>
							<MoreHorizOutlined />
						</Button>
					</div>
					<div className="menus">
						<div className="dropdown-menu">
							<Menu
								id="dropdown-menu"
								anchorEl={dropdown}
								open={openDropdown}
								onClose={toggleCloseDropdown}
								anchorOrigin={{ vertical: "top", horizontal: "left" }}
								transformOrigin={{ vertical: "top", horizontal: "left" }}>
								<MenuItem onClick={toggleCloseDropdown}>
									<h4 onClick={deletePost}>Delete Memory</h4>
								</MenuItem>
								<MenuItem onClick={toggleCloseDropdown}>
									<h4 onClick={handleOpenModel}>Update Memory</h4>
								</MenuItem>
							</Menu>
						</div>

						<div className="model-menu">
							<Modal
								className="model"
								open={openModel}
								onClose={handleCloseModel}
								closeAfterTransition
								BackdropComponent={Backdrop}
								BackdropProps={{ timeout: 500 }}>
								<Fade in={openModel}>
									<Box className="model-box">
										<Form
											title="Update Memory"
											updatePost={post}
											updateState={updateState}
											setUpdateState={setUpdateState}
											setOpenModel={setOpenModel}
										/>
									</Box>
								</Fade>
							</Modal>
						</div>
					</div>
				</div>
			</div>

			<CardContent className="card-body">
				<Typography className="tages" variant="body2" color="textSecondary">
					{post.tags.split(" ").map((tag, i) => (
						<a className="tag" href={`#${tag}`} key={i}>
							#{tag}
						</a>
					))}
				</Typography>

				<Typography className="title" variant="h5">
					{post.title}
				</Typography>

				<Typography className="message" variant="h6">
					{post.message}
				</Typography>
			</CardContent>

			<CardActions className="card-footer">
				<Button size="small" color="primary" onClick={handleLikes}>
					<ThumbUpOffAltOutlined fontSize="small" sx={{ mr: 1 }} /> Like {post.likes}
				</Button>

				<Button size="small" variant="text" color="error" onClick={handleDisLikes}>
					<ThumbDownOffAltOutlined fontSize="small" sx={{ mr: 1 }} /> Dislike {post.disLikes}
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
