import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../component/Loading";
import avatar from "../assets/images/avatar.jpg";
import { useEffect, useState } from "react";

const Myorder = () => {
  const [user] = useAuthState(auth);
  const [orders, setorder] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const email = user?.email;

  useEffect(() => {
    fetch(`https://still-tundra-10310.herokuapp.com/MyOrder?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setorder(data);
        setisLoading(true);
      });
  }, []);

  return (
    <>
      <div class="avatar grid justify-center mt-6">
        <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={avatar} alt="" />
        </div>
        <h1 className="mt-3  font-bold text-xl ">{user?.displayName}</h1>
        <p className="mt-1 text-center ">{user?.email}</p>
      </div>
      {isLoading ? (
        <>
          {" "}
          <div>
            <h1 className="text-2xl font-bold text-center my-3">
              {" "}
              Previous Order
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-16">
              {orders.map((order) => (
                <div class="card  bg-base-100 shadow-xl">
                  <figure class="px-10 pt-10">
                    <img src={order?.image} alt="Shoes" class="rounded" />
                  </figure>
                  <div class="card-body items-center text-center">
                    <h2 class="card-title text-center">{order?.name}</h2>
                    <p>
                      Steak FritesSteak Frites is a very popular dish served
                    </p>
                    <p className="font-bold"> Price $ {order?.price}</p>
                    {order?.quantity && <p> Quantity: {order?.quantity}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Myorder;
