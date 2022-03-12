import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

const App = () => {
  const finalSpaceCharacters = [
    {
      id: 1,
      name: "Leanne Graham",
      url: "https://via.placeholder.com/600/92c952",
      thumb: "https://via.placeholder.com/150/6ccedb",
    },
    {
      id: 2,
      name: "Ervin Howell",
      url: "https://via.placeholder.com/600/771796",
      thumb: "https://via.placeholder.com/150/771796",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      url: "https://via.placeholder.com/600/24f355",
      thumb: "https://via.placeholder.com/150/24f355",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      url: "https://via.placeholder.com/600/d32776",
      thumb: "https://via.placeholder.com/150/e959e4",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      url: "https://via.placeholder.com/600/f66b97",
      thumb: "https://via.placeholder.com/150/f66b97",
    },
  ];

  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-DnD : Listing of Names</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={String(id)} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
};

export default App;
