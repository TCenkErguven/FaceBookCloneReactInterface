import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function RecipeReviewCard(props) {
    const [imageNumber, setImageNumber] = React.useState(0);
    return (
        <Card sx={{ margin: 1 }}>
            <CardHeader
                avatar={
                    <Avatar alt="profil avatar" src={props.item.useravatar} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.item.username}
                subheader={props.item.sharedtime}
            />
            <CardMedia
                component="img"
                height="194"
                image={
                    props.item.posturls === undefined
                        ? "https://media.istockphoto.com/id/1437973169/photo/default-word-on-wooden-blocks.jpg?b=1&s=170667a&w=0&k=20&c=L0O0S-DOzc_je18XIOjUrlzOPjAGvm_dEyLr7_7h--U="
                        : props.item.posturls[imageNumber]
                }
                alt="Paella dish"
            />
            <div>
                <button
                    onClick={() => {
                        setImageNumber(0);
                    }}
                    style={{
                        borderWidth: 0,
                        backgroundColor: 'green',
                        width: 16,
                        height: 16,
                        borderRadius: 8,
                        margin: 5,
                        marginLeft: '40%'
                    }} />
                <button
                    onClick={() => {
                        setImageNumber(1);
                    }}
                    style={{
                        borderWidth: 0,
                        backgroundColor: 'red',
                        width: 16,
                        height: 16,
                        borderRadius: 8,
                        margin: 5,
                        marginLeft: 10
                    }} />
            </div>

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {
                        props.item.posttext === undefined
                            ? 'No description'
                            : props.item.posttext
                    }
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>

        </Card >
    );
}