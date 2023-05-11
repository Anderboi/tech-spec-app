export default function handler(req: any, res: any) {
  // Get data submitted in request's body.
  const body = req.body
  // Optional logging to see the responses
  // in the command line reqwhere next.js app is running.
  console.log("body: ", req);
  console.log("response: ", res);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!req.area) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "First or last name not found" });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${req.area} ${req.address}` });
}