function status(request, response) {
  response.status(200).json({
    message: "Status code 200!",
  });
}

export default status;
