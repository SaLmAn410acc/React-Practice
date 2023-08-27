const Person = ({ name, nickName, images }) => {
  // before optional chaining

  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || avatar;
  // const img = images[0].small.url;

  return (
    <div>
      {/* <img src={img} alt={name} style={{ width: "50px" }} /> */}
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
};
export default Person;
