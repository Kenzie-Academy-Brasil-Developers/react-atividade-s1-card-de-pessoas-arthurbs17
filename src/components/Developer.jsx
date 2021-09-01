const Developer = ({ name, age, country }) => {
  return (
    <div className="DevCard">
      <span>
        <p>Dev: {name}</p>
        <p>Idade: {age}</p>
        <p>País: {country}</p>
      </span>
    </div>
  );
};

export default Developer;
