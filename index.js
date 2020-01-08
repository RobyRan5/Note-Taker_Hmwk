const fs = require("fs");

fs.readFile("journal.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  const journalJSON = JSON.parse(data);
  const dbJSON = JSON.parse(data);

  const notes = [];

  
  jounralJSON.forEach(function(db) {
    if (write.notes === "write") {
      write.push(notes);
    } else if (save.notes === "save") {
      save.push(notes);
    }
  });

  
  const journalJSON = JSON.stringify(write, null, 2);
  const dbJSON = JSON.stringify(save, null, 2);

  fs.writeFile("db.json", saveJSON, function(err) {
    if (err) {
      throw err;
    }

    console.log("wrote to journal.json file");
  });

  fs.writeFile("journal.json", saveJSON, function(err) {
    if (err) { 
              throw err;
    }

    console.log("wrote to db.json file");
  });
});
