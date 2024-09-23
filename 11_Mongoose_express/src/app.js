const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/rkdatabase")
  .then(() => {
    console.log("Connections successful");
  })
  .catch((err) => {
    console.log("There was error", err);
  });

//   Now create the schema and then the model for it

const myFirstSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 2,
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 18) {
        throw new Error("The age has to be more than 18");
      }
    },
  },
  dob: Date,
  email: {
    type: String,
    required: true,
  },
});
// There are number of validators are present in there and they will be used for the input validation
// Now for this schema we need a model

const RkFirstCollection = new mongoose.model("FirstCollection", myFirstSchema);

const insertFunction = async () => {
  try {
    const myData = RkFirstCollection({
      name: "Gotya Bhai",
      age: 15,
      dob: Date.now(),
      email: "piyushgmore@gmail.com",
    });
    const result = await myData.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// insertFunction();

const inserManyFunction = async () => {
  try {
    const data1 = RkFirstCollection({
      name: "Avi",
      age: 22,
      dob: Date.now(),
      email: "avishkargaikwad@gmail.com",
    });

    const data2 = RkFirstCollection({
      name: "Sush",
      age: 22,
      dob: Date.now(),
      email: "SushantDataGangurde@gmail.com",
    });

    const data3 = RkFirstCollection({
      name: "Saurabh",
      age: 23,
      dob: Date.now(),
      email: "saurabhrnikam@gmail.com",
    });

    const results = await RkFirstCollection.insertMany([data1, data2, data3]);
    console.log(results);
  } catch (err) {
    console.log(err);
  }
};

// inserManyFunction();

// Now we will be readin the data

const readAllData = async () => {
  try {
    const result = await RkFirstCollection.find();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// readAllData();

const readSpecific = async () => {
  try {
    const results = await RkFirstCollection.find({
      name: "Radhakrushna",
    }).select({ email: 1, _id: 0 });
    console.log(results);
  } catch (err) {
    console.log(err);
  }
};

// readSpecific();

// there are some comarison operators in the mongoDB where we can get the results from the database based on the conditions of the comparison operators

const comparitiveFind = async () => {
  try {
    const results = await RkFirstCollection.find({
      name: { $in: ["Radhakrushna", "Saurabh"] },
    });
    console.log(results);
  } catch (err) {
    console.log(err);
  }
};
// simillarly there are other operators such that
// $gt, $lt, $gte, $lte, $nin, $eq, $ne

// comparitiveFind();

// logical operators are used for the purpose of having the data to get based on the condition that we might enter there

const logicalFunction = async () => {
  try {
    const result = await RkFirstCollection.find({
      $and: [{ age: 22 }, { name: "Radhakrushna" }],
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// simillarly there are other logical operators which we can use to get the output of the data in a way where we will be having the data in most suitable format based on the condition
// $and, $or, $not and $nor are the operators which are being used here

// logicalFunction();

// we can use the countDocuments to get the count of the results that matches the query
// also to sort the fields there is method called as sort({key : 1|-1})
// 1 here will sort the elements in ascending order and -1 in the descending order

// To update the data that is present in the database we use the updateMany

const updateFunction = async () => {
  try {
    const result = await RkFirstCollection.updateMany(
      { name: "Radhakrushna" },
      { name: "RK Don" }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// updateFunction();

const updateFunction2 = async (_id) => {
  try {
    const result = await RkFirstCollection.updateMany(
      { _id },
      { name: "Radhakrushna Shamrao Mahadik" }
    );
    console.log("Inside the second update function");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const updateUsingId = async () => {
  try {
    const id = await RkFirstCollection.find({ name: "RK Don" }).select({
      _id: 1,
    });
    console.log("Inside the first update function");
    updateFunction2(id);
  } catch (err) {
    console.log(err);
  }
};

// updateUsingId();

// Deleting the document

const deleteDocument = async () => {
  try {
    const id = await RkFirstCollection.find({ name: "Saurabh" }, { _id: 1 });
    const result = await RkFirstCollection.deleteOne({ _id: id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// deleteDocument();
