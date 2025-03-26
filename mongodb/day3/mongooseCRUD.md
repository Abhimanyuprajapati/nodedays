Mongoose provides various queries to interact with MongoDB. Here's a list of commonly used CRUD (Create, Read, Update, Delete) queries in Mongoose:

1. Create (Insert) Queries
   Insert One Document
   js
   Copy
   Edit
   const product = new Product({ name: "Laptop", price: 1000, quantity: 10 });
   await product.save();
   or

js
Copy
Edit
const product = await Product.create({ name: "Laptop", price: 1000, quantity: 10 });
Insert Multiple Documents
js
Copy
Edit
const products = await Product.insertMany([
{ name: "Mouse", price: 20, quantity: 50 },
{ name: "Keyboard", price: 30, quantity: 30 }
]); 2. Read (Retrieve) Queries
Find All Documents
js
Copy
Edit
const products = await Product.find();
Find One Document
js
Copy
Edit
const product = await Product.findOne({ name: "Laptop" });
Find Document by ID
js
Copy
Edit
const product = await Product.findById("65d6e21c4a9e5f1234567890");
Find Documents with Conditions (Filters)
js
Copy
Edit
const expensiveProducts = await Product.find({ price: { $gt: 500 } });
Find and Select Specific Fields
js
Copy
Edit
const product = await Product.findOne({ name: "Laptop" }).select("name price");
Sorting Results
js
Copy
Edit
const sortedProducts = await Product.find().sort({ price: -1 }); // Descending order
Limit Number of Results
js
Copy
Edit
const limitedProducts = await Product.find().limit(5);
Pagination
js
Copy
Edit
const page = 2;
const limit = 5;
const paginatedProducts = await Product.find().skip((page - 1) * limit).limit(limit);
3. Update Queries
Update One Document
js
Copy
Edit
const updatedProduct = await Product.updateOne({ name: "Laptop" }, { $set: { price: 1200 } });
Update and Return the Updated Document
js
Copy
Edit
const updatedProduct = await Product.findOneAndUpdate(
  { name: "Laptop" },
  { $set: { price: 1200 } },
  { new: true } // Returns the updated document
);
Update by ID
js
Copy
Edit
const updatedProduct = await Product.findByIdAndUpdate(
  "65d6e21c4a9e5f1234567890",
  { $set: { price: 1200 } },
  { new: true }
);
Update Multiple Documents
js
Copy
Edit
const updatedProducts = await Product.updateMany(
  { price: { $lt: 50 } },
  { $set: { discount: true } }
);
4. Delete Queries
Delete One Document
js
Copy
Edit
await Product.deleteOne({ name: "Laptop" });
Delete by ID
js
Copy
Edit
await Product.findByIdAndDelete("65d6e21c4a9e5f1234567890");
Delete Multiple Documents
js
Copy
Edit
await Product.deleteMany({ price: { $lt: 50 } });
5. Aggregation Queries
Group & Count
js
Copy
Edit
const countByCategory = await Product.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } }
]);
Calculate Average Price
js
Copy
Edit
const avgPrice = await Product.aggregate([
  { $group: { _id: null, avgPrice: { $avg: "$price" } } }
]);
