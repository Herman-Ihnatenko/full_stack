const Card = () => {
  return (
    <div className="card">
      <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZDReT-Fq0jDAtsKX0s10e3eZxYFrE58Tlw&s" alt="Homer Simpson" />
      <h2 className="name">Гомер Симпсон</h2>
      <p className="job">Род деятельности: Сотрудник атомной электростанции</p>
      <p className="hobbies">Хобби: Пиво, телевизор, донаты</p>
    </div>
  );
};

export default Card;