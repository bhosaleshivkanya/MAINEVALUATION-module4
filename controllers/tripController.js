const supabase = require("../config/supabase");


exports.getTrips = async (req, res) => {
  const { data, error } = await supabase
    .from("trips")
    .select("*");

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
};


exports.addTrip = async (req, res) => {
  const {
    customer_id,
    vehicle_id,
    start_date,
    end_date,
    location,
  } = req.body;

  const { data, error } = await supabase
    .from("trips")
    .insert([
      {
        customer_id,
        vehicle_id,
        start_date,
        end_date,
        location,
      },
    ]);

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
};
