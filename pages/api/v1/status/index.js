function status(request, response) {
  response.status(200).json({
    message: "Endpoint funcional",
  });
}

export default status;
