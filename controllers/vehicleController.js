const supabase = require("../config/supabase");


exports.getVehicles = async (req, res) => {
  const { data, error } = await supabase
    .from("vehicles")
    .select("*");

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
};


exports.addVehicle = async (req, res) => {
  const { vehicle_number, capacity, rate_per_km, owner_id } = req.body;

  const { data, error } = await supabase
    .from("vehicles")
    .insert([
      { vehicle_number, capacity, rate_per_km, owner_id },
    ]);

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
};
