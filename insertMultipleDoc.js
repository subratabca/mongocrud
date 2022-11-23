const {client}=require("./dbConfig");

const insertMultipleDoc=async()=>{
try{
  const database=client.db("learnmongo");
  const users=database.collection("users");

  const docs=[
    { name: "Babu", city: "Manikgang" },
    { name: "Nasir", city: "Dhaka" },
    { name: "Jewel", city: "Tangail" }
  ];
  const result=await users.insertMany(docs);
  console.log(`${result.insertedCount} documents were inserted`);
}catch(error){
    console.log(error);
}finally{
    await client.close();
}
}

insertMultipleDoc();