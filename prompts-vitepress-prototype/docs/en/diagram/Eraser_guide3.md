---
title: "EraserAI Code Explanation - Practical Use Cases"
sourcePath: "prompts/diagram/Eraser_guide3_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/diagram/Eraser_guide3_EN.md`
> Japanese: [JA](/diagram/Eraser_guide3)

# EraserAI Code Explanation - Practical Use Cases

EraserAI is an incredibly useful tool for generating visual diagrams from natural language or code snippets!
This explanation will show beginners how to create easy-to-understand diagrams using EraserAI.

## Cloud Architecture (AWS Visualization)

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717869470895.png)

```eraser
// Let's represent a simple data pipeline in AWS
// [icon: aws-s3] specifies the icon for the AWS S3 service
Data Source [icon: aws-s3] > Data Processing [icon: aws-emr] > Data Destination [icon: aws-redshift]

// Visually represent the flow from data source to data processing, and finally to data destination
// ">" is an arrow showing how data moves
```

* **Explanation:** We represented a simple data pipeline that processes data with EMR from AWS S3 and finally loads data into Redshift.
* **Key Points:**
    * Using the `icon` attribute to add icons representing AWS services makes the diagram easier to understand.
    * Connection lines (`>`) visually show how data moves.

## Sequence Diagram (Step-by-Step API Request Flow)

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717869530345.png)

```eraser
// Let's visualize the sequence of API requests from client to server
Client [icon: user] > Server [icon: server]: API Request Send
// "activate Server" shows that the server is in an active state
activate Server
// The server sends a query to the database
Server > Database [icon: database]: Database Query
// The database returns query results to the server
Database > Server: Query Results
// The server sends a response to the client
Server > Client [icon: user]: Response Send
// "deactivate Server" indicates the server has finished processing
deactivate Server
```

* **Explanation:** We represented the flow of a client sending an API request to a server, the server retrieving data from a database, and returning results to the client.
* **Key Points:**
    * Using the `activate` / `deactivate` keywords makes it easy to express that the server is in an active state.
    * By writing clear messages at each step (`:`), you can easily track the processing flow.

## ERD (Drawing Database Design)

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717869622938.png)

```eraser
// Let's represent an ERD showing the relationship between users and teams
users [icon: user] {
    // id is the primary key and is of type string
    id string pk
    // name is the user's name and is of type string
    name string
    // email is the user's email address and is of type string
    email string
}

// Define the teams entity
teams [icon: users] {
    // id is the primary key and is of type string
    id string pk
    // name is the team's name and is of type string
    name string
}

// There is a one-to-many relationship between users and teams.
// A user belongs to one team, and a team can have multiple users.
users.teamId > teams.id
```

* **Explanation:** We represented the entities of users and teams and the relationship between them.
* **Key Points:**
    * The `pk` attribute indicates a primary key.
    * Connection lines (`>`) indicate a one-to-many relationship.

## Flowchart (Visualizing Processing Flow)

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717869683456.png)

```eraser
// A flowchart that accepts user input, processes data, and outputs results
Start [shape: oval] > Get User Input [shape: diamond]
// Diamond shapes represent conditional branches
Get User Input > Process Data [shape: rectangle]: Yes
// Rectangles represent processing
Process Data > Output Result [shape: rectangle]
Get User Input > Exit [shape: oval]: No
```

* **Explanation:** We created a simple flowchart that accepts user input, processes it, and outputs results.
* **Key Points:**
    * Using the `shape` attribute, you can specify the shape (circle, diamond, rectangle) for each step.
    * Connection lines (`>`) clearly express the processing flow.



## Summary

EraserAI helps facilitate communication and collaboration within teams by making diagram generation and sharing easy.
Using these code examples as reference, try utilizing EraserAI in various situations to work more efficiently.

**For more detailed information, please refer to the official EraserAI documentation.**

https://docs.eraser.io/docs/what-is-eraser

**Good luck!**
