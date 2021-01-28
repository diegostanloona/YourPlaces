import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IconContext } from "react-icons";

import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

import './PlaceItem.css';

const PlaceItem = props => {
        const auth = useContext(AuthContext);
        const placeId = useParams().placeId;
        const history = useHistory();

        const { isLoading, error, sendRequest, clearError } = useHttpClient();

        const [showMap, setShowMap] = useState(false);
        const [showConfirmModal, setShowConfirmModal] = useState(false);
        const [isLiked, setIsLiked] = useState(props.likes.includes(auth.userId));
        const [likeCount, setLikeCount] = useState(props.likes.length);

        const openMapHandler = () => setShowMap(true);
        const closeMapHandler = () => setShowMap(false);

        const showDeleteWarningHandler = () => setShowConfirmModal(true);
        const cancelDeleteWarningHandler = () => setShowConfirmModal(false);
        const confirmDeleteHandler = async () => {
            setShowConfirmModal(false);
            try {
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}api/places/${props.id}`, 'DELETE', null, { Authorization: 'Bearer ' + auth.token });
                props.onDelete(props.id);
            } catch (e) {
                // statements
                console.log(e);
            }

        }

        const likeHandler = async () => {
            try {
                await sendRequest(`${process.env.REACT_APP_BACKEND_URL}api/places/${props.id}`, 'POST', null, { Authorization: 'Bearer ' + auth.token });
            } catch (e) {
                // statements
                console.log(e);
            }
            setIsLiked(!isLiked);
            setLikeCount(isLiked?likeCount-1:likeCount+1);
        }

     



        return <React.Fragment>
	<ErrorModal error={error} onClear={clearError} />
      
		<Modal show={showMap} onCancel={closeMapHandler} header={props.address} contentClass="place-item__modal-content" footerClass="place-item__modal-actions" footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
			<div className="map-container">
				<Map center={props.coordinates} zoom={16} />	
			</div>
		</Modal>
		<Modal show={showConfirmModal} onCancel={cancelDeleteWarningHandler} header="Are you sure?" footerClass="place-item__modal-actions" footer={
			<React.Fragment>
				<Button inverse onClick={cancelDeleteWarningHandler}>CANCEL</Button>
				<Button danger onClick={confirmDeleteHandler}>Delete</Button>
			</React.Fragment>
    } >
    <p>Do you want to proceed and delete this place? Please note that it can't be undone thereafter.</p> <
    /Modal> <
    li className = "place-item" >
    <Card className="place-item__content">
			<div className="place-item__image">
				<img src={`${process.env.REACT_APP_IMAGES_URL}${props.imageUrl}`} alt={props.title}/>
			</div>
			<div className="place-item__info">
				<h2>{props.title}</h2>
				<h3>{props.address}</h3>
				<p>{props.description}</p>
			</div>

			<div className="place-item__actions">
				{isLoading && <div className="center"><LoadingSpinner/></div> }

				<IconContext.Provider value={{ size: "2.3em" }}>
				<Button icon inverse onClick={auth.userId?likeHandler:null}>{isLiked && auth.userId && <AiFillHeart/>} { (!isLiked || !auth.userId) && <AiOutlineHeart/> }</Button>
			</IconContext.Provider><br/>
				<p className="likeCounter">{likeCount}</p>
				<Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
				{ auth.userId === props.creatorId && <>
				<Button to={`/places/${props.id}`}>EDIT</Button>
				<Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
				</>}
				
			</div>
		</Card> <
    /li> <
    /React.Fragment>



};

export default PlaceItem;