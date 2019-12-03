import React, { useState } from "react";
import personsService from "../services/Persons";

const PersonForm = ({ persons, onPersonSuccess, onError }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const onNameChange = event => {
    setNewName(event.target.value);
  };

  const onNumberChange = event => {
    setNewNumber(event.target.value);
  };

  /// addPerson
  const addPerson = async event => {
    const personObject = await personsService.create({
      name: newName,
      number: newNumber
    });

    onPersonSuccess(persons.concat(personObject), `Added ${newName}`);
    setNewName("");
    setNewNumber("");
  };
  const findExistingPerson = newName => {
    return persons.find(person => person.name === newName);
  };

  //update person info
  const updatePerson = (nameMatch, personObject) => {
    if (
      window.confirm(
        `${personObject.name} is already added to phonebook, replace the old number with the new one?`
      )
    ) {
      personsService
        .update(nameMatch.id, personObject)
        .then(() => {
          personsService
            .getAll()
            .then(updatedPersons => {
              onPersonSuccess(
                updatedPersons,
                `Updated ${personObject.name}'s info`
              );
            })
            .catch(error => {
              onError(personObject);
            });
        })
        .catch(error => {
          onError(personObject);
        });
    } else {
      setNewName("");
      setNewNumber("");
    }
  };

  //handle data
  const handleData = event => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber
    };
    const personMatch = findExistingPerson(newName);
    personMatch === undefined
      ? addPerson(nameObject)
      : updatePerson(personMatch, nameObject);
  };

  return (
    <div>
      <form onSubmit={handleData}>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={onNumberChange} />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
};
export default PersonForm;
