import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
//useParams: get the dynamic param from the URL, in this case: we need /:id from src/services/tutorials.service.js
import TutorialService from "../services/tutorial.service";

const Tutorial = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const inititalTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false
  };

  const [currentTutorial, setCurrentTutorial] = useState(inititalTutorialState);
  const [message, setMessage] = useState("");

  const getTutorial = id => {
    TutorialService.get(id)
      .then(res => {
        setCurrentTutorial(res.data);
        console.log(res.data);
      })
      .then(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if(id) {
      getTutorial(id);
    }
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({...currentTutorial, [name]: value});
  };

  const updatePublished = status => {
    const data = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description:currentTutorial.description,
      published: status
    };

    TutorialService.update(currentTutorial.id, data)
      .then(res => {
        setCurrentTutorial({...currentTutorial, published: status});
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const updateTutorial = () => {
    TutorialService.update(currentTutorial.id, currentTutorial)
      .then(res => {
        setMessage("The tutorial was updated successfully!")
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteTutorial = () => {
    TutorialService.remove(currentTutorial.id)
      .then(res => {
        console.log(res.data);
        navigate("/tutorials");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTutorial.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTutorial.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentTutorial.published ? (
            <button
              className="btn btn-warning"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="btn btn-danger" onClick={deleteTutorial}>
            Delete
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={updateTutorial}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;