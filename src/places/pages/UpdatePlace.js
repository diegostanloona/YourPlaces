import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';


const UpdatePlace = () => {
    const auth = useContext(AuthContext);
    const [loadedPlace, setLoadedPlace] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const placeId = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm({
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const history = useHistory();


    useEffect(() => {
        const fetchPlace = async () => {

            const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}api/places/${placeId}`);
            console.log(responseData);
            setLoadedPlace(responseData.place);
            setFormData({
                    title: {
                        value: responseData.place.title,
                        isValid: true
                    },
                    description: {
                        value: responseData.place.description,
                        isValid: true
                    }
                },
                true
            );
        };
        fetchPlace();

    }, [sendRequest, placeId]);



    const placeUpdateSubmitHandler = async event => {
        event.preventDefault();
        try {
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}api/places/${placeId}`,
                'PATCH',
                JSON.stringify({
                    title: formState.inputs.title.value,
                    description: formState.inputs.description.value
                }), { 'Content-type': 'application/json', Authorization: 'Bearer ' + auth.token }
            );
            history.push(`/${auth.userId}/places`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

       {!isLoading && loadedPlace && <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={loadedPlace.title}
        initialValid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={loadedPlace.description}
        initialValid={true}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>}

    {!error && !isLoading && !loadedPlace && <div className="center"><Card><h2>Could not find place</h2></Card></div> }
                    </React.Fragment>

    );
};

export default UpdatePlace;