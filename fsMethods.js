import fs from 'fs';

// READ METHODS

// Read a file asynchronously
fs.readFile("./test.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
})

// Synchronous method, blocking, istifade etmirik
const fileContents = fs.readFileSync("./test.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    return data
})

console.log(fileContents)


// WRITE METHODS

const data = "Hello, this is a test write operation!";

// Write to a file asynchronously, creating the file if it doesn't exist
fs.writeFile("./writeDemo.txt", data, (err) => {
    if (err) {
        console.error("Error writing to file:", err);
        return;
    }

    console.log("File written successfully!");
})

// Synchronous method, blocking, istifade etmirik
fs.writeFileSync("./writeDemo.txt", data, (err) => {
    if (err) {
        console.error("Error writing to file:", err);
        return;
    }

    console.log("File written successfully!");
} )

// Append to a file asynchronously
fs.appendFile("./writeDemo.txt", "\nHello, this is a test append operation!", (err) => {
    if (err) {
        console.error("Error appending to file:", err);
        return;
    }

    console.log("File appended successfully!");
}
)

// Create a new directory
fs.mkdir("./testDir", (err) => {
    if (err) {
        console.error("Error creating directory:", err);
        return;
    }

    console.log("Directory created successfully!");
}
)

// Removes existing directory
fs.rmdir("./testDir", (err) => {
    if (err) {
        console.error("Error removing directory:", err);
        return;
    }

    console.log("Directory removed successfully!");
}
)

// Delete a file
fs.unlink("./deleteDemo.txt", (err) => {
    if (err) {
        console.error("Error deleting file:", err);
        return;
    }

    console.log("File deleted successfully!");
}
)

// Rename a file
fs.rename("./renameDemo.txt", "./renameDemo2.txt", (err) => {
    if (err) {
        console.error("Error renaming file:", err);
        return;
    }
    console.log("File renamed successfully!");
})

// Copy a file
fs.readFile("./test.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }


    fs.writeFile("./writeDemo.txt", data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return;
        }

        console.log("File written successfully!");
    })
})


// Check if a file exists
const fileExists = fs.existsSync("./test.txt", (err) => {
    if (err) {
        console.error("Error checking file existence:", err);
        return false
    }

    return true
}
)

if(fileExists) {
   // append
}{
    // write
}