export default function UserCompo() {
  const user = {
    userName: "Trilochanprasad",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 50,
    borderRadius: "50%",
  };

  return (
    <div>
      <h1>Name of winner is: {user.userName}</h1>
      <img
        src={user.imageUrl}
        alt={user.userName + "this is photo of"}
        imageSize={user.imageSize}
        // style={{ borderRadius: "50%" }}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: user.borderRadius,
        }}
      />
    </div>
  );
}
