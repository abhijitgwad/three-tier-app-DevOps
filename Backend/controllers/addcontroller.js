import mymodel from "../models/user.js";

export const addtaskcontroller = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.send({ message: "Task needed!!!" });
    }
    const isexist = await mymodel.findOne({ name });
    if (isexist) {
      return res.send({ message: "Task already exist!!!" });
    }

    const user = await new mymodel({ name, marked: false }).save();

    res.status(200).send({
      success: true,
      message: "Successfully inserted!!!",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Not inserted!!!",
      error,
    });
  }
};

export const alltaskcontroller = async (req, res) => {
  try {
    const data = await mymodel.find({});
    if (!data) {
      return res.send({
        success: success,
        message: "List is empty!!!",
      });
    }

    return res.send({
      success: true,
      message: "successfully fetched all tasks!!!",
      data,
    });
  } catch (error) {
    return res.send({
      success: failure,
      message: "unable to fetch!!!",
    });
  }
};

export const deletetaskcontroller = async (req, res) => {
  try {
    const result = await mymodel.findByIdAndDelete(req.params.id);

    return res.send({
      success: true,
      message: "Successfully deleted the task!!!",
    });
  } catch (error) {
    return res.send({
      success: false,
      message: "unable to delete!!!",
    });
  }
};

export const UpdateMarkcontroller = async (req, res) => {
  try {
    const { marked } = req.body;
    console.log(marked);
    const { id } = req.params;
    console.log(id);
    const result = await mymodel.findByIdAndUpdate(id, {
      marked: marked,
    });

    return res.send({
      success: true,
      message: "Successfully updated!!",
      result,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: "unable to update!!!",
    });
  }
};
