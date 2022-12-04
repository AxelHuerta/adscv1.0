const GridArea = ({ gridNumber, content }) => {
  // la cosa se complica para aplicar un loop,
  // pero existe una forma de utilizar listas através de llaves
  // https://reactjs.org/docs/lists-and-keys.html
  const listItems = [];
  for (let i = 0; i < content.length; i++) {
    listItems.push(
      <div key={i}>
        <li>
          <b>{content[i][0]}</b>
        </li>
        <li>{content[i][1]}</li>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridNumber}, 1fr)`,
        gridGap: "1em 0",
        textAlign: "center",
        listStyle: "none",
      }}
    >
      {listItems}
    </div>
  );
};

export default GridArea;
