const Data = [
    {
        img: "https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?t=st=1712668243~exp=1712671843~hmac=75842d68b3d6f7b4761f0fa3a02e59fcde1510cea1ca0f09811d934937c43202&w=1380",
        Name: "Michael",
        Email: "michael.smith@example.com",
        Roll: "1234",
        Contact: "9876543210",
        Result: "fail",
    },
    {
        img: "https://media.istockphoto.com/id/1353588870/photo/young-indian-woman-on-yellow-copy-space-background-stock-photo.jpg?s=2048x2048&w=is&k=20&c=1S744lHGcigKQEE4np-h16B5TLN7qRJ4wAqYpXa7Prg=",
        Name: "Jennifer",
        Email: "jennifer.jones@example.com",
        Roll: "5678",
        Contact: "9876543211",
        Result: "pass",
    },
    {
        img: "https://as2.ftcdn.net/v2/jpg/03/77/92/33/1000_F_377923358_dWdvWOPIegRptEOMUHIkP9KlKCkhGW5j.jpg",
        Name: "Christopher",
        Email: "christopher.brown@example.com",
        Roll: "91011",
        Contact: "9876543212",
        Result: "fail",
    },
    {
        img: "https://www.louisvillecardinal.com/media/2022/11/Depositphotos_122104490_S.jpg",
        Name: "Jessica",
        Email: "jessica.davis@example.com",
        Roll: "121314",
        Contact: "9876543213",
        Result: "pass",
    },
    {
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Name: "Matthew",
        Email: "matthew.wilson@example.com",
        Roll: "151617",
        Contact: "9876543214",
        Result: "fail",
    },
    {
        img: "https://static.tnn.in/thumb/msid-93205942,thumbsize-66742,width-1280,height-720,resizemode-75/93205942.jpg",
        Name: "Amanda",
        Email: "amanda.miller@example.com",
        Roll: "181920",
        Contact: "9876543215",
        Result: "pass",
    },
    {
        img: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Name: "David",
        Email: "david.taylor@example.com",
        Roll: "212223",
        Contact: "9876543216",
        Result: "fail",
    },
    {
        img: "https://www.dreamapply.com/wp-content/uploads/2019/02/header-dreamapply-trends-for-indian-students-studying-abroad.jpg",
        Name: "Sarah",
        Email: "sarah.anderson@example.com",
        Roll: "242526",
        Contact: "9876543217",
        Result: "pass",
    },
];
const Mydata = () => {
  return (
    <div className="col-12 d-flex flex-wrap">
      {Data.map((item) => (
         <div className="card col-5 mx-3 my-5">
         <div className="card-body"><img className="card-img-top border border-5" src={item.img}/></div>
          <p className="text-white">Name: {item.Name}</p>
          <p className="text-white">Email: {item.Email}</p>
          <p className="text-white">Roll: {item.Roll}</p>
          <p className="text-white">Contact: {item.Contact}</p>
          <p className="text-white">Result: {item.Result}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default Mydata;
