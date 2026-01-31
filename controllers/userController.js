const supabase = require("../config/supabase");


exports.getUsers = async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("*");

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
};


exports.addUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, password, role }]);

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
};