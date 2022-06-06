const useClick = ({ refetch, order }) => {
  console.log(order?._id);
  const cancelOrder = () => {
    fetch(`http://localhost:4000/deleteorder/${order?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };
  return cancelOrder();
};

export default useClick;
