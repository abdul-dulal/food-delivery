const useClick = ({ refetch, order }) => {
  console.log(order?._id);
  const cancelOrder = () => {
    fetch(
      `https://still-tundra-10310.herokuapp.com/deleteorder/${order?._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };
  return [];
};

export default useClick;
