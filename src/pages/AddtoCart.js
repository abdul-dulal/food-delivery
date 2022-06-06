import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../component/Loading";
import OrderDeatils from "../component/OrderDeatils";
import auth from "../firebase.init";

const AddtoCart = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const {
    isLoading,
    refetch,
    data: order,
  } = useQuery("repoData", () =>
    fetch(`http://localhost:4000/order?email=${email}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Shoping <span className="text-secondary">Cart</span>
      </h1>
      <div class="overflow-x-auto mt-8 ">
        {order.length > 0 &&
          order?.map((order) => (
            <OrderDeatils order={order} refetch={refetch} />
          ))}
      </div>
    </div>
  );
};

export default AddtoCart;
