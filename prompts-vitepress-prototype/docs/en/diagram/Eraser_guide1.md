---
title: "Eraser Notation Guide Part 1"
sourcePath: "prompts/diagram/Eraser_guide1_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/diagram/Eraser_guide1_EN.md`
> Japanese: [JA](/diagram/Eraser_guide1)

# Eraser Notation Guide Part 1

Eraser is a documentation and diagram platform for engineering teams. It adopts its own notation to create visually expressive documentation. This guide explains Eraser's notation in detail and demonstrates how to use it with various examples.

## Basic Syntax

Eraser notation uses a concise syntax similar to YAML. The basic syntax is written as follows:

```yaml
// Node definition
node_name [attributes] {
  // Subnode definition
  subnode_name [attributes]
}

// Relationship definition
node1 > node2: [label]
```

**Explanation:**

* `//` indicates a comment.
* `node_name` is the name of the diagram element (node).
* `attributes` specify the shape, color, icon, text, etc. of the node.
* `subnode_name` is the name of an element nested within a node.
* `node1 > node2` indicates a relationship from node1 to node2.
* `[label]` is an optional label that adds an explanation to the relationship.

## Node Definition

Nodes represent elements of a diagram. Node definitions specify `node_name`, `attributes`, and `subnodes`.

### Attributes

Node attributes are specified by enclosing them in `[]`. The following attributes are available:

* `shape`: Specifies the shape of the node.
    * `oval`: Ellipse
    * `rectangle`: Rectangle
    * `diamond`: Diamond
    * `rounded_rectangle`: Rounded rectangle
    * `cylinder`: Cylinder
    * `hexagon`: Hexagon
    * `triangle`: Triangle
    * `parallelogram`: Parallelogram
    * `cloud`: Cloud
    * `star`: Star
    * `database`: Database
* `icon`: Specifies the icon to display on the node.
    * `file-text`: File
    * `bug`: Bug
    * `copy`: Copy
    * `repeat`: Repeat
    * `zap`: Lightning
    * `check-square`: Checkbox
    * `package`: Package
    * `send`: Send
    * `user`: User
    * `users`: Multiple users
    * `home`: Home
    * `folder`: Folder
    * `message-circle`: Message
    * `mail`: Email
    * `clock`: Clock
    * `list`: List
    * `key`: Key
    * `grid`: Grid
    * `link`: Link
    * `calendar`: Calendar
    * `oracle`: Oracle
    * `twitter`: Twitter
    * `facebook`: Facebook
    * `aws-api-gateway`: AWS API Gateway
    * `aws-lambda`: AWS Lambda
    * `aws-simple-storage-service`: AWS S3
    * `aws-ec2`: AWS EC2
    * `aws-rds`: AWS RDS
    * `aws-auto-scaling`: AWS Auto Scaling
    * `aws-redshift`: AWS Redshift
    * `kafka`: Kafka
    * `gcp-pubsub`: GCP Pub/Sub
    * `gcp-cloud-logging`: GCP Cloud Logging
    * `gcp-dataflow`: GCP Dataflow
    * `gcp-cloud-storage`: GCP Cloud Storage
    * `gcp-datastore`: GCP Datastore
    * `gcp-bigtable`: GCP Bigtable
    * `gcp-bigquery`: GCP BigQuery
    * `gcp-app-engine`: GCP App Engine
    * `gcp-container-registry`: GCP Container Registry
    * `gcp-compute-engine`: GCP Compute Engine
    * `azure-active-directory`: Azure Active Directory
    * `azure-load-balancers`: Azure Load Balancers
    * `azure-virtual-networks`: Azure Virtual Networks
    * `azure-network-security-groups`: Azure Network Security Groups
    * `azure-virtual-machine`: Azure Virtual Machine
    * `k8s-control-plane`: Kubernetes Control Plane
    * `k8s-api`: Kubernetes API
    * `k8s-sched`: Kubernetes Scheduler
    * `k8s-c-c-m`: Kubernetes Controller Manager
    * `k8s-c-m`: Kubernetes Cloud Controller Manager
    * `k8s-etcd`: Kubernetes etcd
    * `k8s-node`: Kubernetes Node
    * `k8s-kubelet`: Kubernetes Kubelet
    * `k8s-k-proxy`: Kubernetes KProxy
    * `databricks`: Databricks
    * `snowflake`: Snowflake
    * `slack`: Slack
    * `tensorflow`: TensorFlow
    * `tableau`: Tableau
    * `layout`: Web app
    * `database`: Database
    * `function`: Cloud function
    * `cloud-cog`: Cloud settings
    * `settings`: Settings
    * `aws`: AWS
    * `google-cloud`: Google Cloud
    * `azure`: Azure
    * `google`: Google
    * `microsoft`: Microsoft
* `color`: Specifies the color of the node.
    * `red`: Red
    * `green`: Green
    * `blue`: Blue
    * `yellow`: Yellow
    * `purple`: Purple
    * `orange`: Orange
    * `grey`: Gray
    * `silver`: Silver
* `text`: Specifies the text to display on the node.
* `style`: Specifies the style of the node.
    * `dashed`: Dashed line
    * `dotted`: Dotted line
    * `bold`: Bold
    * `italic`: Italic

### Subnodes

Subnodes represent elements nested within a node. Subnode definitions use the same syntax as node definitions.

```yaml
# Node definition
node_name [attributes] {
  # Subnode definition
  subnode_name [attributes]
}
```

Subnodes can be nested in multiple levels.

### Groups

Groups are a feature for grouping related nodes together. Group definitions are written by enclosing in `{}`. Nodes within a group can have colors specified with the `[color]` attribute.

```yaml
# Group definition
group_name [color] {
  # Node definitions within group
  node_name [attributes]
}
```

## Relationship Definition

Relationships represent connections between nodes. Relationship definitions use the syntax `node1 > node2`.

### Labels

Relationship labels are specified after `:`. Labels are used to add explanations or annotations to relationships.

```yaml
# Relationship definition
node1 > node2: [label]
```

### Relationship Types

Eraser supports the following relationship types:

* `>`: Directed relationship (from node1 to node2)
* `<`: Directed relationship (from node2 to node1)
* `<>`: Bidirectional relationship (between node1 and node2)

## Examples

### Issue Triage Flow

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717593719913.png)

```yaml
# Nodes and groups
Issue type? [shape: oval, icon: file-text]

BugPath [color: red] {
  Bug [icon: bug, color: red]
  Duplicate? [shape: diamond, icon: copy]
  Mark duplicate [shape: oval, icon: copy]
  Has repro? [shape: diamond, icon: repeat]
  Ask for repro [shape: oval, icon: repeat]
}

FeaturePath [color: green] {
  Feature [icon: zap, color: green]
  Well specced? [shape: diamond, icon: check-square]
  Can be package? [shape: diamond, icon: package]
  Define as package [shape: oval, icon: package]
}

Issue ready to claim [shape: oval, icon: send]

# Relationships
Issue type? > Bug
Bug > Duplicate?
Duplicate? > Mark duplicate: Yes
Duplicate? > Has repro?: No
Has repro? > Issue ready to claim: Yes
Has repro? > Ask for repro: No
Issue type? > Feature
Feature > Can be package?
Can be package? > Well specced?: No
Can be package? > Define as package: Yes
Well specced? > Issue ready to claim: Yes
```



### Price Lookup Flow

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717593739001.png)

```yaml
# Define nodes and relationships "A > B"
Start [shape: oval, icon: flag] > Read keywords from Excel [icon: excel]
Read keywords from Excel > Establish Amazon API connection [icon: amazon]
Establish Amazon API connection > Wait for user input [shape: diamond, icon: user]
Wait for user input > Search for keyword on Amazon[icon: search]: User selects keyword
Search for keyword on Amazon > Retrieve item price [icon: dollar-sign]
Retrieve item price > Output result to Excel [icon: excel]
Output result to Excel > End
Wait for user input > Close modal [icon: x]: User clicks cancel
Close modal > End [shape: oval, icon: check]

# Define groups
For each keyword in the list [icon: repeat] {
  Search for keyword on Amazon
  Retrieve item price
  Output result to Excel
}
```

## Summary

Eraser's notation is designed to create visually expressive documentation. With simple syntax and rich attributes and relationship types, you can easily create various diagrams. Use this guide as a reference to leverage Eraser's notation and create more effective documentation.

## Reference Site

https://docs.eraser.io/docs/what-is-eraser
